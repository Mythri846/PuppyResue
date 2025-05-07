import React, { useState } from 'react';
import { UserPlus, Car, Heart, Clock, CheckCircle, Clipboard, Phone, MapPin } from 'lucide-react';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    age: '',
    occupation: '',
    experience: '',
    availability: '',
    activities: [] as string[],
    transport: '',
    motivation: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({
        ...prev,
        activities: [...prev.activities, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        activities: prev.activities.filter(activity => activity !== value)
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };
  
  if (submitted) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Volunteering!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your application has been submitted successfully. Our volunteer coordinator will contact you within 48 hours to discuss the next steps.
            </p>
            <p className="text-gray-600 mb-8">
              Volunteer Reference Number: <span className="font-semibold">VOL-{Math.floor(100000 + Math.random() * 900000)}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Return to Home
              </a>
              <a 
                href="/donate" 
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                Support Our Cause
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Become a Volunteer</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our volunteers are the backbone of PuppyRescue. Join our team to help save and care for stray puppies across India.
            No experience needed - just a compassionate heart and willingness to help!
          </p>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Volunteer With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Make a Difference</h3>
              <p className="text-gray-600 text-center">
                Your time and effort directly save lives and improve the welfare of countless stray puppies.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clipboard className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Learn New Skills</h3>
              <p className="text-gray-600 text-center">
                Gain valuable experience in animal care, veterinary assistance, community outreach, and more.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Join a Community</h3>
              <p className="text-gray-600 text-center">
                Connect with like-minded animal lovers who share your passion for helping stray animals.
              </p>
            </div>
          </div>
        </div>
        
        {/* Volunteer Roles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Volunteer Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">On-Field Volunteers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Rescue Team:</strong> Help rescue puppies from dangerous situations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Transport Volunteers:</strong> Drive puppies to treatment centers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Feeding Program:</strong> Distribute food to stray puppies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Veterinary Assistants:</strong> Help vets during treatment and procedures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Temporary Fosters:</strong> Provide temporary homes for puppies</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Support Volunteers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Social Media:</strong> Help manage our online presence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Fundraising:</strong> Organize events and campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Education & Awareness:</strong> Conduct workshops and outreach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Helpline Operators:</strong> Answer calls and coordinate rescues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Administrative Support:</strong> Help with paperwork and organization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Volunteer Application Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Application Process</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl mb-1">Application</h3>
                    <p className="text-blue-100">Fill out and submit the volunteer application form.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl mb-1">Interview</h3>
                    <p className="text-blue-100">Brief phone interview with our volunteer coordinator.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl mb-1">Orientation</h3>
                    <p className="text-blue-100">Attend a volunteer orientation and training session.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl mb-1">Placement</h3>
                    <p className="text-blue-100">Get matched with volunteer opportunities based on your skills and interests.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-700 rounded-lg">
                <h3 className="font-semibold mb-2">Have questions?</h3>
                <p className="text-blue-100 mb-4">
                  If you have any questions about volunteering, please contact our volunteer coordinator.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-300 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Application Form</h2>
              
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      required
                      min="18"
                      max="100"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
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
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Volunteer Preferences</h3>
                
                <div className="grid grid-cols-1 gap-6 mb-8">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Previous Experience with Animals (if any)</label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe any previous experience working with animals, particularly puppies or dogs."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Activities you're interested in (select all that apply)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="rescue"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Puppy Rescue</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="transport"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Transportation</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="feeding"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Feeding Program</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="vet-assistant"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Veterinary Assistant</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="foster"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Fostering</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="social-media"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Social Media</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="fundraising"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Fundraising</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="education"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Education & Awareness</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="helpline"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Helpline Operator</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="activities"
                          value="admin"
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-700">Administrative Support</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                    <select
                      id="availability"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select</option>
                      <option value="weekends">Weekends only</option>
                      <option value="weekdays">Weekdays only</option>
                      <option value="evenings">Evenings only</option>
                      <option value="flexible">Flexible schedule</option>
                      <option value="oncall">On-call for emergencies</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="transport" className="block text-sm font-medium text-gray-700 mb-1">Do you have your own transportation?</label>
                    <select
                      id="transport"
                      name="transport"
                      required
                      value={formData.transport}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select</option>
                      <option value="car">Yes - Car/Jeep</option>
                      <option value="motorcycle">Yes - Motorcycle/Scooter</option>
                      <option value="bicycle">Yes - Bicycle</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer with PuppyRescue?</label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows={4}
                      required
                      value={formData.motivation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us why you're interested in helping stray puppies and what you hope to contribute as a volunteer."
                    ></textarea>
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
                        <UserPlus className="h-5 w-5 mr-2" /> Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Volunteer Testimonials */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Volunteer Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Volunteer Amit" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Amit Sharma</h3>
                  <p className="text-sm text-gray-500">Mumbai, Volunteer since 2023</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Volunteering with PuppyRescue has been the most rewarding experience of my life. Seeing the transformation in these puppies from scared and sick to healthy and playful is incredible. I've learned so much and made lifelong friends."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Volunteer Priya" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Priya Patel</h3>
                  <p className="text-sm text-gray-500">Delhi, Volunteer since 2022</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I started as a weekend volunteer helping with the feeding program, and now I coordinate our entire social media presence. PuppyRescue gave me the opportunity to use my skills to help animals in need while also developing new abilities."
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Volunteer Rahul" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Rahul Verma</h3>
                  <p className="text-sm text-gray-500">Bangalore, Volunteer since 2021</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a transport volunteer, I've helped rescue over 200 puppies in the last year. Every rescue is different, but the feeling of knowing you've saved a life never changes. The team is supportive and the work is incredibly fulfilling."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;