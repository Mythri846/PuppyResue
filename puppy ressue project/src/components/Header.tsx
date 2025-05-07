import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PawPrint as Paw, Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center">
            <Paw className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-2xl font-bold text-blue-600">PuppyRescue</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700 hover:text-blue-600'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/centers" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700 hover:text-blue-600'}`
              }
            >
              Treatment Centers
            </NavLink>
            <NavLink 
              to="/emergency" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700 hover:text-blue-600'}`
              }
            >
              Emergency
            </NavLink>
            <NavLink 
              to="/care-tips" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700 hover:text-blue-600'}`
              }
            >
              Care Tips
            </NavLink>
            <NavLink 
              to="/success-stories" 
              className={({ isActive }) => 
                `text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700 hover:text-blue-600'}`
              }
            >
              Success Stories
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/report" 
              className="px-4 py-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors"
            >
              Report a Puppy
            </NavLink>
            <NavLink 
              to="/donate" 
              className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition-colors"
            >
              <Heart className="w-4 h-4 mr-1" /> Donate
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `px-4 py-2 text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/centers" 
                className={({ isActive }) => 
                  `px-4 py-2 text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Treatment Centers
              </NavLink>
              <NavLink 
                to="/emergency" 
                className={({ isActive }) => 
                  `px-4 py-2 text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Emergency
              </NavLink>
              <NavLink 
                to="/care-tips" 
                className={({ isActive }) => 
                  `px-4 py-2 text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Care Tips
              </NavLink>
              <NavLink 
                to="/success-stories" 
                className={({ isActive }) => 
                  `px-4 py-2 text-base font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-700'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </NavLink>
              <div className="pt-2 border-t border-gray-200">
                <NavLink 
                  to="/report" 
                  className="block px-4 py-2 text-center bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Report a Puppy
                </NavLink>
              </div>
              <NavLink 
                to="/donate" 
                className="flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="w-4 h-4 mr-1" /> Donate
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;