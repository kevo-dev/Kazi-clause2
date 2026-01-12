import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, PhoneCall } from 'lucide-react';
import { FIRM_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Practice', path: '/practice-areas' },
    { name: 'The Firm', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Team', path: '/team' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 glass shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="bg-[#0A1128] p-2 rounded mr-3 group-hover:bg-[#D4AF37] transition-colors duration-500">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tighter ${scrolled ? 'text-[#0A1128]' : 'text-[#0A1128]'} uppercase`}>MWANIKI</span>
              <span className="text-[9px] font-bold text-[#D4AF37] tracking-[0.3em] -mt-1 uppercase">Advocates</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-[#D4AF37] ${
                  location.pathname === link.path ? 'text-[#D4AF37]' : 'text-[#0A1128]/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#0A1128] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all flex items-center"
            >
              <PhoneCall className="w-3 h-3 mr-2" />
              Consult
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#0A1128]">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-[#0A1128]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#0A1128] text-white py-4 rounded-lg text-center font-bold"
          >
            BOOK CONSULTATION
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;