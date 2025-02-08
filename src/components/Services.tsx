import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const services: Service[] = [
  {
    title: 'Regular Cleaning',
    description: "Weekly or bi-weekly cleaning services to maintain your home's cleanliness and comfort.",
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&h=300&fit=crop',
    icon: '🏠'
  },
  {
    title: 'Deep Cleaning',
    description: 'Thorough cleaning of every corner, perfect for spring cleaning or moving in/out.',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&h=300&fit=crop',
    icon: '✨'
  },
  {
    title: 'Window Cleaning',
    description: 'Professional window cleaning services for a crystal-clear view of the outside world.',
    image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&h=300&fit=crop',
    icon: '🪟'
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning services tailored to your needs. We ensure your space
            is not just clean, but healthy and comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 