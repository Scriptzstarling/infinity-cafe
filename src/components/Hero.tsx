import { Coffee, MapPin, Clock, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxBg = scrollY * 0.5;
  const fadeOut = Math.max(0, 1 - scrollY / 500);
  const scaleDown = Math.max(0.8, 1 - scrollY / 2000);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-900/95 via-amber-800/90 to-stone-900/95 z-10"
          style={{
            opacity: fadeOut,
          }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            transform: `translateY(${parallaxBg}px) scale(${1.1 + scrollY * 0.0001})`,
            opacity: 0.4,
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)] z-10"></div>

        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-amber-300 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-48 right-1/3 w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-300"></div>
      </div>

      <div
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        style={{
          opacity: fadeOut,
          transform: `translateY(${scrollY * 0.3}px) scale(${scaleDown})`,
        }}
      >
        <div
          className={`mb-8 inline-block transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className="relative">
            <Coffee className="w-20 h-20 text-amber-400 animate-bounce" strokeWidth={1.5} />
            <Sparkles className="w-6 h-6 text-amber-300 absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>

        <h1
          className={`text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="block text-amber-400 font-serif relative">
            Infinity
            <span className="absolute inset-0 text-amber-400 blur-2xl opacity-50 animate-pulse"></span>
          </span>
          <span className="block text-6xl md:text-7xl lg:text-8xl mt-2 relative">
            Cafe
            <span className="absolute inset-0 text-white blur-xl opacity-30"></span>
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-amber-100 mb-12 font-light tracking-wide max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Where every sip tells a story, and every moment becomes infinite
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#menu"
            className="group relative px-10 py-4 bg-amber-500 text-stone-900 font-semibold text-lg rounded-full hover:bg-amber-400 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Explore Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#about"
            className="relative px-10 py-4 bg-transparent text-white font-semibold text-lg rounded-full border-2 border-white hover:bg-white hover:text-stone-900 transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">Our Story</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
        </div>

        <div
          className={`flex flex-col md:flex-row gap-8 justify-center items-center text-amber-100 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 group cursor-pointer hover:text-amber-400 transition-all duration-300 hover:scale-110">
            <MapPin className="w-5 h-5 group-hover:animate-bounce" />
            <span className="text-sm md:text-base">Patna, Bihar</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-amber-400/50"></div>
          <div className="flex items-center gap-3 group cursor-pointer hover:text-amber-400 transition-all duration-300 hover:scale-110">
            <Clock className="w-5 h-5 group-hover:animate-spin" />
            <span className="text-sm md:text-base">Open 9 AM - 11 PM</span>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer"
        style={{ opacity: fadeOut }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="w-6 h-10 rounded-full border-2 border-amber-400 flex items-start justify-center p-2 hover:border-amber-300 transition-colors">
          <div className="w-1 h-3 bg-amber-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </section>
  );
}
