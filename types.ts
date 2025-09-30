import React from 'react';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export interface Project {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  metaDescription: string;
  techStack: string[];
  testimonial: string;
  liveUrl?: string;
  screenshots: { src: string; alt: string }[];
  caseStudy: {
    challenge: string;
    solution: string;
    result: string;
  };
}