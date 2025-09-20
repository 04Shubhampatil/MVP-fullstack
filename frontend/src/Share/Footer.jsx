import React from "react";
import { Menu } from "lucide-react";

const Footer = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <footer className="bg-zinc-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <h1>Griphy</h1>
        </div>

        {/* Links */}
        <div className={`${showMenu ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row gap-6 text-sm">
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Signup
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-zinc-400 transition-colors">
                Service
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 rounded hover:bg-zinc-700"
        >
          <Menu />
        </button>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-zinc-700 mt-6 pt-4 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Griphy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
