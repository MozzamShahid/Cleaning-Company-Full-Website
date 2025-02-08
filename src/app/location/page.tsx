import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Location() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Location</h1>
          <p className="text-lg text-gray-600 mb-4">
            We are located in the heart of the city, making it easy for us to reach you quickly and efficiently. Our central location allows us to serve a wide range of areas with ease.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our office is open from Monday to Friday, 8:00 AM to 6:00 PM, and on Saturdays from 9:00 AM to 4:00 PM. Feel free to visit us or contact us for any inquiries.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Address: 123 Clean Street, City
          </p>
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on the Map</h2>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112345678!2d-122.419415484681!3d37.77492927975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f0f0f0f%3A0x0f0f0f0f0f0f0f0f!2sYour%20Business%20Name!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={false}
                aria-hidden="false"
                tabIndex={0}
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 