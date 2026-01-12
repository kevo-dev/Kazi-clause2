
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Award, Users, Scale, MessageSquare } from 'lucide-react';
import { PRACTICE_AREAS, FIRM_DETAILS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            alt="Nairobi Skyline Legal Concept" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d] via-[#1a365d]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#d4af37] text-[#1a365d] px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
              Premier Kenyan Law Firm
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Professional Integrity. <br />
              <span className="text-[#d4af37]">Legal Excellence.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Mwaniki & Associates Advocates provides tailored legal solutions for individuals, SMEs, and global corporations navigating the Kenyan legal landscape.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/contact" 
                className="bg-[#d4af37] text-[#1a365d] px-8 py-4 rounded-md font-bold text-center hover:bg-yellow-500 transition-all flex items-center justify-center group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/practice-areas" 
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-md font-bold text-center hover:bg-white/20 transition-all"
              >
                View Practice Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-8">Trusted by clients across sectors</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-bold text-[#1a365d]">KENYA POWER</span>
            <span className="text-xl font-bold text-[#1a365d]">NCBA BANK</span>
            <span className="text-xl font-bold text-[#1a365d]">SAFARICOM</span>
            <span className="text-xl font-bold text-[#1a365d]">BRITAM</span>
            <span className="text-xl font-bold text-[#1a365d]">KRA</span>
          </div>
        </div>
      </section>

      {/* Practice Areas Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#d4af37] uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-[#1a365d] mb-6">Comprehensive Legal Solutions</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer a full spectrum of legal services designed to protect your interests and foster growth within the Kenyan regulatory framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.slice(0, 6).map((area) => (
              <div key={area.id} className="group p-8 border border-slate-100 bg-slate-50 rounded-lg hover:bg-[#1a365d] transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="mb-6 inline-block p-4 bg-white rounded-lg shadow-sm text-[#1a365d] group-hover:bg-[#d4af37] transition-colors">
                  <Scale className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-[#1a365d] group-hover:text-white">{area.title}</h4>
                <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
                <Link to="/practice-areas" className="text-[#d4af37] font-semibold text-sm flex items-center group-hover:text-white">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#1a365d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4">The Mwaniki Advantage</h2>
              <h3 className="text-4xl font-bold mb-8 leading-tight">Navigating Kenya's Legal Landscape with Precision</h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Deep Local Insights",
                    desc: "We understand the nuances of the Kenyan business environment, eCitizen platforms, and LSK regulations.",
                    icon: <CheckCircle className="text-[#d4af37] h-6 w-6" />
                  },
                  {
                    title: "Result-Oriented Approach",
                    desc: "Our focus is always on achieving the best practical outcome for our clients, whether through litigation or mediation.",
                    icon: <Award className="text-[#d4af37] h-6 w-6" />
                  },
                  {
                    title: "Client-Centric Service",
                    desc: "We provide transparent, timely, and accessible legal advice, keeping you informed at every step of the process.",
                    icon: <Users className="text-[#d4af37] h-6 w-6" />
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="shrink-0 mt-1 bg-[#d4af37]/20 p-2 rounded">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
                alt="Law Library" 
                className="rounded-lg shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 border-8 border-[#d4af37] z-0 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a365d] mb-8">Ready to secure your legal position?</h2>
          <p className="text-slate-600 mb-12 text-lg">
            Consult with our expert advocates today. We offer preliminary assessments for corporate and property matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="w-full sm:w-auto bg-[#1a365d] text-white px-10 py-4 rounded font-bold hover:bg-slate-800 transition-all">
              Book a Consultation
            </Link>
            <a href={`tel:${FIRM_DETAILS.phone}`} className="w-full sm:w-auto flex items-center justify-center space-x-2 text-[#1a365d] font-bold border-2 border-[#1a365d] px-10 py-4 rounded hover:bg-[#1a365d] hover:text-white transition-all">
              Call {FIRM_DETAILS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
