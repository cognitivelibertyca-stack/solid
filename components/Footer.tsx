import React, { useEffect, useState } from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Footer: React.FC = () => {
  const [footerRef, isFooterVisible] = useAnimateOnScroll(0.05);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (subscribeStatus !== 'idle') {
      const timer = setTimeout(() => setSubscribeStatus('idle'), 4000);
      return () => clearTimeout(timer);
    }
  }, [subscribeStatus]);

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubscribeStatus('error');
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", "email": email })
    })
    .then(() => {
        setSubscribeStatus('success');
        setEmail('');
    })
    .catch((error) => {
        setSubscribeStatus('error');
        console.error(error);
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700 text-slate-300" ref={footerRef}>
      <div className={`container mx-auto px-6 py-16 anim-item ${isFooterVisible ? 'is-visible' : ''}`}>
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white">Matthew Danielson</h3>
            <p className="text-lg mb-4">Solid Web Creations</p>
            <div className="flex items-center space-x-4">
                <a href="https://github.com/Math-ias" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <GitHubIcon />
                </a>
                <a href="https://www.linkedin.com/in/matthew-danielson-243642250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <LinkedInIcon />
                </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="tel:6474500225" className="flex items-center text-lg hover:text-cyan-400 transition-colors">
              <PhoneIcon />
              (647) 450-0225
            </a>
            <a href="mailto:mathaes33@gmail.com" className="flex items-center text-lg hover:text-cyan-400 transition-colors">
              <MailIcon />
              mathaes33@gmail.com
            </a>
            <div className="flex items-center text-lg">
                <LocationIcon />
                Hanover, Ontario
            </div>
             <a href="https://share.google/XAWzNXOiHVRxjD9IL" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-cyan-400 transition-colors">
                <LinkIcon />
                Google Business Profile
            </a>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-4">Stay Updated</h4>
            <p className="text-slate-400 mb-4">Join our newsletter for the latest in web tech and local SEO insights.</p>
            <form 
              onSubmit={handleSubscribe} 
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="flex flex-col sm:flex-row gap-2"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <div className="hidden">
                  <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
              </div>
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="footer-email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="flex-grow bg-slate-800 border border-slate-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition w-full"
                required
              />
              <button
                type="submit"
                className="bg-cyan-500 text-slate-900 font-bold py-2 px-4 rounded-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-colors transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
            <div className="h-5 mt-2 text-sm text-left sm:text-center md:text-left">
                {subscribeStatus === 'success' && <p className="text-green-400">Thank you for subscribing!</p>}
                {subscribeStatus === 'error' && <p className="text-red-400">Please enter a valid email.</p>}
            </div>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-slate-700 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Solid Web Creations. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
