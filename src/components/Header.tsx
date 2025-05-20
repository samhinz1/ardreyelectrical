
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActivePath = (path: string) => {
    return location.pathname === path ? 'border-b-2 border-ardrey text-ardrey font-bold' : 'text-gray-600 hover:text-ardrey';
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/6280a37d-4a9c-4589-b21d-e3510cbf3d09.png" 
              alt="Ardrey Electrical" 
              className="h-12 md:h-14"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-lg transition-all duration-200 px-1 py-1 ${isActivePath('/')}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-lg transition-all duration-200 px-1 py-1 ${isActivePath('/about')}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-lg transition-all duration-200 px-1 py-1 ${isActivePath('/services')}`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg transition-all duration-200 px-1 py-1 ${isActivePath('/contact')}`}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-primary btn-md"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-ardrey" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`text-lg px-1 py-2 ${isActivePath('/') ? 'text-ardrey font-bold' : 'text-gray-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-lg px-1 py-2 ${isActivePath('/about') ? 'text-ardrey font-bold' : 'text-gray-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`text-lg px-1 py-2 ${isActivePath('/services') ? 'text-ardrey font-bold' : 'text-gray-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={`text-lg px-1 py-2 ${isActivePath('/contact') ? 'text-ardrey font-bold' : 'text-gray-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-primary btn-md w-full mt-2 flex justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
