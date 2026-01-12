
import React from 'react';
// Added Scale to the lucide-react imports
import { Mail, Linkedin, GraduationCap, Award, ChevronRight, Scale } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0A1128] py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-6">Expert Council</h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">Our <span className="text-[#D4AF37]">Advocates</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg editorial font-light leading-relaxed">
            A diverse team of elite legal minds dedicated to the highest standards of the Kenyan Bar.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="group flex flex-col">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-8 shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{member.role}</p>
                    <h3 className="text-3xl font-black tracking-tight">{member.name}</h3>
                  </div>
                </div>
                
                <div className="px-2">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.specialties.map(s => (
                      <span key={s} className="px-3 py-1 bg-slate-50 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full border border-slate-100">
                        {s}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center text-sm text-slate-600">
                      <GraduationCap className="h-4 w-4 mr-3 text-[#D4AF37]" />
                      <span className="editorial">{member.education}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Award className="h-4 w-4 mr-3 text-[#D4AF37]" />
                      <span>LSK Practitioner: <span className="font-bold text-[#0A1128]">{member.lsk}</span></span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-[#0A1128] text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#D4AF37] transition-all flex items-center justify-center">
                      <Mail size={14} className="mr-2" />
                      Inquiry
                    </button>
                    <button className="w-14 h-14 border border-slate-200 rounded-2xl flex items-center justify-center text-[#0A1128] hover:border-[#0A1128] transition-all">
                      <Linkedin size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment CTA */}
      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-4 bg-white rounded-3xl shadow-sm border border-slate-100 mb-8">
            <Scale className="h-10 w-10 text-[#D4AF37]" />
          </div>
          <h2 className="text-4xl font-black text-[#0A1128] mb-6 leading-tight">Join Our Growing Team</h2>
          <p className="text-slate-600 editorial text-lg mb-10 leading-relaxed">
            We are always looking for exceptional legal practitioners and support professionals who share our relentless pursuit of excellence.
          </p>
          <a href="mailto:careers@mwanikiadvocates.co.ke" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] group">
            Explore Careers <ChevronRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
