import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Scale, ShieldCheck, Award, Users, Globe, ChevronRight } from 'lucide-react';
import { PRACTICE_AREAS, FIRM_DETAILS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-0">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#0A1128]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Nairobi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Available for Corporate Advisory</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Defining the <span className="text-[#D4AF37]">Standard</span> of Justice.
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 mb-12 max-w-xl editorial leading-relaxed">
              Based in the heart of Nairobi, we provide a sophisticated legal bridge between complex local regulations and global commercial ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-[#D4AF37] text-[#0A1128] px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center group">
                Begin Engagement
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link to="/practice-areas" className="border border-white/20 hover:bg-white/10 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all text-center">
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-12 hidden lg:flex items-center space-x-12 text-white border-l border-white/20 pl-12">
          <div>
            <div className="text-3xl font-black text-[#D4AF37]">15+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Years of Practice</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#D4AF37]">2k+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Closed Cases</div>
          </div>
        </div>
      </section>

      {/* Identity Statement */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-6">Strategic Integrity</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-[#0A1128] leading-tight mb-8">
                A Modern Law Firm for a Shifting Economy.
              </h3>
              <p className="text-slate-600 editorial text-lg leading-relaxed mb-8">
                The Kenyan legal landscape is evolving. From the digitalization of land registries to the complexities of the Data Protection Act, we ensure your interests are not just protected, but positioned for advantage.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className="font-black text-[#0A1128] text-xl mb-1">LSK Certified</span>
                  <span className="text-sm text-slate-500">Regulated practitioners in high standing.</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-[#0A1128] text-xl mb-1">E-Citizen Ready</span>
                  <span className="text-sm text-slate-500">Seamless integration with digital registries.</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000" 
                  alt="Legal Meeting" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-[#0A1128] p-10 rounded-3xl text-white hidden lg:block shadow-2xl">
                <ShieldCheck className="w-12 h-12 text-[#D4AF37] mb-4" />
                <p className="text-xl font-black mb-1">0% Compromise</p>
                <p className="text-xs text-slate-400 tracking-widest uppercase">Ethical Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Bento Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-4">Core Competencies</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-[#0A1128]">Expertise Across Sectors.</h3>
            </div>
            <Link to="/practice-areas" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] flex items-center group">
              View All Specializations
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area, idx) => (
              <div 
                key={area.id}
                className={`bento-card p-10 rounded-3xl border border-slate-200 bg-white flex flex-col justify-between ${
                  area.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div>
                  <div className="bg-[#0A1128] w-12 h-12 rounded-xl flex items-center justify-center mb-10 text-[#D4AF37]">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-black text-[#0A1128] mb-2">{area.title}</h4>
                  <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-6">{area.subtitle}</p>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{area.description}</p>
                </div>
                <div className="mt-12 flex justify-end">
                  <div className="p-3 bg-slate-50 rounded-full text-[#0A1128]/30 group-hover:text-[#D4AF37] transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-32 bg-[#0A1128] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-40 opacity-5">
           <Scale className="w-96 h-96" />
        </div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-black leading-tight mb-12">
            "We don't just solve problems; we prevent them from ever surfacing."
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="font-bold uppercase tracking-[0.3em] text-[#D4AF37] text-xs">Silas Mwaniki, Managing Partner</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;