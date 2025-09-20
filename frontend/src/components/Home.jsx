import React from "react";
import { LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center py-6 bg-zinc-900">
      <div className="flex flex-col items-center mb-6 bg-zinc-800 rounded-2xl shadow-2xl p-12 w-full max-w-3xl mx-7">
        
        {/* Hero Image */}
        <img
          src="https://imgs.search.brave.com/Yx-gT4exReFVXeRSW3WsNs1sQLn62wdNwtw-nFj3MhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzY3LzI2Lzgx/LzM2MF9GXzQ2NzI2/ODE5OV9oNkt3emw4/M0dDVjkzbmhjNmZP/WWxpTThLWkdLc01R/di5qcGc"
          alt="Hero"
          className="w-full h-48 object-cover rounded-xl mb-6"
        />

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <LayoutDashboard size={32} className="text-indigo-500" />
          <h1 className="text-3xl font-bold text-indigo-400">
            Welcome to Home
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-8 text-center">
          This is your home page. Get started with exploring our topics.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button 
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            onClick={() => navigate("/topics")}
            aria-label="Navigate to topics page"
          >
            Get Started
          </button>
          <button 
            className="px-6 py-2 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
            onClick={() => navigate("/about")}
            aria-label="Learn more about us"
          >
            About Us
          </button>
        </div>

        {/* Small Illustrative Image */}
        <img
          src="https://imgs.search.brave.com/2u9Qt0TO6njuqyYHhOWEXikiLj_-P7T9q7v-l-XJwrY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYxLzdl/LzYyLzYxN2U2MjNh/ZjczZGU2MjkzYjYy/ZjU4ZTg2NjUxNjRl/LmpwZw"
          alt="Illustration"
          className="w-32 h-32 object-cover rounded-full mt-8"
        />
      </div>
    </div>
  );
};

export default Home;
