import React, { useState, useEffect, useRef } from 'react';
import { Target, Lightbulb, Users, Award, Rocket, Zap, Globe, Shield, Code, Brain, Heart, Star } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, satisfaction: 0, support: 0 });
  const sectionRef = useRef(null);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Innovation",
      description: "We harness artificial intelligence and machine learning to create intelligent solutions that adapt and evolve with your business needs.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Rocket,
      title: "Lightning Fast Delivery",
      description: "Our agile development process ensures rapid deployment without compromising quality, getting your solutions to market faster.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built with security-first principles, our solutions protect your data with enterprise-grade encryption and compliance standards.",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Our cloud-native architecture ensures your applications can scale globally, handling millions of users seamlessly.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const achievements = [
    { icon: Star, number: "500M+", label: "API Calls Processed", color: "text-yellow-500" },
    { icon: Users, number: "10M+", label: "Users Served", color: "text-blue-500" },
    { icon: Award, number: "99.9%", label: "Uptime Guarantee", color: "text-green-500" },
    { icon: Zap, number: "24/7", label: "Global Support", color: "text-purple-500" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          const animateStats = () => {
            let current = 0;
            const increment = () => {
              current += 1;
              setAnimatedStats({
                projects: Math.min(current * 2, 50),
                satisfaction: Math.min(current, 98),
                support: current <= 24 ? current : 24
              });
              if (current < 98) requestAnimationFrame(increment);
            };
            requestAnimationFrame(increment);
          };
          animateStats();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative py-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6">
              <Code className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700 tracking-wide">ABOUT AAKASHLABS</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Masterpieces
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're not just developers—we're digital architects building the future of technology. 
              Every line of code we write is a brushstroke on the canvas of innovation.
            </p>
          </div>

          {/* Hero Content Section */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                Transforming Ideas into 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Digital Reality</span>
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At AakashLabs, we don't just build software—we engineer experiences that captivate, 
                inspire, and transform. Our team of visionary developers, designers, and strategists 
                collaborates to create solutions that push the boundaries of what's possible.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From AI-powered applications to blockchain solutions, we're at the forefront of 
                technological innovation, helping businesses leap into the future with confidence.
              </p>
              
              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {animatedStats.projects}+
                  </div>
                  <div className="text-gray-600 font-medium">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    {animatedStats.satisfaction}%
                  </div>
                  <div className="text-gray-600 font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {animatedStats.support}/7
                  </div>
                  <div className="text-gray-600 font-medium">Expert Support</div>
                </div>
              </div>

              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 inline-flex items-center shadow-2xl">
                <span>Start Your Journey</span>
                <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Innovation team collaboration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-3xl font-black">5+</div>
                <div className="text-sm font-medium">Years of Innovation</div>
              </div>

              {/* Floating Tech Stack */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Next-Gen Tech Stack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`mb-24 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AakashLabs?</h3>
              <p className="text-xl text-gray-600">Cutting-edge solutions that set industry standards</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden ${
                    activeFeature === index ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className={`bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h3>
              <p className="text-xl text-gray-300">Delivering excellence across the globe</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300`}>
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <div className="text-4xl font-black text-white mb-2">{achievement.number}</div>
                  <div className="text-gray-300 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center mt-20 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <Heart className="w-12 h-12 mx-auto mb-6 text-pink-300" />
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Vision?</h3>
              <p className="text-xl mb-8 opacity-90">Let's build something extraordinary together</p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;