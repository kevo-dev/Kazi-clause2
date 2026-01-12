import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Scale } from 'lucide-react';
import { FIRM_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. An advocate from Mwaniki & Associates will reach out to you within 24 hours.");
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#0A1128] py-32 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-[0.4em] mb-6">Engagement</h2>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">Begin <span className="text-[#D4AF37]">Dialogue</span></h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg editorial font-light leading-relaxed">
            Schedule a confidential consultation with our advocates to secure your legal position.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Details */}
            <div>
              <h2 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-4">Location & Access</h2>
              <h3 className="text-4xl font-black text-[#0A1128] mb-12 leading-tight">Nairobi Head Office</h3>
              
              <div className="space-y-12">
                <div className="flex items-start group">
                  <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-[#D4AF37]/10 transition-colors">
                    <MapPin className="text-[#0A1128] h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-black text-[#0A1128] mb-2 uppercase text-xs tracking-widest">Address</h4>
                    <p className="text-slate-600 editorial text-lg">{FIRM_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Phone className="text-[#0A1128] h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-black text-[#0A1128] mb-2 uppercase text-xs tracking-widest">Inquiries</h4>
                    <p className="text-slate-600 editorial text-lg">Direct: {FIRM_DETAILS.phone}</p>
                    <p className="text-slate-600 editorial text-lg">WhatsApp: +{FIRM_DETAILS.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Clock className="text-[#0A1128] h-6 w-6" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-black text-[#0A1128] mb-2 uppercase text-xs tracking-widest">Hours</h4>
                    <p className="text-slate-600 editorial text-lg">{FIRM_DETAILS.workingHours}</p>
                    <p className="text-slate-400 text-xs italic mt-2">Emergency council available 24/7 for active retainers.</p>
                  </div>
                </div>
              </div>

              {/* Map Visual */}
              <div className="mt-16 aspect-video bg-slate-100 rounded-3xl relative overflow-hidden group shadow-inner">
                <img 
                   src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                   alt="Map Placeholder" 
                   className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white p-6 rounded-3xl shadow-2xl text-center">
                     <div className="bg-[#0A1128] p-3 rounded-full inline-block mb-3">
                        <MapPin className="text-[#D4AF37] h-6 w-6" />
                     </div>
                     <p className="font-black text-[#0A1128] text-sm">Western Heights, Nairobi</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-12 lg:p-16 rounded-[40px] border border-slate-100 shadow-2xl relative">
              <div className="absolute -top-6 -left-6 bg-[#D4AF37] p-4 rounded-3xl shadow-lg">
                <Scale className="text-[#0A1128]" size={24} />
              </div>
              <h3 className="text-3xl font-black text-[#0A1128] mb-10 leading-tight">Request Counsel</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:bg-white focus:border-[#D4AF37] transition-all focus:outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:bg-white focus:border-[#D4AF37] transition-all focus:outline-none"
                      placeholder="+254..."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:bg-white focus:border-[#D4AF37] transition-all focus:outline-none"
                    placeholder="jane@organization.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Subject of Inquiry</label>
                  <select className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:bg-white focus:border-[#D4AF37] transition-all focus:outline-none appearance-none">
                    <option>Corporate Advisory</option>
                    <option>Real Estate & Conveyancing</option>
                    <option>Litigation & Disputes</option>
                    <option>Estate Planning</option>
                    <option>Other Legal Matter</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Brief Description</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:bg-white focus:border-[#D4AF37] transition-all focus:outline-none"
                    placeholder="Provide a high-level summary..."
                  ></textarea>
                </div>
                <div className="pt-6">
                  <button type="submit" className="w-full bg-[#0A1128] text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#D4AF37] hover:text-[#0A1128] transition-all flex items-center justify-center space-x-2 shadow-xl shadow-[#0A1128]/10">
                    <Send size={16} />
                    <span>Initiate Contact</span>
                  </button>
                  <p className="text-[9px] text-slate-400 mt-6 text-center italic">
                    Submitting this form does not establish an advocate-client relationship. All data is handled according to the Data Protection Act.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;