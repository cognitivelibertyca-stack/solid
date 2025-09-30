import React from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 2.056c4.509 0 8.305-2.724 9.618-6.52A11.955 11.955 0 0121 12.056a11.955 11.955 0 00-2.382-5.972zM12 12a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

const UserGroupIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const Philosophy: React.FC = () => {
  const pillars = [
    { icon: <ShieldCheckIcon />, title: "Rock-Solid Foundations", description: "We engineer for reliability, implementing rigorous testing and quality assurance to prevent errors before they happen, ensuring your digital presence is always online and performing flawlessly." },
    { icon: <CodeIcon />, title: "Engineered for Growth", description: "Our code is not just functional; it's a clean, scalable, and well-documented asset. This commitment to quality makes future updates faster and more cost-effective." },
    { icon: <UserGroupIcon />, title: "Human-Centered Design", description: "At the heart of every project is the end-user. We design intuitive, accessible, and engaging interfaces that deliver a seamless experience and drive meaningful conversions." },
  ];
  
  const [sectionRef, isSectionVisible] = useAnimateOnScroll();

  return (
    <section 
        id="philosophy" 
        className="relative py-24 md:py-28 overflow-hidden" 
        ref={sectionRef}
    >
      <div className="absolute inset-0 z-[-1]">
        <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww"
            alt="Close-up of code on a screen representing clean development philosophy"
            className="w-full h-full object-cover"
            loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-slate-800/95"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 anim-item ${isSectionVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Principles</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto italic">
            "We build digital experiences, not just websites. Our philosophy is rooted in creating products that are robust, elegant, and engineered for long-term success."
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`anim-item ${isSectionVisible ? 'is-visible' : ''} bg-slate-900 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/10`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center items-center mb-6 h-20 w-20 mx-auto bg-slate-800 rounded-full">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-slate-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
