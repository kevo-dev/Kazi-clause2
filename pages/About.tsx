import React from 'react';
import { ShieldCheck, Target, Heart, Scale } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0A1128] py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-6">Our Legacy</h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">About the <span className="text-[#D4AF37]">Firm</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg editorial font-light leading-relaxed">
            Founded on the principles of justice and integrity, Mwaniki & Associates has grown to become a cornerstone of legal excellence in Nairobi.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-4">Strategic Evolution</h2>
              <h3 className="text-4xl font-black text-[#0A1128] mb-8 leading-tight">Building a Legacy of Trust since inception.</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed editorial text-lg">
                <p>
                  Mwaniki & Associates Advocates was established with a singular vision: to provide sophisticated legal services that address the complexities of a modernizing Kenya. Our founders identified a gap in the market for a firm that combined international standard expertise with deep local roots.
                </p>
                <p>
                  Today, we are a full-service law firm based in the heart of Nairobi, serving clients across the East African region. We pride ourselves on being advocates of the High Court who not only know the law but understand the business and human dynamics that drive it.
                </p>
                <p>
                  Our firm is fully compliant with the Law Society of Kenya (LSK) regulations and is committed to the highest ethical standards of the legal profession.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Office" 
                  className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 group hover:border-[#D4AF37] transition-all">
              <div className="bg-[#0A1128] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-[#D4AF37]">
                <Target size={28} />
              </div>
              <h4 className="text-2xl font-black text-[#0A1128] mb-4">Our Mission</h4>
              <p className="text-slate-500 text-sm leading-relaxed editorial">
                To provide innovative and effective legal solutions that empower our clients to achieve their objectives while upholding the rule of law.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 group hover:border-[#D4AF37] transition-all">
              <div className="bg-[#0A1128] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-[#D4AF37]">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-2xl font-black text-[#0A1128] mb-4">Our Vision</h4>
              <p className="text-slate-500 text-sm leading-relaxed editorial">
                To be the preferred legal partner in Kenya, recognized for our unwavering commitment to excellence, ethics, and community impact.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 group hover:border-[#D4AF37] transition-all">
              <div className="bg-[#0A1128] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-[#D4AF37]">
                <Heart size={28} />
              </div>
              <h4 className="text-2xl font-black text-[#0A1128] mb-4">Core Values</h4>
              <p className="text-slate-500 text-sm leading-relaxed editorial">
                Integrity, Excellence, Professionalism, and Transparency are the pillars upon which every advocate in our firm stands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;