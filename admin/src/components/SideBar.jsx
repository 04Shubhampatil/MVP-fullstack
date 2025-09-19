import React from "react";
import { Home, NotebookPen, FileText, Info, LogIn, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <aside>
      <div className="bg-zinc-800 h-screen w-64 flex flex-col items-center py-4 ">
        <h2 className="text-3xl font-bold tracking-tigh my-3 py-3">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Admin
          </span>
          <span className="text-white ml-2">Panel</span>
        </h2>
        <ul className="flex flex-col gap-7 my-6 py-3">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 py-2 px-4 text-md font-semibold  hover:bg-gradient-to-r from-indigo-600 to-purple-600  shadow-lg shadow-indigo-500/25' 
         text-zinc-300 hover:bg-zinc-800/50 hover:text-white hover:rounded-md"
            >
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link
              to="/topics"
              className="flex items-center gap-2 py-2 px-4 text-md font-semibold  hover:bg-gradient-to-r from-indigo-600 to-purple-600  shadow-lg shadow-indigo-500/25' 
         text-zinc-300 hover:bg-zinc-800/50 hover:text-white hover:rounded-md"
            >
              <NotebookPen size={18} /> Topics
            </Link>
          </li>
          <li>
            <Link
              to="/question"
              className=" flex items-center gap-2 py-2 px-4 text-md font-semibold  hover:bg-gradient-to-r from-indigo-600 to-purple-600  shadow-lg shadow-indigo-500/25' 
         text-zinc-300 hover:bg-zinc-800/50 hover:text-white hover:rounded-md"
            >
              <FileText size={18} />
              Questions
            </Link>
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 text-md font-semibold  hover:bg-gradient-to-r from-indigo-600 to-purple-600  shadow-lg shadow-indigo-500/25' 
         text-zinc-300 hover:bg-zinc-800/50 hover:text-white hover:rounded-md"
          >
            <Info size={18} />
            About
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 text-md font-semibold  hover:bg-gradient-to-r from-indigo-600 to-purple-600  shadow-lg shadow-indigo-500/25' 
         text-zinc-300 hover:bg-zinc-800/50 hover:text-white hover:rounded-md"
          >
            <LogIn size={18} />
            Login
          </li>
          <li
            className="flex items-center gap-2 py-2 px-4 text-md font-semibold  hover:bg-gradient-to-r from-indigo-600 to-purple-600  shadow-lg shadow-indigo-500/25' 
         text-zinc-300 hover:bg-zinc-800/50 hover:text-white hover:rounded-md"
          >
            <LogOut size={18} />
            log out
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
