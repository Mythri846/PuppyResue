import React from 'react';
import { Phone, AlertTriangle, MapPin, Clock, MessageSquare, ThumbsUp } from 'lucide-react';

const EmergencyPage = () => {
  const emergencyContacts = [
    {
      id: 1,
      region: "Delhi-NCR",
      phone: "+91 98765 43210",
      altPhone: "+91 98765 43211",
      available: "24/7"
    },
    {
      id: 2,
      region: "Mumbai & Maharashtra",
      phone: "+91 97865 54321",
      altPhone: "+91 97865 54322",
      available: "24/7"
    },
    {
      id: 3,
      region: "Bangalore & Karnataka",
      phone: "+91 94321 87654",
      altPhone: "+91 94321 87655",
      available: "24/7"
    },
    {
      id: 4,
      region: "Chennai & Tamil Nadu",
      phone: "+91 95678 12345",
      altPhone: "+91 95678 12346",
      available: "24/7"
    },
    {
      id: 5,
      region: "Kolkata & West Bengal",
      phone: "+91 98712 34567",
      altPhone: "+91 98712 34568",
      available: "24/7"
    },
    {
      id: 6,
      region: "Hyderabad & Telangana",
      phone: "+91 91234 56789",
      altPhone: "+91 91234 56790",
      available: "24/7"
    },
    {
      id: 7,
      region: "Other Regions",
      phone: "+91 99999 00000",
      altPhone: "+91 99999 00001",
      available: "24/7"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-red-600 text-white rounded-xl p-8 md:p-12 mb-12 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Emergency Puppy Rescue</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            If you've found an injured or sick stray puppy that needs immediate help, contact our emergency team right away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+919876543210" 
              className="flex items-center justify-center px-8 py-3 bg-white text-red-600 rounded-full font-semibold text-xl shadow-lg hover:bg-red-50 transition-colors w-full sm:w-auto"
            >
              <Phone className="w-6 h-6 mr-2" /> +91 98765 43210
            </a>
            <a 
              href="#contact-list" 
              className="px-8 py-3 bg-red-700 text-white rounded-full font-semibold shadow-lg hover:bg-red-800 transition-colors w-full sm:w-auto"
            >
              View All Emergency Contacts
            </a>
          </div>
        </div>

        {/* Emergency Instructions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What To Do When You Find an Injured Puppy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-700 mb-3">1. Ensure Safety First</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Approach the puppy calmly and slowly</li>
                <li>• Be cautious as injured animals may bite out of fear</li>
                <li>• If possible, wear gloves when handling the puppy</li>
                <li>• Move the puppy to a safe location away from traffic</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-yellow-700 mb-3">2. Check for Injuries</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Look for visible wounds, bleeding, or limping</li>
                <li>• Check if the puppy is responsive and alert</li>
                <li>• Notice any difficulty breathing</li>
                <li>• Do not feed or give water if the puppy appears severely injured</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-700 mb-3">3. Provide Temporary Shelter</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Place the puppy in a cardboard box lined with a soft cloth</li>
                <li>• Keep the puppy warm, especially in cold weather</li>
                <li>• Keep the environment quiet and stress-free</li>
                <li>• Avoid exposing the puppy to other animals</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">4. Contact Emergency Help</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Call our emergency helpline immediately</li>
                <li>• Provide exact location details</li>
                <li>• Describe the puppy's condition and injuries</li>
                <li>• Stay with the puppy until help arrives if possible</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">5. Basic First Aid (If Needed)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• For bleeding: Apply gentle pressure with a clean cloth</li>
                <li>• For overheating: Move to shade and offer small amounts of water</li>
                <li>• Do not give human medication to puppies</li>
                <li>• Do not attempt to set broken bones</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">6. Transportation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Use a secure box or carrier for transport</li>
                <li>• Drive carefully to avoid sudden movements</li>
                <li>• Keep the vehicle at a comfortable temperature</li>
                <li>• If you can't transport, wait for our rescue team</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Emergency Contacts */}
        <div id="contact-list" className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Emergency Contacts</h2>
          <p className="text-gray-600 mb-6">
            Our emergency teams are available 24/7 across major regions in India. Contact the helpline closest to your location for fastest response.
          </p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Region
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Primary Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Alternate Contact
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Availability
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Call Now
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {emergencyContacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {contact.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {contact.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {contact.altPhone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {contact.available}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href={`tel:${contact.phone}`} className="text-blue-600 hover:text-blue-900 flex items-center justify-end">
                        <Phone className="h-4 w-4 mr-1" /> Call
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* What Happens Next */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens After You Call Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Your Call</h3>
              <p className="text-gray-600">
                Our trained team will answer your call, gather information about the puppy's condition and your location.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Dispatch</h3>
              <p className="text-gray-600">
                We dispatch the nearest rescue team to your location. In urgent cases, we may connect you with the closest veterinarian.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Rescue</h3>
              <p className="text-gray-600">
                Our team arrives to assess the puppy's condition, provides immediate first aid, and transports to a treatment center.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Treatment</h3>
              <p className="text-gray-600">
                The puppy receives full medical care at our center. We'll keep you updated on their progress if you wish.
              </p>
            </div>
          </div>
        </div>
        
        {/* Emergency App Download */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl overflow-hidden">
          <div className="md:flex">
            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Download Our Emergency App</h2>
              <p className="mb-6">
                Get faster response with our mobile app. Report emergencies with one tap, send photos, and track rescue team's arrival.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center">
                  Download on App Store
                </a>
                <a href="#" className="bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center">
                  Get it on Google Play
                </a>
              </div>
            </div>
            <div className="md:w-1/3 bg-orange-400 p-6 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/6896179/pexels-photo-6896179.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Emergency App" 
                className="max-h-64 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;