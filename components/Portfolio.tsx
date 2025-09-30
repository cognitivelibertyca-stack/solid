import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../types';
import PortfolioModal from './PortfolioModal';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const PortfolioCardImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className="absolute inset-0 w-full h-full bg-slate-800 rounded-lg">
            <div 
                className={`w-full h-full shimmer-bg transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`} 
            />
            <img 
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);

const Portfolio: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalLoading, setIsModalLoading] = useState(false);
    const [sectionRef, isSectionVisible] = useAnimateOnScroll(0.2);

    const handleViewCaseStudy = (project: Project) => {
        setIsModalLoading(true);
        setSelectedProject(project);
        
        // Simulate loading delay for a better UX
        setTimeout(() => {
            setIsModalLoading(false);
        }, 500);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                handleCloseModal();
            }
        };

        const scriptId = 'individual-project-structured-data';

        const removeScript = () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };

        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
            
            removeScript();
            
            const script = document.createElement('script');
            script.id = scriptId;
            script.type = 'application/ld+json';

            const projectSchema = {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "name": selectedProject.name,
                "description": selectedProject.metaDescription,
                "url": selectedProject.liveUrl,
                "author": {
                  "@type": "Organization",
                  "name": "Solid Web Creations"
                },
                "image": selectedProject.screenshots[0].src,
                "keywords": selectedProject.techStack.join(', ')
            };
            
            script.innerHTML = JSON.stringify(projectSchema);
            document.head.appendChild(script);

        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
            removeScript();
        };
    }, [selectedProject]);


    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolioData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === portfolioData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <section id="portfolio" className="py-24 md:py-28 bg-slate-900 overflow-hidden" ref={sectionRef}>
                <div className="container mx-auto px-6">
                    <div className={`text-center mb-12 anim-item ${isSectionVisible ? 'is-visible' : ''}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
                        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                            A selection of projects that showcase my skills and passion.
                        </p>
                    </div>

                    <div className={`relative anim-item ${isSectionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                        <div className="relative h-[30rem] overflow-hidden">
                            {portfolioData.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                                    aria-hidden={index !== currentIndex}
                                >
                                    <div 
                                      className="group relative rounded-lg shadow-xl h-full mx-auto max-w-4xl border border-slate-700 overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                                    >
                                      <PortfolioCardImage 
                                        src={project.screenshots[0].src}
                                        alt={project.screenshots[0].alt}
                                      />
                                      <div className="absolute inset-0 bg-slate-900/85 transition-colors duration-500 group-hover:bg-slate-900/75"></div>
                                      <div 
                                        className="relative z-10 h-full p-8 flex flex-col justify-between"
                                        style={{
                                            transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                                            transitionDelay: index === currentIndex ? '0.3s' : '0s',
                                            opacity: index === currentIndex ? 1 : 0,
                                            transform: index === currentIndex ? 'translateY(0)' : 'translateY(20px)'
                                        }}
                                      >
                                          <div>
                                              <div className="flex items-center mb-4">
                                                  <img 
                                                      src={project.logoUrl} 
                                                      alt={`${project.name} logo`} 
                                                      className="h-16 w-16 object-contain rounded-lg bg-white/10 p-1 backdrop-blur-sm flex-shrink-0"
                                                  />
                                                  <h3 className="text-3xl font-bold text-white ml-4">{project.name}</h3>
                                              </div>
                                              <p className="text-slate-300 mb-4 text-lg">{project.description}</p>
                                          </div>
                                          
                                          <div>
                                              <div className="flex flex-wrap gap-2 mb-6">
                                                  {project.techStack.map(tech => (
                                                      <span key={tech} className="bg-cyan-900/50 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">
                                                          {tech}
                                                      </span>
                                                  ))}
                                              </div>
                                              <button
                                                  onClick={() => handleViewCaseStudy(project)}
                                                  className="inline-flex items-center bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105"
                                              >
                                                  View Case Study
                                              </button>
                                          </div>
                                      </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            onClick={handlePrev} 
                            className="absolute top-1/2 left-0 md:-left-4 transform -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-full p-3 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            aria-label="Previous Project"
                        >
                            <ChevronLeftIcon />
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="absolute top-1/2 right-0 md:-right-4 transform -translate-y-1/2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-full p-3 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            aria-label="Next Project"
                        >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </section>
            {selectedProject && <PortfolioModal project={selectedProject} onClose={handleCloseModal} isLoading={isModalLoading} />}
        </>
    );
};

export default Portfolio;
