import React, { useState } from 'react';
import { MapPin, Camera, Info, Send, CheckCircle } from 'lucide-react';

const ReportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    landmark: '',
    puppyCount: '',
    condition: '',
    details: '',
    canWait: 'yes',
    canHelp: 'no',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        landmark: '',
        puppyCount: '',
        condition: '',
        details: '',
        canWait: 'yes',
        canHelp: 'no',
      });
    }, 1500);
  };
  
  if (submitted) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your puppy report has been submitted successfully. Our team will contact you soon for further details.
            </p>
            <p className="text-gray-600 mb-6">
              Report Reference Number: <span className="font-semibold">PR-{Math.floor(100000 + Math.random() * 900000)}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setSubmitted(false)} 
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Report Another Puppy
              </button>
              <a 
                href="/emergency" 
                className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Emergency Contacts
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Report a Puppy in Need</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Found a stray puppy that needs help? Fill out this form and our team will respond as quickly as possible.
            For emergencies requiring immediate assistance, please call our helpline directly.
          </p>
          <a 
            href="/emergency" 
            className="inline-block mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Emergency Contacts
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl mb-1">Submit Report</h3>
                    <p className="text-blue-100">Fill in the details about the puppy's location and condition.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl mb-1">Confirmation</h3>
                    <p className="text-blue-100">You'll receive a confirmation call from our team.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl mb-1">Rescue</h3>
                    <p className="text-blue-100">Our team will be dispatched to help the puppy.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-700 rounded-lg">
                <h3 className="font-semibold mb-2">Already helped a puppy?</h3>
                <p className="text-blue-100 mb-4">
                  If you've already rescued a puppy and need support with care, treatment, or finding a home, please mention this in your report.
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (required)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address (optional)</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Puppy Location</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Exact Location (Address)</label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Full address where the puppy was found"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="landmark" className="block text-sm font-medium text-gray-700 mb-1">Nearest Landmark</label>
                    <input
                      type="text"
                      id="landmark"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="E.g., near Shiva Temple, opposite to Central Market, etc."
                    />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Puppy Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="puppyCount" className="block text-sm font-medium text-gray-700 mb-1">Number of Puppies</label>
                    <select
                      id="puppyCount"
                      name="puppyCount"
                      required
                      value={formData.puppyCount}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6+">6 or more</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">Puppy's Condition</label>
                    <select
                      id="condition"
                      name="condition"
                      required
                      value={formData.condition}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select</option>
                      <option value="critical">Critical (requires immediate attention)</option>
                      <option value="injured">Injured or sick</option>
                      <option value="abandoned">Abandoned but healthy</option>
                      <option value="uncertain">Not sure</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Please describe the puppies' appearance, behavior, any visible injuries, or other relevant information."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Can you wait with the puppy until help arrives?</label>
                    <div className="space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="canWait"
                          value="yes"
                          checked={formData.canWait === 'yes'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="canWait"
                          value="no"
                          checked={formData.canWait === 'no'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Can you provide temporary help or shelter?</label>
                    <div className="space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="canHelp"
                          value="yes"
                          checked={formData.canHelp === 'yes'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="canHelp"
                          value="no"
                          checked={formData.canHelp === 'no'}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photos (optional)</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <Camera className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Upload a file</span>
                          <input type="file" className="sr-only" multiple accept="image/*" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Info className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Note:</strong> Our team will try to respond as quickly as possible. Response times may vary based on location and available resources.
                        If this is an emergency situation, please call our emergency helpline directly.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`px-8 py-3 flex items-center justify-center rounded-md font-medium text-white ${
                      submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                    } transition-colors`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" /> Submit Report
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;