import React from 'react';
import { Users, Target, Heart, Award, ArrowLeft } from 'lucide-react';

const About = () => {
  const handleGoBack = () => {
    console.log("Navigate back");
    // Replace with: navigate("/") or navigate(-1)
  };

  const stats = [
    { number: "10K+", label: "Happy Users" },
    { number: "500+", label: "Topics Covered" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Users size={24} />,
      title: "Community First",
      description: "We believe in building strong communities where everyone can learn and grow together."
    },
    {
      icon: <Target size={24} />,
      title: "Quality Content",
      description: "Every piece of content is carefully crafted and reviewed to ensure the highest quality."
    },
    {
      icon: <Heart size={24} />,
      title: "User Experience",
      description: "We prioritize user experience in everything we do, making learning enjoyable and accessible."
    },
    {
      icon: <Award size={24} />,
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new ways to deliver value to our users."
    }
  ];

  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      <div className="p-6">
        <button 
          onClick={handleGoBack}
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg">
            <Users size={40} className="text-white" />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
            About Us
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We're passionate about creating amazing experiences and helping people discover 
            new topics, connect with communities, and achieve their goals through innovative solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-blue-500/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
              To democratize access to knowledge and create a platform where curiosity meets opportunity. 
              We believe that everyone deserves access to high-quality content and the tools they need 
              to learn, grow, and succeed in their personal and professional journey.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision of making 
            knowledge accessible to everyone. Whether you're a creator, developer, or just 
            someone who loves to learn, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Get Involved
            </button>
            <button className="px-8 py-4 bg-slate-700 text-white rounded-xl font-semibold hover:bg-slate-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;