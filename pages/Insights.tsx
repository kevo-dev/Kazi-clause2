import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowUpRight, Search } from 'lucide-react';

const Insights: React.FC = () => {
  const articles = [
    {
      title: "The Digital Shift: Land Registries in the Era of ArdhiSasa",
      excerpt: "Analyzing the transition to Kenya's digital land registry and its impact on property transaction security and velocity.",
      author: "Silas Mwaniki",
      date: "May 2024",
      tag: "Property Law",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Fintech Regulation: Navigating the CBK Amendment Act",
      excerpt: "What the new licensing requirements mean for digital credit providers and payment service systems in Nairobi.",
      author: "Faith Njeri",
      date: "April 2024",
      tag: "Corporate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Data Privacy Compliance for SME Businesses in Kenya",
      excerpt: "A practical guide to registering with the Office of the Data Protection Commissioner and handling consumer data.",
      author: "Mwaniki Associates",
      date: "March 2024",
      tag: "Tech & Privacy",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-6">Legal Journal</h2>
            <h1 className="text-6xl lg:text-7xl font-black tracking-tighter text-[#0A1128] mb-12">Insights & <span className="text-[#D4AF37]">Analysis.</span></h1>
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="Search topics..." 
                className="w-full bg-white border border-slate-200 py-4 pl-6 pr-12 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden group">
              <img src={articles[0].image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Featured" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-6">{articles[0].tag}</span>
              <h2 className="text-4xl font-black text-[#0A1128] mb-6 leading-tight">{articles[0].title}</h2>
              <p className="text-slate-500 editorial text-lg mb-10 leading-relaxed">{articles[0].excerpt}</p>
              <div className="flex items-center space-x-6 mb-12 text-xs font-bold uppercase tracking-widest text-slate-400">
                <span className="flex items-center"><User size={14} className="mr-2 text-[#D4AF37]" /> {articles[0].author}</span>
                <span className="flex items-center"><Calendar size={14} className="mr-2 text-[#D4AF37]" /> {articles[0].date}</span>
              </div>
              <button className="self-start bg-[#0A1128] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-all">
                Read Full Analysis
              </button>
            </div>
          </div>

          <hr className="border-slate-100 mb-24" />

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.slice(1).map((art, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8">
                  <img src={art.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Article" />
                </div>
                <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-[0.3em] mb-4 block">{art.tag}</span>
                <h3 className="text-xl font-black text-[#0A1128] mb-4 group-hover:text-[#D4AF37] transition-colors leading-snug">{art.title}</h3>
                <p className="text-sm text-slate-500 editorial line-clamp-3 mb-8">{art.excerpt}</p>
                <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
                  Read Article <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;