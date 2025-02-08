import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&h=800"
                alt="About Us"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-4">
                We are a professional cleaning service dedicated to making your home and office spaces cleaner and healthier. With years of experience, our team is committed to delivering exceptional service and maintaining the highest standards of cleanliness.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our mission is to provide reliable and efficient cleaning services that exceed our clients' expectations. We use eco-friendly products and advanced cleaning techniques to ensure a safe and healthy environment for you and your family.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our team is composed of highly trained professionals who are passionate about what they do. We believe in building long-term relationships with our clients based on trust and satisfaction.
              </p>
              <p className="text-lg text-gray-600">
                Thank you for choosing us as your trusted cleaning partner. We look forward to serving you!
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
              <li>Integrity and honesty in all our dealings.</li>
              <li>Commitment to quality and excellence.</li>
              <li>Respect for our clients and their spaces.</li>
              <li>Continuous improvement and innovation.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 