import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  testimonial: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="p-6">
        <Quote className="h-10 w-10 text-blue-100 mb-4" />
        <p className="text-gray-600 mb-6 italic">"{testimonial.testimonial}"</p>
        <div className="flex items-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;