
import React from 'react';
import { Link } from 'react-router-dom';
// Fixed missing Scale import
import { Briefcase, Home, Gavel, Users, FileText, Globe, Award, Shield, Landmark, Scale } from 'lucide-react';
import { PRACTICE_AREAS } from '../constants';

const PracticeAreas: React.FC = () => {
  const icons = {
    corporate: <Briefcase />,
    conveyancing: <Home />,
    "dispute-resolution": <Gavel />,
    "family-law": <Users />,
    employment: <FileText />,
    immigration: <Globe />
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#1a365d] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Practice Areas</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">
            Specialized legal expertise tailored to the unique regulatory environment of the Kenyan market.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRACTICE_AREAS.map((area) => (
              <div key={area.id} className="flex space-x-6 p-8 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="shrink-0">
                  <div className="bg-[#1a365d] text-[#d4af37] p-4 rounded-lg shadow-inner">
                    {icons[area.id as keyof typeof icons] || <Scale />}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a365d] mb-4">{area.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-slate-500 font-medium">
                    <li className="flex items-center"><Shield className="h-4 w-4 mr-2 text-[#d4af37]" /> LSK Regulated Services</li>
                    <li className="flex items-center"><Award className="h-4 w-4 mr-2 text-[#d4af37]" /> Expert Advisory</li>
                  </ul>
                  <Link 
                    to="/contact" 
                    className="inline-block bg-white border border-[#1a365d] text-[#1a365d] px-6 py-2 rounded font-bold hover:bg-[#1a365d] hover:text-white transition-all"
                  >
                    Discuss My Case
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Notice */}
      <section className="py-16 bg-[#d4af37]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Landmark className="h-12 w-12 text-[#d4af37] mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Other Specialized Services</h2>
          <p className="text-slate-700 leading-relaxed">
            In addition to our core practices, we provide advisory on <strong>Intellectual Property (KIPI)</strong>, 
            <strong>Tax Law (KRA Compliance)</strong>, and <strong>Fintech Regulation</strong>. 
            If you have a unique legal challenge, our team is equipped to research and resolve it.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
