import React, { useState } from 'react';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setSubscriptionStatus('');

    try {
      const response = await fetch('https://api.aakashlabs.com/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscriptionStatus('success');
        setEmail('');
      } else {
        setSubscriptionStatus('error');
      }
    } catch (error) {
      setSubscriptionStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="p-2 bg-blue-500 rounded-lg mr-3 group-hover:bg-blue-400 transition-colors duration-300">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AakashLabs
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                We are a forward-thinking software development company specializing in creating 
                innovative digital solutions that transform businesses and drive growth.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "https://facebook.com/aakashlabs", color: "hover:bg-blue-600" },
                  { icon: Twitter, href: "https://twitter.com/aakashlabs", color: "hover:bg-blue-400" },
                  { icon: Instagram, href: "https://instagram.com/aakashlabs", color: "hover:bg-pink-600" },
                  { icon: Linkedin, href: "https://linkedin.com/company/aakashlabs", color: "hover:bg-blue-700" }
                ].map(({ icon: Icon, href, color }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'About Us', id: 'about' },
                  { label: 'Our Team', id: 'team' },
                  { label: 'Contact Us', id: 'contact' }
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'UI/UX Design',
                  'Cloud Solutions',
                  'API Development'
                ].map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="p-2 bg-gray-800 rounded-lg mr-3 group-hover:bg-blue-600 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm">contact@aakashlabs.com</span>
                </div>
                <div className="flex items-center group">
                  <div className="p-2 bg-gray-800 rounded-lg mr-3 group-hover:bg-blue-600 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-gray-300 text-sm">01-4530196

</span>
                </div>
                <div className="flex items-start group">
                  <div className="p-2 bg-gray-800 rounded-lg mr-3 group-hover:bg-blue-600 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                  </div>
                  <span className="text-gray-300 text-sm">
                    Laxmi Plaza,<br />
                    Putali Sadak, Kathmandu, Nepal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-xl font-semibold mb-3 text-white">Stay Updated</h3>
              <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest updates and insights.</p>
              
              <div className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <button 
                    onClick={handleNewsletterSubmit}
                    disabled={isLoading || !email}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </button>
                </div>
                
                {subscriptionStatus === 'success' && (
                  <div className="flex items-center justify-center text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Successfully subscribed!
                  </div>
                )}
                
                {subscriptionStatus === 'error' && (
                  <div className="flex items-center justify-center text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Failed to subscribe. Please try again.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} AakashLabs. All rights reserved. Built with passion by our amazing team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;