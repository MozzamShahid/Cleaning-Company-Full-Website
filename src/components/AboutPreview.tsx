import Image from 'next/image';
import Link from 'next/link';

export const AboutPreview = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&h=800"
              alt="About Us Preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Professional Cleaning Services You Can Trust
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With years of experience in the cleaning industry, we pride ourselves on 
              delivering exceptional service and maintaining the highest standards of 
              cleanliness for your home or office.
            </p>
            <Link 
              href="/about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}; 