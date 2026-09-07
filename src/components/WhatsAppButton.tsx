import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/917300004325?text=Hello%20Acharya%20Ganesh,%20I%20have%20a%20question%20about%20the%20Building%20Blocks%20of%20Astrology%20course"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all cursor-pointer group"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="sr-only">Chat on WhatsApp</span>
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with Us
      </span>
    </a>
  );
};
