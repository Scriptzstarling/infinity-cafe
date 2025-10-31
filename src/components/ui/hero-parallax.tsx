import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 40, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 400]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -400]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-100, 50]),
    springConfig
  );
  return (
    <div
      ref={ref}
  className="h-[130vh] sm:h-[150vh] md:h-[150vh] lg:h-[170vh] py-4 sm:py-8 md:py-10 lg:py-12 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="pb-4 sm:pb-12 md:pb-20 lg:pb-28"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 sm:space-x-3 md:space-x-5 lg:space-x-7 mb-2 sm:mb-4 md:mb-6 lg:mb-8">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-2 sm:mb-4 md:mb-6 lg:mb-8 space-x-2 sm:space-x-3 md:space-x-5 lg:space-x-7">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-2 sm:mb-4 md:mb-6 lg:mb-8 space-x-2 sm:space-x-3 md:space-x-5 lg:space-x-7">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 w-full left-0 top-0">
      <div className="relative">
        {/* Enhanced Decorative glow effects */}
        <div className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-amber-400/20 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-20 right-0 w-48 h-48 md:w-72 md:h-72 bg-orange-400/15 rounded-full filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
        
        <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-serif mb-1 sm:mb-2 md:mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700 drop-shadow-2xl [text-shadow:0_0_30px_rgba(251,191,36,0.3)]">
            Infinity
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-100 to-stone-300 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 [text-shadow:0_0_30px_rgba(255,255,255,0.2)]">
            Cafe
          </span>
        </h1>
        
        {/* Enhanced Decorative line */}
        <div className="relative mt-3 md:mt-6 mb-3 md:mb-6 animate-in fade-in slide-in-from-left duration-700 delay-300">
          <div className="h-1 md:h-1.5 w-20 md:w-32 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 rounded-full shadow-2xl shadow-amber-500/60 animate-pulse"></div>
        </div>
        
        <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-stone-50 font-light leading-relaxed mb-5 sm:mb-7 md:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 drop-shadow-lg">
          Where every sip tells a <span className="text-amber-300 font-bold relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-amber-400/30 after:blur-sm">story</span>,
          <br className="hidden sm:block" />
          and every moment becomes <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-bold [text-shadow:0_0_20px_rgba(251,191,36,0.4)]">infinite</span>
        </p>
        
        {/* Enhanced badges */}
        <div className="mt-5 md:mt-8 flex flex-wrap items-center gap-2 sm:gap-3 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700">
          <div className="group flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-amber-500/30 to-amber-600/30 backdrop-blur-lg border border-amber-400/40 rounded-full shadow-xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/80 group-hover:shadow-xl"></span>
            <span className="text-amber-200 text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap tracking-wide">Open Daily 12 PM - 12 AM</span>
          </div>
          <div className="group flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 bg-stone-800/70 backdrop-blur-lg border border-stone-600/50 rounded-full shadow-xl hover:scale-105 transition-all duration-300 hover:border-amber-400/30">
            <span className="text-stone-100 text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap">📍 Patna, Bihar</span>
          </div>
          <div className="group flex items-center gap-1 sm:gap-1.5 md:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-orange-500/30 to-amber-500/30 backdrop-blur-lg border border-amber-400/40 rounded-full shadow-xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300">
            <span className="text-amber-200 text-[10px] sm:text-xs md:text-sm font-bold whitespace-nowrap">🎉 Winter Hours</span>
          </div>
        </div>

        {/* Added CTA Button */}
        <div className="mt-6 md:mt-10 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-1000">
          <a
            href="#menu"
            className="group relative inline-block px-4 py-2 sm:px-5 sm:py-2.5 md:px-7 md:py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs sm:text-sm md:text-base rounded-full shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Explore Our Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    thumbnail: string;
  };
  translate: any;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
  className="group/product h-40 w-40 sm:h-40 sm:w-40 md:h-32 md:w-40 lg:h-40 lg:w-56 xl:h-48 xl:w-64 relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-stone-800">
        <img
          src={product.thumbnail}
          height="400"
          width="400"
          loading="lazy"
          decoding="async"
          className="object-cover object-center absolute h-full w-full inset-0 will-change-transform transform-gpu transition-transform duration-300 ease-out"
          alt={product.title}
          style={{ contentVisibility: 'auto' }}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl transition-opacity"></div>
      <h2 className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 opacity-0 group-hover/product:opacity-100 text-white text-xs sm:text-base md:text-lg lg:text-xl font-bold transition-opacity">
        {product.title}
      </h2>
    </motion.div>
  );
};
