
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
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
      <section className="bg-[#1a365d] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">
            Speak with an advocate today to secure your legal position.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Details */}
            <div>
              <h2 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</h2>
              <h3 className="text-4xl font-bold text-[#1a365d] mb-12">Visit Our Offices</h3>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="bg-[#1a365d]/5 p-4 rounded-lg">
                    <MapPin className="text-[#1a365d] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Nairobi Office</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{FIRM_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-[#1a365d]/5 p-4 rounded-lg">
                    <Phone className="text-[#1a365d] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Call Us</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">Main: {FIRM_DETAILS.phone}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">WhatsApp: +{FIRM_DETAILS.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-[#1a365d]/5 p-4 rounded-lg">
                    <Mail className="text-[#1a365d] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Email Us</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{FIRM_DETAILS.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-[#1a365d]/5 p-4 rounded-lg">
                    <Clock className="text-[#1a365d] h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Working Hours</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{FIRM_DETAILS.workingHours}</p>
                    <p className="text-slate-400 text-xs italic mt-1">Available for emergencies on weekends via WhatsApp.</p>
                  </div>
                </div>
              </div>

              {/* Mock Map Placeholder */}
              <div className="mt-12 h-64 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center relative overflow-hidden group">
                <img 
                   src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                   alt="Map Placeholder" 
                   className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="relative z-10 text-center px-6">
                   <div className="bg-white p-3 rounded-full shadow-lg inline-block mb-4">
                     <MapPin className="text-[#1a365d] h-8 w-8" />
                   </div>
                   <p className="font-bold text-[#1a365d]">Western Heights, Westlands</p>
                   <p className="text-xs text-slate-600">Open in Google Maps</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-8">Consultation Request</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      placeholder="John Doe"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      placeholder="+254 7..."
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Practice Area</label>
                  <select 
                    className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37] bg-white"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option>Corporate Law</option>
                    <option>Conveyancing</option>
                    <option>Dispute Resolution</option>
                    <option>Family Law</option>
                    <option>Immigration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Brief Summary of Matter</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    placeholder="How can we help you?"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button type="submit" className="w-full bg-[#1a365d] text-white py-4 rounded font-bold hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2">
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                  <p className="text-[10px] text-slate-400 mt-4 text-center">
                    By submitting this form, you acknowledge that no advocate-client relationship is formed until a formal engagement letter is signed.
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
