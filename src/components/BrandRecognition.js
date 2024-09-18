import React from 'react';

// Replace these with actual image paths or URLs
import brand1 from '../assets/Brand1.jpg';
import brand2 from '../assets/Brand2.png';
import brand3 from '../assets/Brand3.png';
import brand4 from '../assets/Brand4.png';

const brands = [
  { name: 'Brand 1', logo: brand1 },
  { name: 'Brand 2', logo: brand2 },
  { name: 'Brand 3', logo: brand3 },
  { name: 'Brand 4', logo: brand4 },
];

const BrandRecognition = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Recognized By</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center">
              <img src={brand.logo} alt={brand.name} className="h-16 w-auto mb-2" />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandRecognition;
