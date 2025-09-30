import type { Project } from '../types';

export const portfolioData: Project[] = [
  {
    id: "chris-customs-welding",
    name: "Chris's Customs Welding",
    logoUrl: "https://lh3.googleusercontent.com/BwRiZEhg8t6Gy8MpijjsfH7hc9c1GRSFe4qVSpd71lsQYuB4XGDD5GtYeYvM9nmLgbfCDsSjdxB3qvzL=s265-w265-h265",
    description: "A local welding and repair business in Hanover, Ontario, revitalized with a responsive React website and targeted local SEO.",
    metaDescription: "Case study for Chris's Customs Welding. Learn how Solid Web Creations used a React SPA and local SEO to achieve top Google rankings in Hanover, Ontario, and drastically increase client inquiries.",
    techStack: ["React", "Tailwind CSS", "Local SEO"],
    testimonial: "Our local calls shot up almost overnight. Solid Web Creations put us on the map in Hanover.",
    liveUrl: "https://chrisscustoms.netlify.app/",
    screenshots: [
      { src: "https://images.unsplash.com/photo-1533162233994-323e593e18a8?q=80&w=2070&auto=format&fit=crop", alt: "Dynamic hero image of a welder at work on the Chris's Customs website" },
      { src: "https://images.unsplash.com/photo-1620706857373-317955361250?w=1024&auto=format&fit=crop&q=80&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hbGwlMjBlbmdpbmUlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D", alt: "Small engine on a workbench representing the repair services offered" },
      { src: "https://images.unsplash.com/photo-1617093229608-27d1424931a1?q=80&w=2070&auto=format&fit=crop", alt: "Close-up of a clean, professional weld on a metal surface" },
    ],
    caseStudy: {
      challenge: "The client had minimal online presence and relied heavily on word-of-mouth, making it difficult to attract new, local customers actively searching for welding or repair services.",
      solution: "We developed a fast, mobile-first single-page application using React, targeting high-intent local keywords. We also fully optimized their Google Business Profile to dominate local map pack results.",
      result: "Achieved a top 3 ranking on Google for 'welding Hanover' and 'small engine repair Hanover' within two months, leading to a 200% increase in qualified phone inquiries from local customers."
    }
  },
  {
    id: "plumbers-launchpad",
    name: "Plumbers Launchpad",
    logoUrl: "https://lh3.googleusercontent.com/saZv3COkqnmKVh3d1oGfcqWLa_3bKcN7ccMHpsY2ss4D6jgJ9D_LALHrV-qf1xh7Zt9I6CPIIdP55iN5=s265-w265-h265",
    description: "A dynamic React SPA built to showcase advanced front-end development and UI/UX design capabilities.",
    metaDescription: "Explore the Plumbers Launchpad project, a dynamic React SPA showcasing advanced UI/UX design and front-end development capabilities by Solid Web Creations.",
    techStack: ["React", "Marketing", "UI/UX"],
    testimonial: "The user interface is slick and intuitive. Matthew transformed our initial concept into a polished, professional showpiece.",
    liveUrl: "https://plumber-launchpad.netlify.app/",
    screenshots: [
      { src: "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=2070&auto=format&fit=crop", alt: "Plumbers Launchpad dashboard UI with charts and data graphs" },
      { src: "https://images.unsplash.com/photo-1596003906949-67221c3e9a03?q=80&w=1974&auto=format&fit=crop", alt: "User profile page for the Plumbers Launchpad application" },
      { src: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop", alt: "Gradient-rich login screen for Plumbers Launchpad" }
    ],
    caseStudy: {
      challenge: "The goal was to create a visually impressive and highly interactive demo application to showcase advanced front-end development capabilities to potential clients.",
      solution: "Built a complex single-page application with a focus on clean UI/UX, smooth animations, and a responsive layout that highlights mastery of modern React principles and state management.",
      result: "The application serves as an effective marketing tool and a powerful portfolio piece that clearly demonstrates technical skill, leading to more inquiries for complex development projects."
    }
  },
  {
    id: "prohire-employment",
    name: "ProHire Employment",
    logoUrl: "https://lh3.googleusercontent.com/75Kr5Uir6xX3guMdc-YrHbOLfpYLlnMubVqTKN9pi72JuNEw0sXuEizXy_YpjXZJPDtUyf1tWQtf6_vW=s265-w265-h265",
    description: "A sophisticated web platform featuring a custom-trained AI chatbot and secure Firebase authentication to streamline hiring.",
    metaDescription: "Discover the ProHire Employment platform case study. A sophisticated web app featuring a custom AI chatbot and secure Firebase authentication by Solid Web Creations.",
    techStack: ["React", "AI Chatbot", "Auth", "Firebase"],
    testimonial: "The AI chatbot integration was seamless. They tackled complex technical challenges with impressive skill and delivered a flawless product.",
    liveUrl: "https://prohireemployment.netlify.app/",
    screenshots: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", alt: "Data visualization dashboard for ProHire Employment platform" },
      { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1974&auto=format&fit=crop", alt: "Chatbot interface within the ProHire application" },
      { src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop", alt: "Secure user login and registration page for ProHire" }
    ],
    caseStudy: {
      challenge: "The client needed a platform to automate the initial stages of their hiring process, including candidate screening and answering frequently asked questions, available 24/7.",
      solution: "We integrated a custom-trained AI chatbot to handle user queries and initial screening. A secure authentication system using Firebase was also implemented for user account management.",
      result: "The AI chatbot successfully handled over 60% of initial inquiries, reducing the manual workload on hiring managers by 40% and allowing them to focus on qualified candidates."
    }
  },
  {
    id: "pastdown-london",
    name: "Pastdown-London",
    logoUrl: "https://pastdown.store/cdn/shop/files/pd-logo-black-stroke_80x@2x.png?v=1671041223",
    description: "A bespoke Shopify e-commerce store and artistic archive for a UK clothing brand, blending commerce with brand storytelling.",
    metaDescription: "Case study for Pastdown-London's Shopify e-commerce site. A custom theme blending a clothing store and artistic archive, resulting in a 25% conversion rate increase.",
    techStack: ["Shopify", "E-commerce", "Liquid", "React"],
    testimonial: "A stunning Shopify site that perfectly captures our brand. The design is not just beautiful, it converts.",
    liveUrl: "https://pastdown-london.netlify.app/",
    screenshots: [
      { src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop", alt: "Pastdown-London e-commerce store homepage on a laptop" },
      { src: "https://images.unsplash.com/photo-1585333379434-a8d16c50c03d?q=80&w=2070&auto=format&fit=crop", alt: "Product detail page for a clothing item on Pastdown-London" },
      { src: "https://images.unsplash.com/photo-1555529771-835f59ee5020?q=80&w=1974&auto=format&fit=crop", alt: "Clean and modern checkout process for the Pastdown-London Shopify store" }
    ],
    caseStudy: {
      challenge: "The client required a unique Shopify store that went beyond a standard e-commerce template, needing to function as both a shop and a curated archive for their clothing brand.",
      solution: "A custom Shopify theme was developed from the ground up using Liquid. We integrated React components for dynamic, interactive sections like the archive, providing a richer user experience.",
      result: "The bespoke site design and improved user experience led to a 25% increase in conversion rates and a 40% increase in average session duration, successfully blending commerce with brand storytelling."
    }
  }
];