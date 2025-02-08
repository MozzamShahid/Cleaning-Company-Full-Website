'use client';

import { FaWhatsapp } from 'react-icons/fa';

export const ContactSection = () => {
  const whatsappNumber = '+923001234567'; // Replace with your actual number

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Contact us directly via WhatsApp or email for any inquiries.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-colors duration-200"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp Us
          </a>
          <a
            href="mailto:info@cleaninghome.com"
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors duration-200"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}; 