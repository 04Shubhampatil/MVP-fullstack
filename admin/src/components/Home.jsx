import React from "react";
import { LayoutDashboard, NotebookPen, FileText } from "lucide-react";

function Home() {
  return (
    <div className="flex ">
    
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="  rounded-2xl shadow-2xl p-16 w-full max-w-3xl mx-7">
          <div className="flex items-center mb-6">
            <LayoutDashboard className="text-purple-600 mr-2" size={28} />
            <h1 className="text-3xl font-bold text-purple-700">
              Welcome to Admin Panel
            </h1>
          </div>

          <p className="text-lg text-gray-400 mb-4">
            This is your admin dashboard. You can manage your topics, questions,
            and users here.
          </p>

          <div className="flex  items-center justify-center gap-12">
            <div className="rounded-xl py-3 px-4 m-5 hover:shadow-lg shadow-zinc-800  shadow-xl transition">
              <NotebookPen className="mx-auto text-zinc-300 mb-2" size={32} />
              <h3 className=" text-center font-semibold text-indigo-800">
                Topics
              </h3>
              <p className="text-sm text-gray-600">Manage all topics</p>
            </div>

            <div className=" rounded-xl py-3 px-4 m-5  show-lg hover:shadow-lg shadow-zinc-800 shadow-xl transition">
              <FileText className="mx-auto text-zinc-300 mb-2" size={32} />
              <h3 className=" text-center font-semibold text-indigo-800">
                Questions
              </h3>
              <p className="text-sm text-gray-600">Manage all questions</p>
            </div>
          </div>

          <div className="flex items-center justify-center my-8">
            <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 shadow-indigo-600 shadow-sm rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
