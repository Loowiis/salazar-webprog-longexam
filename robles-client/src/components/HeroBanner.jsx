import { useState, useEffect } from 'react';
import banner from '../assets/img/nu_bulldogex_banner.jpg';

const HeroBanner = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* 3D Animated Background Layer */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 transition-transform duration-100 ease-out"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg) translateZ(-50px)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <img
            src={banner}
            alt=""
            className="h-full w-full object-cover opacity-90"
            style={{
              transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
              filter: 'contrast(1.1) brightness(0.9)'
            }}
          />
        </div>
        
        {/* Floating geometric elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full"
            style={{
              animation: 'float 6s ease-in-out infinite',
              transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0)`
            }}
          />
          <div 
            className="absolute bottom-32 right-32 w-24 h-24 border-2 border-white/15"
            style={{
              animation: 'float 8s ease-in-out infinite reverse',
              transform: `translate3d(${mousePosition.x * 15}px, ${mousePosition.y * 15}px, 0) rotate(45deg)`
            }}
          />
          <div 
            className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-white/10 rounded-lg"
            style={{
              animation: 'float 7s ease-in-out infinite',
              transform: `translate3d(${mousePosition.x * 25}px, ${mousePosition.y * 25}px, 0) rotate(30deg)`
            }}
          />
        </div>
      </div>

      {/* Overlay with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center space-y-8">
          <div 
            className="space-y-4"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002)
            }}
          >
            <p className="text-sm font-light uppercase tracking-widest text-white/80 animate-fade-in-up">
              Campus Marketplace
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight animate-fade-in-up-delayed">
              BulldogEx
              <span className="block text-3xl md:text-5xl mt-2 font-extralight">Shop</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed-2">
              Discover campus uniforms, student essentials, and exclusive merchandise in our curated marketplace.
            </p>
          </div>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delayed-3"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.0015)
            }}
          >
            <a 
              href="/products"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden border border-white/20 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <span className="relative z-10 text-sm font-medium tracking-wide">Shop Now</span>
              <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a 
              href="/about"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-white/80 transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10 text-sm font-medium tracking-wide">About Store</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-white/30" />
        <div className="w-2 h-2 bg-white/50 rounded-full mx-auto -mt-1" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up-delayed {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up-delayed-2 {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up-delayed-3 {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-delayed-2 {
          animation: fade-in-up-delayed-2 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up-delayed-3 {
          animation: fade-in-up-delayed-3 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
