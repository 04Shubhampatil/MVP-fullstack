import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Navbar = () => {
  
  return (
    <div className=" flex bg-zinc-800 shadow-md shadow-zinc-700 w-full">
      <nav className="flex justify-between w-full py-3 px-7">
        <div>
          <h1 className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Qui
            </span>
            zy
          </h1>
        </div>

        

        <div>
          <ul className="flex flex-row  gap-8  mt-2 py-2 text-white font-semibold">
            <li>
              <Link
                to="/"
                className="text-white hover:bg-indigo-600 hover:text-white hover:rounded-md  px-2 py-1"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/topics"
                className="text-white hover:bg-indigo-600 hover:text-white hover:rounded-md  px-2 py-1"
              >
                Topics
              </Link>
            </li>
            
            <li>
              <Link
                to="/about"
                className="text-white hover:bg-indigo-600 hover:text-white hover:rounded-md  px-2 py-1"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:bg-indigo-600 hover:text-white hover:rounded-md  px-2 py-1"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white hover:bg-indigo-600 hover:text-white hover:rounded-md  px-2 py-1"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-white hover:bg-indigo-600 hover:text-white hover:rounded-md  px-2 py-1"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
