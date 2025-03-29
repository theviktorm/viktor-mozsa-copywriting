import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-primary-deep font-bold text-xl">VM</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-primary-deep hover:text-primary-electric transition-colors">Home</Link>
            <Link to="/masterclasses" className="text-primary-deep hover:text-primary-electric transition-colors">Masterclasses</Link>
          </div>

          <button 
            className="md:hidden text-primary-deep"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-primary-deep hover:bg-primary-electric/5 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/masterclasses" 
                className="block px-3 py-2 text-primary-deep hover:bg-primary-electric/5 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Masterclasses
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}