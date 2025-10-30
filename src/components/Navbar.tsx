import { Menu, X, Instagram } from 'lucide-react';
import logo from '../images/logo.png';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={logo}
              alt="Infinity Cafe Logo" 
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-bold text-white">Infinity Cafe</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-amber-400 transition-colors font-medium">Home</a>
            <a href="#about" className="text-white hover:text-amber-400 transition-colors font-medium">About</a>
            <a href="#menu" className="text-white hover:text-amber-400 transition-colors font-medium">Menu</a>
            <a href="#gallery" className="text-white hover:text-amber-400 transition-colors font-medium">Gallery</a>
            <a href="#contact" className="text-white hover:text-amber-400 transition-colors font-medium">Contact</a>
            <a
              href="https://www.instagram.com/infinitycafepatna/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4">
            <a href="#home" className="block text-white hover:text-amber-400 transition-colors font-medium">Home</a>
            <a href="#about" className="block text-white hover:text-amber-400 transition-colors font-medium">About</a>
            <a href="#menu" className="block text-white hover:text-amber-400 transition-colors font-medium">Menu</a>
            <a href="#gallery" className="block text-white hover:text-amber-400 transition-colors font-medium">Gallery</a>
            <a href="#contact" className="block text-white hover:text-amber-400 transition-colors font-medium">Contact</a>
            <a
              href="https://www.instagram.com/infinitycafepatna/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors font-medium"
            >
              <Instagram className="w-5 h-5" />
              Follow Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
