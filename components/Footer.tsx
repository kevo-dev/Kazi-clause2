
import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { FIRM_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a365d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Firm Identity */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-[#d4af37]" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">MWANIKI</span>
                <span className="text-[10px] font-semibold text-[#d4af37] tracking-widest uppercase">& ASSOCIATES</span>
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Advocates of the High Court of Kenya. Committed to integrity, excellence, and the relentless pursuit of justice for our clients.
            </p>
            <div className="flex space-x-4">
              <a href={FIRM_DETAILS.socials.linkedin} className="text-slate-400 hover:text-[#d4af37] transition-colors"><Linkedin size={20} /></a>
              <a href={FIRM_DETAILS.socials.twitter} className="text-slate-400 hover:text-[#d4af37] transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d4af37] font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About the Firm</Link></li>
              <li><Link to="/practice-areas" className="hover:text-white transition-colors">Practice Areas</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Advocates</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Legal Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#d4af37] font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#d4af37] shrink-0 mt-0.5" />
                <span>{FIRM_DETAILS.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#d4af37] shrink-0" />
                <span>{FIRM_DETAILS.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#d4af37] shrink-0" />
                <span>{FIRM_DETAILS.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / eCitizen compliance note */}
          <div>
            <h3 className="text-[#d4af37] font-semibold mb-6 uppercase tracking-wider text-sm">Resources</h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Compliant with the Kenya Data Protection Act and LSK rules on professional conduct.
            </p>
            <Link to="/contact" className="inline-block border border-[#d4af37] text-[#d4af37] px-6 py-2 text-xs font-semibold hover:bg-[#d4af37] hover:text-[#1a365d] transition-all">
              SECURE CONSULTATION
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} {FIRM_DETAILS.name}. All Rights Reserved.</p>
            <div className="flex space-x-6 italic">
              <p>Disclaimer: This website does not constitute legal advice. No advocate-client relationship is formed by using this site.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
