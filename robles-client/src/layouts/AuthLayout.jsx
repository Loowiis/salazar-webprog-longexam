import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        {/* Left side - Brand */}
        <div className="relative flex items-center justify-center bg-black p-8 sm:p-10 lg:p-16">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full animate-float" />
            <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-white/15 animate-float-reverse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-white/10 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative z-10 text-center space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative overflow-hidden rounded-full">
                <img 
                  src={logo} 
                  alt="BulldogEx" 
                  className="h-24 w-24 object-contain transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <div>
                <h2 className="text-3xl font-light text-white">BulldogEx</h2>
                <p className="text-sm font-light text-white/60">Campus Shop</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg font-light text-white/80 leading-relaxed max-w-xs mx-auto">
                Your trusted campus marketplace for essentials and student merchandise.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <span>← Back to Home</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right side - Auth Form */}
        <main className="flex items-center bg-gray-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AuthLayout;
