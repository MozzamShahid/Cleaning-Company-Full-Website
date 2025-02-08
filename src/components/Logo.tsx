import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Image
        src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=150&h=60&fit=crop&crop=edges"
        alt="CleanHome Logo"
        width={150}
        height={60}
        className="h-12 w-auto"
      />
    </div>
  );
}; 