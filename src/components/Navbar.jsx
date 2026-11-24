import { useState } from "react";
import { LogIn, Menu, X } from "lucide-react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white text-blue-950 shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <span className="text-3xl">🧳</span>

          <h1 className="text-xl md:text-2xl font-bold">
            Luggage <span className="text-orange-400">With Us</span>
          </h1>

        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-5 bg-blue-950/5 backdrop-blur-sm rounded-full px-3 py-2">

          <a href="#" className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-full transition">
            Home
          </a>

          <a href="#find-storage" className="hover:text-orange-400 transition">
            Find Storage
          </a>

          <a href="#how-it-works" className="hover:text-orange-400 transition">
            How It Works
          </a>

          <a href="#about" className="hover:text-orange-400 transition">
            About Us
          </a>

          <a href="#why-choose-us" className="hover:text-orange-400 transition">
            Why Choose Us
          </a>

        </div>

        {/* Desktop Authentication Buttons */}
        <div className="hidden md:flex items-center gap-4">

          <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl hover:text-orange-500 transition">
            <LogIn size={18} />
            Login
          </button>

          <button className="bg-orange-400 hover:bg-orange-500 px-5 py-2 rounded-4xl font-semibold transition">
            Register
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:text-orange-500 transition"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 top-[72px] bg-black/40 z-40 md:hidden"
        ></div>
      )}

      {/* Mobile Side Menu */}
      <div className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-72 max-w-[85vw] bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}>

        <div className="flex flex-col p-6 gap-6">

          <a href="#" onClick={closeMenu} className="text-orange-500 font-semibold">
            Home
          </a>

          <a href="#find-storage" onClick={closeMenu} className="hover:text-orange-500 transition">
            Find Storage
          </a>

          <a href="#how-it-works" onClick={closeMenu} className="hover:text-orange-500 transition">
            How It Works
          </a>

          <a href="#about" onClick={closeMenu} className="hover:text-orange-500 transition">
            About Us
          </a>

          <a href="#why-choose-us" onClick={closeMenu} className="hover:text-orange-500 transition">
            Why Choose Us
          </a>

          <hr className="border-gray-200" />

          <button className="flex items-center gap-2 hover:text-orange-500 transition">
            <LogIn size={18} />
            Login
          </button>

          <button className="bg-orange-400 hover:bg-orange-500 text-white py-3 rounded-full font-semibold transition">
            Register
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;