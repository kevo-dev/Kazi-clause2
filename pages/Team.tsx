
import React from 'react';
import { Mail, Linkedin, GraduationCap, Award } from 'lucide-react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#1a365d] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Advocates</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">
            A diverse team of legal minds dedicated to the highest standards of the Kenyan Bar.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-1">{member.role}</p>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <div className="space-y-4 text-sm text-slate-600 mb-8">
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-3 text-[#d4af37]" />
                      <span>{member.education}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-3 text-[#d4af37]" />
                      <span>LSK No: <span className="font-bold">{member.lsk}</span></span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Specialization</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map(s => (
                        <span key={s} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex-1 bg-[#1a365d] text-white py-3 rounded font-bold hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2">
                      <Mail size={16} />
                      <span>Contact</span>
                    </button>
                    <button className="p-3 border border-slate-200 rounded text-slate-400 hover:text-[#1a365d] hover:border-[#1a365d] transition-all">
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
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Team</h2>
          <p className="text-slate-400 mb-10 leading-relaxed">
            We are always looking for talented legal minds and support staff who share our commitment to excellence and professional ethics.
          </p>
          <a href="mailto:careers@mwanikiadvocates.co.ke" className="inline-block bg-[#d4af37] text-[#1a365d] px-10 py-4 rounded font-bold hover:bg-yellow-500 transition-all">
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
