import { Instagram, Mail, MapPin } from 'lucide-react';
import logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer className="relative bg-stone-950 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo}
                alt="Infinity Cafe Logo" 
                className="w-14 h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                  Infinity Cafe
                </span>
                <span className="text-xs text-amber-400/80 font-medium tracking-wider uppercase">
                  Patna, Bihar
                </span>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6 max-w-md">
              Where moments become memories. Experience the perfect blend of great coffee, 
              delicious food, and warm hospitality in the heart of Patna.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all"></span>{' '}
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all"></span>{' '}
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all"></span>{' '}
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all"></span>{' '}
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all"></span>{' '}
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-400">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Patna, Bihar, India</span>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@infinitycafe.com" className="text-sm hover:text-amber-400 transition-colors">
                  info@infinitycafe.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-stone-400">
                <Instagram className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://www.instagram.com/infinitycafepatna/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-amber-400 transition-colors"
                >
                  @infinitycafepatna
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              &copy; {new Date().getFullYear()} Infinity Cafe. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/infinitycafepatna/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 bg-stone-900 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 rounded-lg transition-all"
              >
                <Instagram className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
