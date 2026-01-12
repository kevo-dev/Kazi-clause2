import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Linkedin, Twitter, Instagram, ChevronRight } from 'lucide-react';
import { FIRM_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1128] text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-8 group">
              <div className="bg-white/10 p-2 rounded mr-3">
                <Scale className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase">MWANIKI</span>
                <span className="text-[9px] font-bold text-[#D4AF37] tracking-[0.3em] -mt-1 uppercase">Advocates</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 editorial">
              A premier law firm committed to navigating the intricacies of Kenyan law with international excellence and strategic foresight.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Practice Areas', 'Team', 'Insights', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors flex items-center group"
                  >
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-8">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin size={16} className="text-[#D4AF37] mr-4 shrink-0 mt-1" />
                <span className="text-sm text-slate-300 leading-relaxed">{FIRM_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-[#D4AF37] mr-4 shrink-0" />
                <span className="text-sm text-slate-300">{FIRM_DETAILS.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-[#D4AF37] mr-4 shrink-0" />
                <span className="text-sm text-slate-300">{FIRM_DETAILS.email}</span>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-8">LSK Status</h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-xs text-slate-400 leading-relaxed mb-4 italic">
                All our advocates are active members of the Law Society of Kenya (LSK) and are fully compliant with the Advocate's Act.
              </p>
              <div className="flex items-center text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Practice Status: Active
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {FIRM_DETAILS.name}.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;