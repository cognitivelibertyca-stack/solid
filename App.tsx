import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import SeoSpotlight from './components/SeoSpotlight';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

function App() {
  useEffect(() => {
    const scriptId = 'portfolio-structured-data';
    // Prevent duplicate scripts on hot reloads
    if (document.getElementById(scriptId)) {
        return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    
    const portfolioSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Portfolio Projects by Solid Web Creations",
        "itemListElement": portfolioData.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "CreativeWork",
            "name": project.name,
            "description": project.description,
            "url": project.liveUrl,
            "author": {
              "@type": "Organization",
              "name": "Solid Web Creations"
            },
            "image": project.screenshots[0],
            "keywords": project.techStack.join(', ')
          }
        }))
    };

    script.innerHTML = JSON.stringify(portfolioSchema);
    document.head.appendChild(script);
    
    return () => {
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
            document.head.removeChild(existingScript);
        }
    }
}, []);

  return (
    <div className="bg-slate-900 text-slate-200 font-sans antialiased fade-in-load">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <SeoSpotlight />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;