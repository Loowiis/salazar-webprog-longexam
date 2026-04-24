import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Sign In', to: '/signin' },
    { label: 'Sign Up', to: '/signup' },
  ];

  const footerLinkClassName = ({ isActive }) =>
    [
      'text-xs font-light tracking-wide transition-all duration-300 relative',
      isActive
        ? 'text-white'
        : 'text-white/60 hover:text-white',
    ].join(' ');

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/15 rounded-lg animate-float-reverse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Brand Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative overflow-hidden rounded-full">
                  <img 
                    src={logo} 
                    alt="BulldogEx" 
                    className="h-10 w-10 object-contain transition-transform duration-300 hover:scale-110" 
                  />
                </div>
                <div>
                  <p className="text-lg font-light text-white">BulldogEx</p>
                  <p className="text-xs font-light text-white/50">Campus Shop</p>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                Your trusted campus marketplace for essentials, study supplies, and student merchandise.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:border-white/40 transition-colors duration-300 cursor-pointer">
                  <span className="text-xs text-white/60">.</span>
                </div>
                <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:border-white/40 transition-colors duration-300 cursor-pointer">
                  <span className="text-xs text-white/60">.</span>
                </div>
                <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:border-white/40 transition-colors duration-300 cursor-pointer">
                  <span className="text-xs text-white/60">.</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-sm font-light tracking-widest text-white/80 uppercase">Links</h3>
              <nav className="flex flex-col space-y-3">
                {footerLinks.map((link) => (
                  <NavLink key={link.to} to={link.to} className={footerLinkClassName}>
                    <span className="inline-block">{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-sm font-light tracking-widest text-white/80 uppercase">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white/40 rounded-full" />
                  <p className="text-sm text-white/70">Campus Center, Building A</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white/40 rounded-full" />
                  <p className="text-sm text-white/70">Monday to Friday: 8AM - 6PM</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white/40 rounded-full" />
                  <p className="text-sm text-white/70">support@bulldogex.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/50">
                © {currentYear} BulldogEx Shop. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-xs text-white/50 hover:text-white/70 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-white/50 hover:text-white/70 transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
