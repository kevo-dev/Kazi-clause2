
import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Insights: React.FC = () => {
  const posts = [
    {
      title: "Understanding the Business Laws (Amendment) Act 2024",
      excerpt: "Recent changes in Kenyan corporate law designed to facilitate ease of doing business and e-signatures.",
      date: "Oct 12, 2024",
      author: "Silas Mwaniki",
      category: "Corporate Law",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Land Transaction Tips: Avoiding Conveyancing Pitfalls",
      excerpt: "Essential steps for verifying land titles in Kenya and ensuring safe property transfers.",
      date: "Sep 28, 2024",
      author: "Faith Njeri",
      category: "Property Law",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Employee Rights in Kenya: A 2024 Update",
      excerpt: "Analyzing recent rulings from the Employment and Labour Relations Court on summary dismissal.",
      date: "Sep 15, 2024",
      author: "David Ochieng",
      category: "Labour Law",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#1a365d] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Legal Insights</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">
            Latest news, articles, and updates from the Kenyan legal fraternity.
          </p>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <article key={post.title} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#d4af37] text-[#1a365d] px-3 py-1 text-xs font-bold rounded uppercase">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</div>
                  <div className="flex items-center"><User size={14} className="mr-1" /> {post.author}</div>
                </div>
                <h2 className="text-xl font-bold text-[#1a365d] mb-4 group-hover:text-[#d4af37] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed italic">
                  "{post.excerpt}"
                </p>
                <button className="flex items-center text-[#1a365d] font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Read Article <ArrowRight size={16} className="ml-2" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-[#1a365d] mb-4">Stay Informed</h3>
          <p className="text-slate-600 mb-8">Receive monthly digests of legal updates in Kenya straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />
            <button className="bg-[#1a365d] text-white px-10 py-4 rounded-md font-bold hover:bg-slate-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
