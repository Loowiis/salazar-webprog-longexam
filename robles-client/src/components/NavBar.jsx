import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sign In', to: '/signin' },
  { label: 'Sign Up', to: '/signup' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'px-4 py-2 text-xs font-light tracking-wide transition-all duration-300 relative',
    isActive
      ? 'text-white'
      : 'text-white/60 hover:text-white',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-full">
            <img 
              src={logo} 
              alt="BulldogEx" 
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110" 
            />
          </div>
          <div className="space-y-0.5">
            <p className="text-lg font-light text-white">BulldogEx</p>
            <p className="text-xs font-light text-white/50">Campus Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </nav>  
      </div>
    </header>
  );
};

export default NavBar;
