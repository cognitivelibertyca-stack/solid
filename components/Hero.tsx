import React from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const Hero: React.FC = () => {
  const [sectionRef, isSectionVisible] = useAnimateOnScroll(0.2);

  return (
    <section id="hero" className="relative py-28 md:py-40 text-center overflow-hidden" ref={sectionRef}>
       <div className="absolute inset-0 z-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1678796801121-7324d8e04026?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8"
          alt="Modern web development workspace with code on a screen"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      <div className={`container mx-auto px-6 relative z-10 anim-item ${isSectionVisible ? 'is-visible' : ''}`}>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          Elevate Your Digital Presence.
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
          Data-Driven Strategies for Measurable Growth in Hanover, Ontario.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:mathaes33@gmail.com"
            className="w-full sm:w-auto inline-block bg-cyan-500 text-slate-900 text-xl font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-300 transform hover:scale-105"
          >
            Get a Free Consultation
          </a>
          <a 
            href="#services"
            className="w-full sm:w-auto inline-block border-2 border-cyan-400 text-cyan-400 text-xl font-bold py-[calc(1rem_-_2px)] px-[calc(2rem_-_2px)] rounded-lg hover:bg-cyan-400 hover:text-slate-900 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
