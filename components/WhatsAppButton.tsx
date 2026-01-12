
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { FIRM_DETAILS } from '../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${FIRM_DETAILS.whatsapp}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-medium whitespace-nowrap">
        Chat with an Advocate
      </span>
    </button>
  );
};

export default WhatsAppButton;
