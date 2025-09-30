import React, { useEffect, useRef } from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const ServiceCard: React.FC<{ title: string; description: string; imageUrl: string; delay: number; isVisible: boolean }> = ({ title, description, imageUrl, delay, isVisible }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particlesArray: Particle[] = [];
        
        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (!canvas) return;
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }
        
        function init() {
            particlesArray = [];
            if (!canvas) return;
            const numberOfParticles = (canvas.width * canvas.height) / 11000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = (Math.random() * 1.5) + 1;
                const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
                const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
                const directionX = (Math.random() * .4) - .2;
                const directionY = (Math.random() * .4) - .2;
                const color = 'rgba(107, 235, 244, 0.8)';

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connect();
        }
        
        function connect() {
            if (!ctx) return;
            const connectRadius = 100; // Max distance to connect particles
            const connectDistanceSquared = connectRadius * connectRadius;
            
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const distanceX = particlesArray[a].x - particlesArray[b].x;
                    const distanceY = particlesArray[a].y - particlesArray[b].y;
                    const distanceSquared = distanceX * distanceX + distanceY * distanceY;
                    
                    if (distanceSquared < connectDistanceSquared) {
                        const opacityValue = 1 - (distanceSquared / connectDistanceSquared);
                        ctx.strokeStyle=`rgba(107, 235, 244, ${opacityValue})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        const setCanvasSize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
                init();
            }
        };

        const startAnimation = () => {
             if (!animationFrameId) {
                setCanvasSize();
                animate();
            }
        };

        const stopAnimation = () => {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = 0;
            setTimeout(() => {
                if (animationFrameId === 0) { // Only clear if not restarted
                    if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }, 300);
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);
        const parentElement = canvas.parentElement;
        parentElement?.addEventListener('mouseenter', startAnimation);
        parentElement?.addEventListener('mouseleave', stopAnimation);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            parentElement?.removeEventListener('mouseenter', startAnimation);
            parentElement?.removeEventListener('mouseleave', stopAnimation);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            className={`relative rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-cyan-500/20 anim-item ${isVisible ? 'is-visible' : ''} h-[32rem] overflow-hidden group`}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            <img 
                src={imageUrl}
                alt={title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <canvas ref={canvasRef} className="absolute inset-0 z-[1] w-full h-full opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-[2]">
                <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
                <p className="text-lg text-slate-200">{description}</p>
            </div>
        </div>
    );
};


const Services: React.FC = () => {
    const [sectionRef, isSectionVisible] = useAnimateOnScroll();
    
    const serviceItems = [
        { 
            title: "Custom Web Design", 
            description: "Creating visually stunning, user-friendly websites tailored to your brand identity and business goals.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1681426655848-d5fd8b9ff528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExM3x8fGVufDB8fHx8fA%3D%3D"
        },
        { 
            title: "Full-Stack Development", 
            description: "Building fast, secure, and scalable web applications with modern technologies for optimal performance.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1678796801121-7324d8e04026?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg4fHx8ZW58MHx8fHx8"
        },
        { 
            title: "Local SEO Strategy", 
            description: "Optimizing your site to dominate local search results in Hanover and connect with your community.",
            imageUrl: "https://plus.unsplash.com/premium_photo-1681426661039-7f65410792e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8"
        }
    ];

    return (
        <section 
            id="services" 
            className="relative py-24 md:py-28 overflow-hidden" 
            ref={sectionRef}
        >
            <div className="absolute inset-0 z-[-1]">
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Abstract data connections"
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-slate-900/95 z-0"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className={`text-center mb-12 anim-item ${isSectionVisible ? 'is-visible' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Core Web Services</h2>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
                        Delivering comprehensive solutions to build and grow your online presence.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {serviceItems.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                            delay={index * 150}
                            isVisible={isSectionVisible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
