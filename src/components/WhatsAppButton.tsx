'use client';

import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
  const whatsappNumber = '+923001234567'; // Replace with your actual number

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}; 