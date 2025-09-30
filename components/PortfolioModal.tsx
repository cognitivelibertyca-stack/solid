import React from 'react';
import type { Project } from '../types';

const SkeletonLoader: React.FC = () => (
  <div className="p-8 animate-pulse">
    <div className="h-8 bg-slate-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-slate-700 rounded w-1/4 mb-10"></div>

    <div className="mb-8">
      <div className="h-6 bg-slate-700 rounded w-1/3 mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-48 bg-slate-700 rounded-lg"></div>
        <div className="h-48 bg-slate-700 rounded-lg"></div>
        <div className="h-48 bg-slate-700 rounded-lg"></div>
      </div>
    </div>

    <div className="mb-8">
      <div className="space-y-3">
        <div className="h-4 bg-slate-700 rounded"></div>
        <div className="h-4 bg-slate-700 rounded w-5/6"></div>
      </div>
    </div>

    <div>
      <div className="h-6 bg-slate-700 rounded w-1/3 mb-4"></div>
      <div className="space-y-6">
        <div>
          <div className="h-5 bg-slate-700 rounded w-1/4 mb-2"></div>
          <div className="space-y-2">
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded"></div>
          </div>
        </div>
        <div>
          <div className="h-5 bg-slate-700 rounded w-1/4 mb-2"></div>
          <div className="space-y-2">
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PortfolioModal: React.FC<{ project: Project; onClose: () => void; isLoading: boolean }> = ({ project, onClose, isLoading }) => {
  return (
    <div 
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in-load"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-700"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8 sticky top-0 bg-slate-800 border-b border-slate-700 z-10 flex justify-between items-start">
          <div>
            <h2 id={`modal-title-${project.id}`} className="text-3xl font-bold text-white">{project.name}</h2>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                Visit Live Site &rarr;
              </a>
            )}
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className="p-8">
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <img key={index} src={screenshot.src} alt={screenshot.alt} className="rounded-lg object-cover w-full h-48" loading="lazy" />
                ))}
              </div>
            </section>
            <section className="mb-8 border-l-4 border-cyan-400 pl-4">
              <blockquote className="text-xl italic text-slate-200">
                "{project.testimonial}"
              </blockquote>
            </section>
            <section>
              <h3 className="text-2xl font-bold text-white mb-4">Case Study</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-cyan-300 mb-2">The Challenge</h4>
                  <p className="text-slate-300">{project.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-cyan-300 mb-2">The Solution</h4>
                  <p className="text-slate-300">{project.caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-cyan-300 mb-2">The Result</h4>
                  <p className="text-slate-300">{project.caseStudy.result}</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioModal;