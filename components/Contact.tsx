import React, { useState, useEffect } from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
    const [sectionRef, isSectionVisible] = useAnimateOnScroll(0.2);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
    const [status, setStatus] = useState<FormStatus>('idle');

    useEffect(() => {
        if (status === 'success' || status === 'error') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 5000); // Hide message after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [status]);

    const validate = () => {
        const newErrors: { name?: string; email?: string; message?: string } = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.message) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const encode = (data: { [key: string]: string }) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        
        setStatus('loading');
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
        .then(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
            setStatus('error');
            console.error(error);
        });
    };

    const NotificationBanner = () => {
        if (status !== 'success' && status !== 'error') return null;

        const isSuccess = status === 'success';
        const baseClasses = 'p-4 rounded-lg border flex items-start space-x-3 transition-all duration-300';
        const successClasses = 'bg-green-500/10 border-green-500/50 text-green-300';
        const errorClasses = 'bg-red-500/10 border-red-500/50 text-red-300';
        const message = isSuccess 
            ? "Message sent successfully! I'll be in touch soon."
            : "Something went wrong. Please try again or email me directly.";

        const Icon = isSuccess ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        );

        return (
            <div className={`${baseClasses} ${isSuccess ? successClasses : errorClasses}`}>
                <div className="flex-shrink-0">{Icon}</div>
                <div>{message}</div>
            </div>
        );
    };

    return (
        <section id="contact" className="relative py-24 md:py-28 overflow-hidden" ref={sectionRef}>
             <div className="absolute inset-0 z-[-1]">
                <img 
                    src="https://plus.unsplash.com/premium_photo-1757057442120-b63215b9e989?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
                    alt="Abstract blue and purple digital network connections"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="absolute inset-0 bg-slate-800/95"></div>
            <div className="container mx-auto px-6 relative">
                <div className={`text-center mb-12 anim-item ${isSectionVisible ? 'is-visible' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Build Something Great</h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                        Have a project in mind? Fill out the form below to get in touch.
                    </p>
                </div>
                <div className={`max-w-2xl mx-auto anim-item ${isSectionVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '200ms' }}>
                    <form 
                        onSubmit={handleSubmit} 
                        noValidate 
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="hidden">
                            <label>
                                Don’t fill this out if you’re human: <input name="bot-field" />
                            </label>
                        </div>
                        <div className="min-h-[72px]">
                          <NotificationBanner />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                                    required
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                                    required
                                />
                                 {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
                                    required
                                ></textarea>
                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                            </div>
                            <div className="text-center pt-2">
                                <button 
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="inline-block bg-cyan-500 text-slate-900 text-lg font-bold py-3 px-8 rounded-lg hover:bg-cyan-400 focus:outline-none focus:ring-4 focus:ring-cyan-300 transition-all duration-300 transform hover:scale-105 disabled:bg-slate-500 disabled:cursor-not-allowed w-full md:w-auto"
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
