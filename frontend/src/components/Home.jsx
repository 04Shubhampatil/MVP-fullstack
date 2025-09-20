import React from "react";
import { LayoutDashboard, NotebookPen, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center py-6 bg-zinc-900">
      <div className="flex flex-col items-center mb-6 bg-zinc-800 rounded-2xl shadow-2xl p-12 w-full max-w-3xl mx-7">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <LayoutDashboard size={32} className="text-indigo-500" />
          <h1 className="text-3xl font-bold text-indigo-400">
            Welcome to Home
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-8 text-center">
          This is your home page
        </p>

        {/* Cards */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Topics */}
          <div
            className="bg-zinc-700 rounded-xl py-6 px-6 w-40 text-center shadow-lg shadow-zinc-900 hover:shadow-indigo-500/30 hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate("topics")}
          >
            <NotebookPen className="mx-auto text-indigo-400 mb-3" size={36} />
            <h3 className="font-semibold text-indigo-300 mb-1">Topics</h3>
            <p className="text-sm text-gray-400">Manage all topics</p>
          </div>

          {/* Questions */}
          <div
            className="bg-zinc-700 rounded-xl py-6 px-6 w-40 text-center shadow-lg shadow-zinc-900 hover:shadow-indigo-500/30 hover:scale-105 transition-transform cursor-pointer"
            onClick={() => navigate("questions")}
          >
            <FileText className="mx-auto text-indigo-400 mb-3" size={36} />
            <h3 className="font-semibold text-indigo-300 mb-1">Questions</h3>
            <p className="text-sm text-gray-400">Manage all questions</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
