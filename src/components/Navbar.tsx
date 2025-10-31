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
        scrolled || isOpen ? 'bg-stone-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group relative">
            <div className="relative">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img 
                src={logo}
                alt="Infinity Cafe Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 group-hover:from-amber-400 group-hover:to-amber-300 transition-all duration-300">
                Infinity Cafe
              </span>
              <span className="text-[10px] sm:text-xs text-amber-400/80 font-medium tracking-wider uppercase">
                Patna, Bihar
              </span>
            </div>
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
            <button
              onClick={() => alert('Table reservation feature coming soon! Please call us or visit our Instagram @infinitycafepatna')}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-amber-500/20"
            >
              Reserve Table
            </button>
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
            <a href="#home" onClick={() => setIsOpen(false)} className="block text-white hover:text-amber-400 transition-colors font-medium">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block text-white hover:text-amber-400 transition-colors font-medium">About</a>
            <a href="#menu" onClick={() => setIsOpen(false)} className="block text-white hover:text-amber-400 transition-colors font-medium">Menu</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="block text-white hover:text-amber-400 transition-colors font-medium">Gallery</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block text-white hover:text-amber-400 transition-colors font-medium">Contact</a>
            <a
              href="https://www.instagram.com/infinitycafepatna/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors font-medium"
            >
              <Instagram className="w-5 h-5" />
              Follow Us
            </a>
            <button
              onClick={() => alert('Table reservation feature coming soon! Please call us or visit our Instagram @infinitycafepatna')}
              className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg"
            >
              Reserve Table
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
