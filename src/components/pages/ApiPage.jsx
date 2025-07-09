import React, { useEffect, useState } from "react";
import {
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Zap,
  Star,
  Eye,
  BarChart3,
  Activity,
  Globe,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Crown,
  Flame,
  Home,
} from "lucide-react";

const CryptoPage = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY ;

  const fetchCrypto = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://coinranking1.p.rapidapi.com/coins?limit=12",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch crypto data");
      }

      const data = await response.json();
      setCoins(data.data.coins);
      setLastUpdate(new Date());
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCrypto();
    const interval = setInterval(fetchCrypto, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price) => {
    const num = parseFloat(price);
    if (num >= 1000) {
      return `$${num.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
    return `$${num.toFixed(6)}`;
  };

  const formatMarketCap = (marketCap) => {
    const num = parseFloat(marketCap);
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toLocaleString()}`;
  };

  const getRankColor = (rank) => {
    if (rank === 1) return "from-yellow-400 to-yellow-600";
    if (rank === 2) return "from-gray-400 to-gray-600";
    if (rank === 3) return "from-orange-400 to-orange-600";
    if (rank <= 5) return "from-purple-400 to-purple-600";
    return "from-blue-400 to-blue-600";
  };

  const getRankIcon = (rank) => {
    if (rank === 1) return <Crown className="w-4 h-4" />;
    if (rank <= 3) return <Star className="w-4 h-4" />;
    if (rank <= 5) return <Flame className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  const PulsingOrb = ({ color, size = "w-2 h-2" }) => (
    <div className="relative">
      <div className={`${size} bg-${color}-500 rounded-full animate-pulse`}></div>
      <div
        className={`absolute inset-0 ${size} bg-${color}-500 rounded-full animate-ping opacity-75`}
      ></div>
    </div>
  );

  const CryptoCard = ({ coin, index }) => {
    const isPositive = parseFloat(coin.change) >= 0;
    const rankColor = getRankColor(coin.rank);

    return (
      <div
        className={`group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 hover:bg-white/20 transition-all duration-700 transform hover:scale-105 border border-white/20 hover:border-white/40 ${
          hoveredCard === coin.uuid ? "scale-105 shadow-2xl" : "shadow-lg"
        }`}
        onMouseEnter={() => setHoveredCard(coin.uuid)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => setSelectedCoin(selectedCoin === coin.uuid ? null : coin.uuid)}
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${rankColor} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}
        />

        {/* Glowing border */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${rankColor} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-700`}
        />

        {/* Card content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {/* Rank badge */}
              <div
                className={`flex items-center space-x-1 px-3 py-1 bg-gradient-to-r ${rankColor} rounded-full text-white text-sm font-bold shadow-lg`}
              >
                {getRankIcon(coin.rank)}
                <span>#{coin.rank}</span>
              </div>

              {/* Coin icon */}
              <div className="relative">
                <img
                  src={coin.iconUrl}
                  alt={coin.name}
                  className="w-12 h-12 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute -top-1 -right-1">
                  <PulsingOrb color={isPositive ? "green" : "red"} />
                </div>
              </div>
            </div>

            {/* Price change indicator */}
            <div
              className={`flex items-center space-x-1 px-3 py-1 rounded-full ${
                isPositive ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
              }`}
            >
              {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              <span className="font-bold text-sm">
                {isPositive ? "+" : ""}
                {parseFloat(coin.change).toFixed(2)}%
              </span>
            </div>
          </div>

          {/* Coin name and symbol */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
              {coin.name}
            </h3>
            <p className="text-gray-300 text-sm uppercase tracking-widest font-semibold">{coin.symbol}</p>
          </div>

          {/* Price */}
          <div className="mb-4">
            <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
              {formatPrice(coin.price)}
            </div>

            {/* 24h change */}
            <div className={`flex items-center space-x-2 ${isPositive ? "text-emerald-400" : "text-red-400"}`}>
              <div className={`p-1 rounded-full ${isPositive ? "bg-emerald-500/20" : "bg-red-500/20"}`}>
                {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              </div>
              <span className="text-sm font-medium">24h Change</span>
            </div>
          </div>

          {/* Market cap */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">Market Cap</span>
              </div>
              <span className="font-bold text-white text-sm">{formatMarketCap(coin.marketCap)}</span>
            </div>
          </div>

          {/* Expanded info */}
          {selectedCoin === coin.uuid && (
            <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">24h Volume</span>
                  <p className="text-white font-semibold">{formatMarketCap(coin["24hVolume"])}</p>
                </div>
                <div>
                  <span className="text-gray-400">BTC Price</span>
                  <p className="text-white font-semibold">{parseFloat(coin.btcPrice).toFixed(8)} BTC</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 relative">
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => window.location.href = '/'}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-lg"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 pt-16">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl shadow-2xl">
                <Sparkles className="w-16 h-16 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-50 animate-pulse" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 leading-tight">
            CRYPTO UNIVERSE
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the future of finance with real-time cryptocurrency data, stunning visualizations, and premium market
            insights
          </p>

          {/* Status indicator */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
              <PulsingOrb color="green" />
              <span className="text-white text-sm">Live Data</span>
            </div>

            {lastUpdate && (
              <div className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <Activity className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm">Updated: {lastUpdate.toLocaleTimeString()}</span>
              </div>
            )}
          </div>

          {/* Refresh button */}
          <button
            onClick={fetchCrypto}
            disabled={loading}
            className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-3xl"
          >
            <div className="flex items-center space-x-3">
              <RefreshCw
                className={`w-5 h-5 ${loading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`}
              />
              <span className="text-lg">{loading ? "Refreshing Universe..." : "Refresh Data"}</span>
            </div>
          </button>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative mb-8">
              <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
              <div
                className="absolute inset-0 w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"
                style={{ animationDirection: "reverse" }}
              />
            </div>
            <div className="text-2xl font-bold text-white animate-pulse">Loading Crypto Universe...</div>
          </div>
        )}

        {/* Crypto cards */}
        {!loading && coins.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coins.map((coin, index) => (
              <CryptoCard key={coin.uuid} coin={coin} index={index} />
            ))}
          </div>
        )}

        {/* Stats footer */}
        {!loading && coins.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Market Leaders</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Track the top performing cryptocurrencies with real-time price movements and market analysis
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Live Monitoring</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Get instant updates every minute with comprehensive market data and trading volumes
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Global Coverage</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Explore coins from all over the world with deep insights and comprehensive ranking data
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CryptoPage;

