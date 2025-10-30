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

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
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
    useTransform(scrollYProgress, [0, 0.2], [-250, 150]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[200vh] sm:h-[210vh] md:h-[220vh] py-10 sm:py-14 md:py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-10 md:space-x-16 mb-10 sm:mb-14 md:mb-16">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-10 sm:mb-14 md:mb-16 space-x-6 sm:space-x-10 md:space-x-16">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-10 md:space-x-16">
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
    <div className="max-w-7xl relative mx-auto py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 w-full left-0 top-0">
      <div className="relative">
        {/* Enhanced Decorative glow effects */}
        <div className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 bg-amber-400/20 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-20 right-0 w-48 h-48 md:w-72 md:h-72 bg-orange-400/15 rounded-full filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
        
        <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-tight mb-4 sm:mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-serif mb-2 sm:mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700 drop-shadow-2xl [text-shadow:0_0_30px_rgba(251,191,36,0.3)]">
            Infinity
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-100 to-stone-300 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 [text-shadow:0_0_30px_rgba(255,255,255,0.2)]">
            Cafe
          </span>
        </h1>
        
        {/* Enhanced Decorative line */}
        <div className="relative mt-5 md:mt-8 mb-5 md:mb-8 animate-in fade-in slide-in-from-left duration-700 delay-300">
          <div className="h-1.5 md:h-2 w-28 md:w-40 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 rounded-full shadow-2xl shadow-amber-500/60 animate-pulse"></div>
        </div>
        
        <p className="max-w-3xl text-xl sm:text-2xl md:text-3xl lg:text-4xl text-stone-50 font-light leading-relaxed mb-8 sm:mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 drop-shadow-lg">
          Where every sip tells a <span className="text-amber-300 font-bold relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-amber-400/30 after:blur-sm">story</span>,
          <br className="hidden sm:block" />
          and every moment becomes <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-bold [text-shadow:0_0_20px_rgba(251,191,36,0.4)]">infinite</span>
        </p>
        
        {/* Enhanced badges */}
        <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700">
          <div className="group flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-500/30 to-amber-600/30 backdrop-blur-lg border border-amber-400/40 rounded-full shadow-xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300">
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/80 group-hover:shadow-xl"></span>
            <span className="text-amber-200 text-sm md:text-base font-bold whitespace-nowrap tracking-wide">Open Daily 12 PM - 12 AM</span>
          </div>
          <div className="group flex items-center gap-2 px-5 py-3 bg-stone-800/70 backdrop-blur-lg border border-stone-600/50 rounded-full shadow-xl hover:scale-105 transition-all duration-300 hover:border-amber-400/30">
            <span className="text-stone-100 text-sm md:text-base font-bold whitespace-nowrap">📍 Patna, Bihar</span>
          </div>
          <div className="group flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500/30 to-amber-500/30 backdrop-blur-lg border border-amber-400/40 rounded-full shadow-xl hover:shadow-amber-500/40 hover:scale-105 transition-all duration-300">
            <span className="text-amber-200 text-sm md:text-base font-bold whitespace-nowrap">🎉 Winter Hours</span>
          </div>
        </div>

        {/* Added CTA Button */}
        <div className="mt-10 md:mt-12 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-1000">
          <a
            href="#menu"
            className="group relative inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-full shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/80 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
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
      className="group/product h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-96 relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-lg sm:rounded-xl md:rounded-2xl transition-opacity"></div>
      <h2 className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 opacity-0 group-hover/product:opacity-100 text-white text-base sm:text-lg md:text-xl font-bold transition-opacity">
        {product.title}
      </h2>
    </motion.div>
  );
};
