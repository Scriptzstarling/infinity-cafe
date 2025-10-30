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
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
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
    useTransform(scrollYProgress, [0, 0.2], [-300, 200]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[180vh] sm:h-[200vh] py-12 sm:py-16 md:py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-12 md:space-x-20 mb-12 sm:mb-16 md:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-12 sm:mb-16 md:mb-20 space-x-8 sm:space-x-12 md:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-12 md:space-x-20">
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
    <div className="max-w-7xl relative mx-auto py-8 md:py-16 lg:py-20 px-4 sm:px-6 w-full left-0 top-0">
      <div className="relative">
        {/* Decorative glow effect */}
        <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-48 h-48 md:w-72 md:h-72 bg-amber-500/30 rounded-full filter blur-3xl opacity-40 md:opacity-50 animate-pulse"></div>
        
        <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-serif mb-1 sm:mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Infinity
          </span>
          <span className="block text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
            Cafe
          </span>
        </h1>
        
        {/* Decorative line */}
        <div className="relative mt-4 md:mt-6 mb-4 md:mb-6 animate-in fade-in slide-in-from-left duration-700 delay-300">
          <div className="h-0.5 md:h-1 w-20 md:w-32 bg-gradient-to-r from-amber-400 via-amber-500 to-transparent rounded-full"></div>
        </div>
        
        <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-stone-100 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          Where every sip tells a <span className="text-amber-300 font-medium">story</span>,
          <br className="hidden sm:block" />
          and every moment becomes <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 font-medium">infinite</span>
        </p>
        
        {/* Additional tagline */}
        <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-2 md:gap-3 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-700">
          <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-amber-300 text-xs md:text-sm font-medium whitespace-nowrap">Open Daily 12 PM - 12 AM</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-full">
            <span className="text-stone-300 text-xs md:text-sm font-medium whitespace-nowrap">📍 Patna, Bihar</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full">
            <span className="text-amber-300 text-xs md:text-sm font-medium whitespace-nowrap">🎉 Winter Hours</span>
          </div>
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
      className="group/product h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-[30rem] relative flex-shrink-0"
    >
      <div className="block group-hover/product:shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={product.title}
        />
      </div>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl sm:rounded-2xl transition-opacity"></div>
      <h2 className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 opacity-0 group-hover/product:opacity-100 text-white text-lg sm:text-xl md:text-2xl font-bold transition-opacity">
        {product.title}
      </h2>
    </motion.div>
  );
};
