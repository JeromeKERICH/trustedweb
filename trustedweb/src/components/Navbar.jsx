import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Library', path: '/resources' },
    { name: 'Services', path: '/services' },
    { name: 'Developers', path: '/developers' },
    { name: 'Store', path: '/store' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between 
                  px-[4%] py-2 
                  md:px-[10%] md:py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-3xl font-bold text-gray-900">
          <img src="assets/logo.jpeg" alt="Trusted Web" className="h-4 w-25" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-teal-600 focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm font-medium ${
                  isActive ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
