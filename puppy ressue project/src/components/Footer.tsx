import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint as Paw, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Paw className="h-8 w-8 text-orange-400" />
              <span className="ml-2 text-2xl font-bold">PuppyRescue</span>
            </div>
            <p className="text-blue-200 mb-4">
              Dedicated to providing free treatment for stray puppies across India. 
              Together we can make a difference for these innocent lives.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-blue-200 hover:text-orange-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="text-blue-200 hover:text-orange-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-blue-200 hover:text-orange-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-200 hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/centers" className="text-blue-200 hover:text-orange-400 transition-colors">Treatment Centers</Link>
              </li>
              <li>
                <Link to="/emergency" className="text-blue-200 hover:text-orange-400 transition-colors">Emergency Help</Link>
              </li>
              <li>
                <Link to="/care-tips" className="text-blue-200 hover:text-orange-400 transition-colors">Care Tips</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-blue-200 hover:text-orange-400 transition-colors">Volunteer</Link>
              </li>
              <li>
                <Link to="/donate" className="text-blue-200 hover:text-orange-400 transition-colors">Donate</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span>Emergency Helpline: <br />+91 000 000 0000</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span>help@puppyrescueindia.org</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-400 mr-3 mt-1 flex-shrink-0" />
                <span>524239 Animal Welfare Street, Kavali, Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Support Our Cause</h3>
            <p className="text-blue-200 mb-4">
              Your contribution can save many innocent lives. Help us provide medical care to stray puppies.
            </p>
            <Link 
              to="/donate" 
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow-md hover:bg-orange-600 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-blue-800 text-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} PuppyRescue India. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
            {' '} | {' '}
            <Link to="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;