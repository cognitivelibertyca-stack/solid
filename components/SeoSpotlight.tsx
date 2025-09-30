import React, { useState } from 'react';
import type { AccordionItemProps } from '../types';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-600">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-4 px-2 focus:outline-none focus:bg-slate-700/50 hover:bg-slate-700/50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
      >
        <span className="text-lg font-semibold text-white">{title}</span>
        <svg
          className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        id={`accordion-content-${title.replace(/\s+/g, '-')}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-4 text-slate-300 bg-slate-800">
          {children}
        </div>
      </div>
    </div>
  );
};

const SeoSpotlight: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [sectionRef, isSectionVisible] = useAnimateOnScroll(0.2);
  // Explicitly specify HTMLDivElement as the generic type for the ref to fix a type mismatch on the div element.
  const [benefitsRef, areBenefitsVisible] = useAnimateOnScroll<HTMLDivElement>(0.2);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const methodology = [
    { title: "Technical Audit & Optimization", content: "We begin with a deep-dive audit of your site's technical health, fixing issues related to site speed, mobile-friendliness, crawlability, and indexing to build a solid foundation." },
    { title: "Keyword Research & Strategy", content: "We identify high-value keywords your target audience in Hanover and beyond are searching for, crafting a content strategy to meet their needs and drive relevant traffic." },
    { title: "On-Page SEO", content: "We meticulously optimize every page element—from meta tags and headers to content and internal linking—to clearly signal relevance and authority to search engines." },
    { title: "Authority Building", content: "We develop a strategy to earn high-quality backlinks and mentions from reputable local and industry sources, establishing your website as a trusted authority." }
  ];
  
  const deliverables = [
    "Detailed Monthly Reports",
    "Keyword Rank Tracking",
    "Competitor Analysis",
    "Backlink Profile Audit"
  ];

  const hanoverBenefits = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Dominate Local Search",
      description: "Appear at the top of Google when local customers search for your services, driving relevant, high-intent traffic directly to your door."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: "Attract Foot Traffic",
      description: "Optimize for 'near me' searches and Google Maps to make it effortless for customers in Hanover and surrounding areas to find and visit your business."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      title: "Build Community Trust",
      description: "A strong local presence with positive reviews and accurate information builds credibility and makes you the go-to choice in the community."
    }
  ];

  return (
    <section 
      id="seo-spotlight" 
      className="relative py-24 md:py-28 overflow-hidden" 
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-[-1]">
        <img 
            src="https://images.unsplash.com/photo-1729707711998-f430609bf68b?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYyfHx8ZW58MHx8fHx8"
            alt="Digital data analysis charts illustrating SEO concepts"
            className="w-full h-full object-cover"
            loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-slate-800/95"></div>
      <div className="container mx-auto px-6 relative">
        <div className={`text-center mb-12 anim-item ${isSectionVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Service Spotlight: Local SEO</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            SEO is the art and science of ensuring your website is found by the right people at the right time.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`anim-item ${isSectionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <h3 className="text-2xl font-bold text-white mb-4">Our SEO Methodology</h3>
            <div className="bg-slate-700 rounded-lg overflow-hidden shadow-lg">
              {methodology.map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  isOpen={openAccordion === index}
                  onClick={() => toggleAccordion(index)}
                >
                  <p>{item.content}</p>
                </AccordionItem>
              ))}
            </div>
          </div>
          <div className={`anim-item ${isSectionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '250ms' }}>
            <h3 className="text-2xl font-bold text-white mb-4">Key Deliverables</h3>
            <div className="bg-slate-700 p-6 rounded-lg shadow-lg">
                <ul className="space-y-4">
                    {deliverables.map((item, index) => (
                        <li key={index} className="flex items-center text-lg">
                            <svg className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>

        <div className="mt-24" ref={benefitsRef}>
            <div className={`text-center mb-12 anim-item ${areBenefitsVisible ? 'is-visible' : ''}`}>
                <h3 className="text-3xl font-bold text-white">Why Local SEO Matters in Hanover</h3>
                <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                    For local businesses, visibility is everything. Here’s how we help you stand out.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {hanoverBenefits.map((benefit, index) => (
                    <div 
                        key={index} 
                        className={`anim-item ${areBenefitsVisible ? 'is-visible' : ''} bg-slate-900 p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/10`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <div 
                            className={`flex justify-center items-center mb-6 h-20 w-20 mx-auto bg-slate-800 text-cyan-300 rounded-full ${areBenefitsVisible ? 'animate-icon-fade-scale' : 'opacity-0'}`}
                            style={{ animationDelay: `${200 + index * 150}ms` }}
                        >
                            {benefit.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                        <p className="text-slate-400">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default SeoSpotlight;