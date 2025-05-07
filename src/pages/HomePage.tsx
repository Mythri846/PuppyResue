import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Heart, BookOpen, Users, Clipboard } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      testimonial: 'I found an injured puppy on the roadside and called PuppyRescue. They guided me to their nearest center and saved the puppy\'s life.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi',
      testimonial: 'The care tips helped me provide first aid to a stray puppy until help arrived. Now I volunteer with PuppyRescue every weekend!',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Bangalore',
      testimonial: 'Thanks to PuppyRescue, I was able to connect with a local vet who treated a litter of puppies in my neighborhood for free.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="pt-16">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Help Puppies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission is to provide free treatment and care for stray puppies across India. 
              Here's how we make a difference every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Free Treatment Centers</h3>
              <p className="text-gray-600 text-center">
                We operate free treatment centers across major Indian cities, providing medical care for stray puppies.
              </p>
              <div className="text-center mt-4">
                <Link to="/centers" className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Find Centers →
                </Link>
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Emergency Response</h3>
              <p className="text-gray-600 text-center">
                Our emergency response team is available 24/7 to rescue and provide immediate care to injured puppies.
              </p>
              <div className="text-center mt-4">
                <Link to="/emergency" className="inline-block text-orange-600 font-medium hover:text-orange-800 transition-colors">
                  Get Help →
                </Link>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Puppy Care Education</h3>
              <p className="text-gray-600 text-center">
                We provide guides and tips on how to care for stray puppies, including basic first aid and nutrition advice.
              </p>
              <div className="text-center mt-4">
                <Link to="/care-tips" className="inline-block text-green-600 font-medium hover:text-green-800 transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-purple-50 rounded-xl p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Volunteer Network</h3>
              <p className="text-gray-600 text-center">
                Join our network of volunteers who help rescue, transport, and care for puppies across India.
              </p>
              <div className="text-center mt-4">
                <Link to="/volunteer" className="inline-block text-purple-600 font-medium hover:text-purple-800 transition-colors">
                  Join Us →
                </Link>
              </div>
            </div>
            
            <div className="bg-red-50 rounded-xl p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clipboard className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Report a Puppy</h3>
              <p className="text-gray-600 text-center">
                Seen a stray puppy that needs help? Report it to us and we'll dispatch help as quickly as possible.
              </p>
              <div className="text-center mt-4">
                <Link to="/report" className="inline-block text-red-600 font-medium hover:text-red-800 transition-colors">
                  Report Now →
                </Link>
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Donations</h3>
              <p className="text-gray-600 text-center">
                Your contributions help us provide medical supplies, food, and expand our treatment centers.
              </p>
              <div className="text-center mt-4">
                <Link to="/donate" className="inline-block text-yellow-600 font-medium hover:text-yellow-800 transition-colors">
                  Donate →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impact Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Since our inception, we've made a real difference in the lives of stray puppies across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-700 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-blue-200">Puppies Treated</div>
            </div>
            
            <div className="text-center p-6 bg-blue-700 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-blue-200">Cities Covered</div>
            </div>
            
            <div className="text-center p-6 bg-blue-700 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-blue-200">Volunteers</div>
            </div>
            
            <div className="text-center p-6 bg-blue-700 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2">42</div>
              <div className="text-blue-200">Treatment Centers</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from people who have helped save stray puppies with our assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/success-stories" 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow-md hover:bg-blue-700 transition-colors"
            >
              Read More Stories
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Help Us Save More Puppies</h2>
            <p className="text-xl mb-8">
              Whether you can volunteer your time, report a puppy in need, or make a donation - every action helps save lives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/volunteer" 
                className="px-8 py-3 bg-white text-orange-600 rounded-full font-semibold shadow-md hover:bg-orange-50 transition-colors"
              >
                Become a Volunteer
              </Link>
              <Link 
                to="/donate" 
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;