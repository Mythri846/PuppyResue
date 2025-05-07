import React, { useState } from 'react';
import { Search, MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';

interface Center {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
}

const TreatmentCentersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterState, setFilterState] = useState('');
  
  const centers: Center[] = [
    {
      id: 1,
      name: "PuppyRescue Kavali Center",
      address: "524239 Animal Care Street",
      city: "Kavali",
      state: "Andhra Pradesh",
      phone: "+91 000 000 0000",
      email: "kavali@puppyrescueindia.org",
      hours: "24 hours",
      image: "https://images.pexels.com/photos/1350591/pexels-photo-1350591.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Mumbai Puppy Shelter",
      address: "400001 Marine Drive",
      city: "Mumbai",
      state: "Maharashtra",
      phone: "+91 000 000 0001",
      email: "mumbai@puppyrescueindia.org",
      hours: "24 hours",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Bangalore Puppy Care",
      address: "560001 MG Road",
      city: "Bangalore",
      state: "Karnataka",
      phone: "+91 000 000 0002",
      email: "bangalore@puppyrescueindia.org",
      hours: "24 hours",
      image: "https://images.pexels.com/photos/2255564/pexels-photo-2255564.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      name: "Kolkata Animal Welfare",
      address: "700001 Park Street",
      city: "Kolkata",
      state: "West Bengal",
      phone: "+91 000 000 0003",
      email: "kolkata@puppyrescueindia.org",
      hours: "24 hours",
      image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      name: "Chennai Puppy Rescue",
      address: "600001 Mount Road",
      city: "Chennai",
      state: "Tamil Nadu",
      phone: "+91 000 000 0004",
      email: "chennai@puppyrescueindia.org",
      hours: "24 hours",
      image: "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      name: "Hyderabad Pet Clinic",
      address: "500001 Jubilee Hills",
      city: "Hyderabad",
      state: "Telangana",
      phone: "+91 000 000 0005",
      email: "hyderabad@puppyrescueindia.org",
      hours: "24 hours",
      image: "https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      name: "Jaipur Animal Shelter",
      address: "302001 Vaishali Nagar",
      city: "Jaipur",
      state: "Rajasthan",
      phone: "+91 000 000 0006",
      email: "jaipur@puppyrescueindia.org",
      hours: "8 AM - 8 PM",
      image: "https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      name: "Ahmedabad Puppy Care",
      address: "380001 SG Highway",
      city: "Ahmedabad",
      state: "Gujarat",
      phone: "+91 000 000 0007",
      email: "ahmedabad@puppyrescueindia.org",
      hours: "9 AM - 9 PM",
      image: "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const states = Array.from(new Set(centers.map(center => center.state))).sort();
  
  const filteredCenters = centers.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          center.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          center.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesState = filterState === '' || center.state === filterState;
    
    return matchesSearch && matchesState;
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Treatment Centers</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find free puppy treatment centers across India. All our centers provide medical care, vaccinations, 
            and other essential services for stray puppies at no cost.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Centers</label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  placeholder="Search by name, city or address..."
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">Filter by State</label>
              <select
                id="state"
                className="w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 py-2 px-3"
                value={filterState}
                onChange={(e) => setFilterState(e.target.value)}
              >
                <option value="">All States</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-end">
              <button 
                onClick={() => {setSearchTerm(''); setFilterState('');}}
                className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
        
        {/* Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCenters.length > 0 ? (
            filteredCenters.map(center => (
              <div key={center.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <img 
                  src={center.image} 
                  alt={center.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{center.name}</h2>
                  
                  <div className="flex items-start mt-4">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{center.address}</p>
                      <p className="text-gray-700">{center.city}, {center.state}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-3">
                    <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <a href={`tel:${center.phone}`} className="text-gray-700 hover:text-blue-600">{center.phone}</a>
                  </div>
                  
                  <div className="flex items-center mt-3">
                    <Mail className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <a href={`mailto:${center.email}`} className="text-gray-700 hover:text-blue-600">{center.email}</a>
                  </div>
                  
                  <div className="flex items-center mt-3">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{center.hours}</span>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={`https://www.google.com/maps/search/${encodeURIComponent(center.name + ' ' + center.address + ' ' + center.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <MapPin className="h-4 w-4 mr-2" /> Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-500">No treatment centers match your search criteria.</p>
              <button 
                onClick={() => {setSearchTerm(''); setFilterState('');}}
                className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View All Centers
              </button>
            </div>
          )}
        </div>
        
        {/* Info Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Our Treatment Centers</h2>
          <p className="text-gray-700 mb-4">
            All our treatment centers are staffed with qualified veterinarians and trained volunteers who specialize in puppy care. 
            Our services are completely free of charge and include:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
            <li>Emergency medical treatment</li>
            <li>Vaccinations and deworming</li>
            <li>Treatment for common ailments</li>
            <li>Nutritional support</li>
            <li>Shelter for recovering puppies</li>
            <li>Adoption services</li>
          </ul>
          <p className="text-gray-700">
            If you can't find a center near you, please contact our emergency helpline at <strong>+91 000 000 0000</strong> for assistance. 
            We also have a network of volunteer veterinarians who may be able to help in areas where we don't have physical centers.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <MapPin className="h-5 w-5 mr-2" /> View All Centers on Map
            </a>
            <a 
              href="/emergency" 
              className="flex items-center justify-center px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" /> Emergency Contacts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCentersPage;