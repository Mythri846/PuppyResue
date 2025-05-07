import React, { useState } from 'react';
import { Heart, CreditCard, Calendar, AlertCircle, DollarSign, Gift, RefreshCcw, CheckCircle } from 'lucide-react';

const DonationPage = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    message: '',
    anonymous: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const handleAmountClick = (value: string) => {
    setAmount(value);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [name]: val }));
  };
  
  const getSelectedAmount = () => {
    if (amount === 'custom') {
      return customAmount ? parseInt(customAmount) : 0;
    }
    return amount ? parseInt(amount) : 0;
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Donation!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your generous contribution of ₹{getSelectedAmount()} will help us provide care and treatment for stray puppies across India.
            </p>
            <p className="text-gray-600 mb-6">
              A receipt has been sent to your email. Your donation reference number is: <span className="font-semibold">DON-{Math.floor(100000 + Math.random() * 900000)}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/" 
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Return to Home
              </a>
              <a 
                href="/success-stories" 
                className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                See Success Stories
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support Our Mission</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your donations help us rescue, treat, and care for stray puppies across India. Every contribution, no matter how small, makes a significant difference in the lives of these innocent animals.
          </p>
        </div>
        
        {/* Impact Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">How Your Donation Helps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">₹500</h3>
                <p className="text-gray-600">
                  Provides vaccinations and deworming treatment for one puppy
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">₹2,000</h3>
                <p className="text-gray-600">
                  Covers emergency medical treatment for an injured puppy
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">₹5,000</h3>
                <p className="text-gray-600">
                  Supplies a month of food for 10 puppies at our shelter
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Donation Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Your Support Matters</h2>
              
              <div className="mb-8">
                <h3 className="font-semibold text-xl mb-2">Why Donate?</h3>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-red-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Save the lives of innocent puppies</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-red-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Help expand our reach to more cities</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-red-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Support our emergency response teams</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-5 w-5 text-red-300 mr-2 mt-1 flex-shrink-0" />
                    <span>Fund medical supplies and treatment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-2">Tax Benefits</h3>
                <p className="text-blue-100 mb-4">
                  All donations to PuppyRescue are eligible for tax deduction under Section 80G of the Income Tax Act in India.
                </p>
                <p className="text-blue-100">
                  You will receive an official receipt for tax purposes.
                </p>
              </div>
              
              <div className="mt-8 p-4 bg-blue-700 rounded-lg">
                <h3 className="font-semibold mb-2">Other Ways to Donate</h3>
                <p className="text-blue-100 mb-2">
                  For bank transfers or other donation methods, please contact:
                </p>
                <p className="text-blue-100">
                  donations@puppyrescueindia.org
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>
              
              <form onSubmit={handleSubmit}>
                {/* Donation Amount */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Donation Amount</h3>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['500', '1000', '2000', '5000', '10000', 'custom'].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleAmountClick(value)}
                        className={`py-2 rounded-md text-center transition-colors ${
                          amount === value 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {value === 'custom' ? 'Custom' : `₹${value}`}
                      </button>
                    ))}
                  </div>
                  
                  {amount === 'custom' && (
                    <div>
                      <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-1">Enter Amount (₹)</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">₹</span>
                        </div>
                        <input
                          type="number"
                          id="customAmount"
                          name="customAmount"
                          min="100"
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          className="pl-8 pr-3 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter amount"
                        />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Donation Type */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation Type</h3>
                  
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="donationType"
                        value="one-time"
                        checked={donationType === 'one-time'}
                        onChange={() => setDonationType('one-time')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">One-time Donation</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="donationType"
                        value="monthly"
                        checked={donationType === 'monthly'}
                        onChange={() => setDonationType('monthly')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">Monthly Donation</span>
                    </label>
                  </div>
                  
                  {donationType === 'monthly' && (
                    <div className="mt-2 p-3 bg-blue-50 rounded-md text-sm text-blue-700">
                      <div className="flex">
                        <RefreshCcw className="h-5 w-5 mr-2 flex-shrink-0" />
                        <p>
                          Your card will be charged ₹{getSelectedAmount()} on the same date each month until canceled. You can cancel anytime from your account.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Donor Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Donor Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
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
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Payment Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Information</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <div className="flex items-center mb-4">
                      <CreditCard className="h-6 w-6 text-gray-500 mr-2" />
                      <h4 className="font-semibold text-gray-700">Credit/Debit Card</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          required
                          value={formData.cardName}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          required
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                          <input
                            type="text"
                            id="expiry"
                            name="expiry"
                            required
                            placeholder="MM/YY"
                            maxLength={5}
                            value={formData.expiry}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            required
                            placeholder="123"
                            maxLength={4}
                            value={formData.cvv}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          This is a secure, encrypted payment. Your card information is protected.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Information */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Add a message or dedication..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="anonymous"
                        checked={formData.anonymous}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-700">Make my donation anonymous</span>
                    </label>
                  </div>
                </div>
                
                {/* Donation Summary */}
                <div className="bg-gray-50 p-4 rounded-md mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Donation Summary</h3>
                  
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Donation Amount:</span>
                    <span className="font-medium">₹{getSelectedAmount()}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Donation Type:</span>
                    <span className="font-medium capitalize">{donationType}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 text-lg font-semibold">
                    <span>Total:</span>
                    <span>₹{getSelectedAmount()}</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!amount || (amount === 'custom' && !customAmount) || submitting}
                    className={`px-8 py-3 flex items-center justify-center rounded-md font-medium text-white ${
                      !amount || (amount === 'custom' && !customAmount) || submitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } transition-colors`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Heart className="h-5 w-5 mr-2" /> Complete Donation
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Corporate Giving */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Corporate Giving Programs</h2>
          
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <p className="text-gray-600 mb-6">
                We partner with corporations across India to make a bigger impact for stray puppies. Corporate giving can include:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Gift className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Matching gift programs</span>
                </div>
                <div className="flex items-start">
                  <Gift className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Sponsorship opportunities</span>
                </div>
                <div className="flex items-start">
                  <Gift className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Employee volunteer programs</span>
                </div>
                <div className="flex items-start">
                  <Gift className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">CSR initiatives</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                To learn more about our corporate giving programs, please contact our corporate partnerships team.
              </p>
              
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Contact Corporate Team
              </button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/2834988/pexels-photo-2834988.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Corporate partnership" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;