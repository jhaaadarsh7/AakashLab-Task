import React from 'react';
import { Github, Linkedin, Twitter, Award, Users, Target } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Dipesh karki",
      role: "Finance Manager",
      image: "https://aakashlabs.com/_nuxt/img/dipesh.e83f911.jpg",
      bio: "Visionary leader with 10+ years of experience in software development and business strategy.",
      specialty: "Strategic Vision",
      social: {
        github: "https://github.com/aakashlabs",
        linkedin: "https://linkedin.com/in/aakashlabs",
        twitter: "https://twitter.com/aakashlabs"
      }
    },
    {
      name: "Prayusha Shrestha",
      role: "HR Officer",
      image: "https://aakashlabs.com/_nuxt/img/pra.cff5285.jpg",
      bio: "Full-stack developer specializing in React, Node.js, and cloud technologies.",
      specialty: "Technical Excellence",
      social: {
        github: "https://github.com/priyapatel",
        linkedin: "https://linkedin.com/in/priyapatel",
        twitter: "https://twitter.com/priyapatel"
      }
    },
    {
      name: "Aman Shrestha",
      role: "Sr. Graphic Designer",
      image: "https://aakashlabs.com/_nuxt/img/aman.b85e840.jpeg",
      bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
      specialty: "Design Innovation",
      social: {
        github: "https://github.com/rajkumar",
        linkedin: "https://linkedin.com/in/rajkumar",
        twitter: "https://twitter.com/rajkumar"
      }
    },
    {
      name: "Anjali Singh",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Experienced project manager ensuring smooth delivery of complex software projects.",
      specialty: "Project Leadership",
      social: {
        github: "https://github.com/anjalisingh",
        linkedin: "https://linkedin.com/in/anjalisingh",
        twitter: "https://twitter.com/anjalisingh"
      }
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Team Members" },
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Target, value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Our Distinguished Team
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
              Meet Our Visionaries
            </h2>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Behind every exceptional project is an extraordinary team. Our diverse group of innovators, 
              creators, and strategists work in perfect harmony to transform your vision into reality.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Profile Image */}
                <div className="relative mb-6 z-10">
                  <div className="relative mx-auto w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Floating specialty badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {member.specialty}
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold text-sm mb-4">
                    {member.role}
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join Our Journey?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                We're always seeking exceptional talent who share our passion for innovation 
                and excellence. Discover opportunities to grow with us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;