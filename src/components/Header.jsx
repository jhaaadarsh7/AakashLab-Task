import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Sparkles, ChevronDown, Zap, Globe, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const handleCryptoTrackerClick = () => {
    navigate('/api');
  };

  const navigationItems = [
    { id: 'hero', label: 'Home', icon: null },
    { id: 'about', label: 'About', icon: null },
    { id: 'team', label: 'Team', icon: null },
    { id: 'contact', label: 'Contact', icon: null },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <span className="text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  AakashLabs
                </span>
                <div className="flex items-center space-x-1 mt-0.5">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-medium">ONLINE</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : isScrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-white hover:text-blue-200'
                  }`}
                >
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl"></div>
                  )}
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
              
              {/* Special CTA */}
              <button
                onClick={handleCryptoTrackerClick}
                className="relative ml-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Crypto Tracker</span>
                </div>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`}>
                  <Menu className="w-6 h-6" />
                </div>
                <div className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                }`}>
                  <X className="w-6 h-6" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
            <nav className="container mx-auto px-6 py-4">
              <div className="grid grid-cols-1 gap-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id ? 'bg-blue-600' : 'bg-gray-300'
                    }`}></div>
                    <span>{item.label}</span>
                  </button>
                ))}
                
                <button
                  onClick={handleCryptoTrackerClick}
                  className="flex items-center space-x-3 px-4 py-3 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Crypto Tracker</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <button className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        </button>
        <button className="group w-12 h-12 bg-white text-gray-700 rounded-full shadow-2xl hover:shadow-gray-500/25 transform hover:scale-110 transition-all duration-300 flex items-center justify-center border border-gray-200">
          <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse delay-500"></div>
      </div>
    </>
  );
};

export default Header;