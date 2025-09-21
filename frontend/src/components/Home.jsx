import React from "react";
import { LayoutDashboard, ArrowRight, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  

 

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <LayoutDashboard size={40} className="text-white" />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Welcome Home
          </h1>
          
          <p className="text-xl text-slate-300 max-w-md mx-auto leading-relaxed">
            Discover amazing topics and explore everything we have to offer in one simple place.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => navigate("/topics")}
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <button 
            onClick={() => navigate("/about")}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-700 text-white rounded-xl font-semibold text-lg hover:bg-slate-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Info size={20} />
            About Us
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Easy to Use</h3>
            <p className="text-slate-400 text-sm">Simple and intuitive interface designed for everyone</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Fast & Reliable</h3>
            <p className="text-slate-400 text-sm">Built for performance with modern technology</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold mb-2">Always Updated</h3>
            <p className="text-slate-400 text-sm">Fresh content and features added regularly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;