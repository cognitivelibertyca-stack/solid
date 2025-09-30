import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/80 sticky top-0 z-50 backdrop-blur-sm shadow-md shadow-slate-900/20">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-2" aria-label="Solid Web Creations Home">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMyMmQzZWUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwZTc0OTAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNjUgMjBIMzVjLTE1IDAtMTUgMTUgMCAxNWgyMGMxNSAwIDE1IDE1IDAgMTVINDVjLTE1IDAtMTUgMTUgMCAxNWgzMCIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjEyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJtMjUgODAgMTAtMTUgMTAgMTUgMTAtMTUgMTAgMTUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwuNCkiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIi8+PC9zdmc+" 
            alt="Solid Web Creations Logo" 
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-white tracking-wider">
            Solid Web Creations
          </span>
        </a>
        <ul className="hidden md:flex items-center space-x-8 text-lg">
          <li><a href="#philosophy" className="hover:text-cyan-400 transition-colors duration-300">About</a></li>
          <li><a href="#services" className="hover:text-cyan-400 transition-colors duration-300">Services</a></li>
          <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors duration-300">Portfolio</a></li>
          <li><a href="#contact" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;