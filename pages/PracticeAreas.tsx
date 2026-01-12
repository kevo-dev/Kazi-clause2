import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Home, Gavel, Users, Zap, Shield, ChevronRight, Scale, Globe } from 'lucide-react';
import { PRACTICE_AREAS } from '../constants';

const PracticeAreas: React.FC = () => {
  const iconMap: any = {
    corporate: <Briefcase />,
    conveyancing: <Home />,
    litigation: <Gavel />,
    family: <Users />,
    intellectual: <Zap />
  };

  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="bg-[#0A1128] py-40 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-40 opacity-10 blur-3xl bg-[#D4AF37] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-6xl lg:text-8xl font-black tracking-tighter mb-8">Our <span className="text-[#D4AF37]">Expertise</span></h1>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl editorial leading-relaxed">
            Specialized legal strategies designed for the complexities of modern commerce, property, and civil life in East Africa.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {PRACTICE_AREAS.map((area) => (
              <div key={area.id} className="bg-white p-12 lg:p-20 group hover:bg-[#0A1128] transition-all duration-700">
                <div className="flex flex-col h-full">
                  <div className="mb-12 flex justify-between items-start">
                    <div className="bg-slate-50 p-6 rounded-2xl text-[#0A1128] group-hover:bg-[#D4AF37] group-hover:text-[#0A1128] transition-all duration-500">
                      {React.cloneElement(iconMap[area.id] || <Scale />, { size: 32 })}
                    </div>
                    <span className="text-6xl font-black text-slate-100 group-hover:text-white/5 transition-colors">
                      {PRACTICE_AREAS.indexOf(area) + 1 < 10 ? `0${PRACTICE_AREAS.indexOf(area) + 1}` : PRACTICE_AREAS.indexOf(area) + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-[#0A1128] group-hover:text-white mb-4">{area.title}</h3>
                  <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.3em] mb-8">{area.subtitle}</p>
                  <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed editorial text-lg mb-12">
                    {area.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-4 mb-10">
                      <span className="px-4 py-2 bg-slate-50 group-hover:bg-white/5 rounded-full text-[10px] font-bold text-[#0A1128] group-hover:text-slate-300 border border-slate-100 group-hover:border-white/10 uppercase tracking-widest">
                        Advisory
                      </span>
                      <span className="px-4 py-2 bg-slate-50 group-hover:bg-white/5 rounded-full text-[10px] font-bold text-[#0A1128] group-hover:text-slate-300 border border-slate-100 group-hover:border-white/10 uppercase tracking-widest">
                        Documentation
                      </span>
                    </div>
                    
                    <Link to="/contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#0A1128] group-hover:text-[#D4AF37] transition-all">
                      Secure Consultation <ChevronRight size={14} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-border note */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Globe className="w-12 h-12 text-[#D4AF37] mx-auto mb-8" />
          <h4 className="text-2xl font-black text-[#0A1128] mb-6">Regional Reach. Local Roots.</h4>
          <p className="text-slate-600 editorial leading-relaxed">
            While based in Nairobi, our firm maintains strong corresponding relationships with legal practitioners in Tanzania, Uganda, Rwanda, and Ethiopia, providing seamless cross-border legal support for your regional ambitions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;