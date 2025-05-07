import React, { useState } from 'react';
import { Clipboard, Droplets, Coffee, Utensils, Thermometer, Heart, AlertTriangle, Check } from 'lucide-react';

const CareTipsPage = () => {
  const [activeTab, setActiveTab] = useState('basic');
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicCare />;
      case 'feeding':
        return <FeedingGuide />;
      case 'health':
        return <HealthCare />;
      case 'firstaid':
        return <FirstAid />;
      default:
        return <BasicCare />;
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Puppy Care Guidelines</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn how to provide proper care for stray puppies with our comprehensive guides. 
            These tips can help save lives while waiting for professional help.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <button
            className={`px-4 py-2 text-sm font-medium mr-2 ${
              activeTab === 'basic'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('basic')}
          >
            <div className="flex items-center">
              <Clipboard className="h-5 w-5 mr-2" />
              <span>Basic Care</span>
            </div>
          </button>
          
          <button
            className={`px-4 py-2 text-sm font-medium mr-2 ${
              activeTab === 'feeding'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('feeding')}
          >
            <div className="flex items-center">
              <Utensils className="h-5 w-5 mr-2" />
              <span>Feeding Guide</span>
            </div>
          </button>
          
          <button
            className={`px-4 py-2 text-sm font-medium mr-2 ${
              activeTab === 'health'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('health')}
          >
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              <span>Health Care</span>
            </div>
          </button>
          
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'firstaid'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('firstaid')}
          >
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <span>First Aid</span>
            </div>
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          {renderTabContent()}
        </div>
        
        {/* Downloadable Resources */}
        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Downloadable Resources</h2>
          <p className="text-gray-600 mb-6">
            Download our care guides to have them available offline. Share them with others who want to help stray puppies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="#" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Puppy Care Guide</h3>
              <p className="text-gray-600 mb-4">Comprehensive guide covering all aspects of puppy care for beginners.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600">PDF, 4.2 MB</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Download</button>
              </div>
            </a>
            
            <a href="#" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency First Aid Poster</h3>
              <p className="text-gray-600 mb-4">Printable poster with emergency care steps for injured puppies.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600">PDF, 2.8 MB</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Download</button>
              </div>
            </a>
            
            <a href="#" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Feeding Chart by Age</h3>
              <p className="text-gray-600 mb-4">Detailed chart showing feeding requirements based on puppy's age.</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600">PDF, 1.5 MB</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Download</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const BasicCare = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Puppy Care</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Creating a Safe Environment</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Provide a quiet, warm space away from loud noises</li>
            <li>• Use a box lined with soft, clean towels or blankets</li>
            <li>• Keep the area clean and sanitized</li>
            <li>• Ensure the space is escape-proof and away from potential hazards</li>
            <li>• Protect from extreme temperatures - not too hot or cold</li>
          </ul>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Handling Puppies</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Always wash hands before and after handling puppies</li>
            <li>• Support their entire body, especially the head and neck</li>
            <li>• Be gentle and avoid sudden movements</li>
            <li>• Limit handling of very young puppies (under 3 weeks)</li>
            <li>• Approach slowly and speak softly to avoid frightening them</li>
          </ul>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Age-Specific Care Needs</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feeding
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Environmental Needs
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Special Considerations
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  0-2 weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Puppy milk replacer every 2-3 hours
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Maintain 85-90°F (29-32°C), high humidity
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Stimulate elimination after feeding, minimal handling
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  2-4 weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Puppy milk replacer every 4-6 hours
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Maintain 80-85°F (27-29°C)
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Begin weaning process around 3-4 weeks
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  4-8 weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Gruel/soft puppy food 4 times daily
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Maintain 75-80°F (24-27°C)
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Socialization begins, can start potty training
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  8+ weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Puppy food 3-4 times daily
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Normal room temperature
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Regular vet check-ups, begin vaccinations
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-orange-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-orange-700 mb-3">Sanitation & Hygiene</h3>
        <p className="text-gray-700 mb-4">
          Proper sanitation is crucial for keeping puppies healthy and preventing disease:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• Clean bedding daily or whenever soiled</li>
          <li>• Use mild, non-toxic cleaners for the puppy's area</li>
          <li>• Wash food and water bowls daily with hot, soapy water</li>
          <li>• Keep feeding equipment sanitized</li>
          <li>• Wash your hands thoroughly before and after handling puppies</li>
          <li>• Keep puppy's area separate from other animals until vaccinated</li>
        </ul>
        <div className="mt-4 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-400">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Important:</strong> Young puppies are highly susceptible to disease before their immune systems develop fully. 
                Maintaining strict hygiene is essential for their survival.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeedingGuide = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Puppy Feeding Guide</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Feed Stray Puppies</h3>
          
          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-green-700 mb-2">Recommended Foods by Age</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>0-3 weeks:</strong> Puppy milk replacer only (never cow's milk)
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>3-4 weeks:</strong> Puppy milk replacer mixed with soft puppy food to create a gruel
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>4-6 weeks:</strong> Moistened puppy food with decreasing amount of milk replacer
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>6-8 weeks:</strong> Moistened puppy food, gradually transitioning to dry kibble
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>8+ weeks:</strong> High-quality puppy food (dry or wet)
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h4 className="font-semibold text-red-700 mb-2">Foods to Avoid</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Never give:</strong> Cow's milk (causes diarrhea)
                </div>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Never give:</strong> Adult dog food (wrong nutrient balance)
                </div>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Never give:</strong> Table scraps (can cause digestive issues)
                </div>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Never give:</strong> Chocolate, onions, grapes, raisins (toxic)
                </div>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Never give:</strong> Bones (choking hazard)
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Feeding Techniques</h3>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-blue-700 mb-2">Bottle Feeding (0-3 weeks)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Use only puppy milk replacer at body temperature (99-101°F)</li>
              <li>• Feed in a prone position, never on back (aspiration risk)</li>
              <li>• Use appropriate size bottle/nipple for tiny mouths</li>
              <li>• Feed every 2-3 hours, including overnight</li>
              <li>• Gently stimulate elimination after feeding (warm, damp cloth)</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6">
            <h4 className="font-semibold text-purple-700 mb-2">Weaning (3-8 weeks)</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Start with milk replacer mixed into mashed puppy food</li>
              <li>• Gradually decrease liquid while increasing solid food</li>
              <li>• Use a shallow dish that's stable and won't tip</li>
              <li>• Be patient - weaning is messy and takes time</li>
              <li>• By 8 weeks, puppies should be fully weaned to solid food</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Feeding Schedule</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Feeding Frequency
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount Per Feeding
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type of Food
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  0-1 week
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Every 2-3 hours (including overnight)
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  15-35 ml per 100g body weight per day
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Puppy milk replacer only
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  1-2 weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Every 3-4 hours (including overnight)
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  80-90 ml per 100g body weight per day
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Puppy milk replacer only
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  2-3 weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Every 4-5 hours
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Approximately same as 1-2 weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Puppy milk replacer only
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  3-4 weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  4 times daily
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Start weaning to solid food
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Milk replacer + puppy food gruel
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  4-6 weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  4 times daily
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Gradually increase solid food
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Moistened puppy food
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  6-8 weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  3-4 times daily
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  See package guidelines based on weight
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Moistened to dry puppy food
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  8+ weeks
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  3 times daily
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  See package guidelines based on weight
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Dry puppy food
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-yellow-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-yellow-700 mb-3">Hydration</h3>
        <p className="text-gray-700 mb-4">
          Proper hydration is critical for puppy health, especially in India's climate:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li>• Always provide fresh, clean water for puppies over 4 weeks</li>
          <li>• Change water multiple times daily, especially in hot weather</li>
          <li>• Use shallow containers that can't be tipped over</li>
          <li>• For puppies under 4 weeks, hydration comes from milk replacer</li>
          <li>• Watch for signs of dehydration: dry gums, lethargy, skin tenting</li>
        </ul>
        <div className="mt-4 p-4 bg-orange-100 rounded-lg">
          <p className="text-sm text-orange-700">
            <strong>Tip:</strong> During summer months, puppies need extra water due to India's high temperatures. 
            Consider adding ice cubes to water bowls to keep water cool.
          </p>
        </div>
      </div>
    </div>
  );
};

const HealthCare = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Puppy Health Care</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Vaccinations</h3>
          <p className="text-gray-700 mb-4">
            Vaccinations are essential to protect puppies from deadly diseases. For stray puppies:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• First vaccinations typically start at 6-8 weeks of age</li>
            <li>• Includes protection against parvovirus, distemper, and hepatitis</li>
            <li>• Rabies vaccine is typically given at 12-16 weeks</li>
            <li>• Follow-up boosters are required for full immunity</li>
            <li>• Visit our treatment centers for free vaccination services</li>
          </ul>
          <div className="mt-4 p-4 bg-blue-100 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Important:</strong> Until fully vaccinated, keep puppies away from areas where other dogs frequent to prevent disease exposure.
            </p>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-3">Parasite Control</h3>
          <p className="text-gray-700 mb-4">
            Stray puppies often have parasites that need to be addressed:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Deworming should begin at around 2-3 weeks of age</li>
            <li>• Repeat deworming every 2 weeks until 12 weeks, then monthly</li>
            <li>• External parasites (fleas, ticks) require appropriate treatment</li>
            <li>• Never use adult dog parasite treatments on puppies</li>
            <li>• Our centers provide free deworming and parasite treatment</li>
          </ul>
          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <p className="text-sm text-green-700">
              <strong>Signs of parasites:</strong> Pot-bellied appearance, diarrhea, vomiting, visible worms in stool, scooting, excessive scratching.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Health Issues in Stray Puppies</h3>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Condition
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Signs & Symptoms
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Response
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  When to Seek Help
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Parvovirus
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Severe diarrhea (often bloody), vomiting, lethargy, fever, dehydration
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Isolate from other dogs, keep warm and hydrated if possible
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Immediate emergency
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Mange
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Hair loss, crusty skin, intense itching, redness
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Isolate, keep warm, do not use over-the-counter treatments
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Within 24 hours
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Respiratory Infection
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Coughing, sneezing, nasal discharge, difficult breathing
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Keep warm, isolated, in humid environment if possible
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">
                    Within 12-24 hours
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Dehydration
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Dry gums, lethargy, sunken eyes, skin doesn't return when pinched
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Offer small amounts of water, keep cool in hot weather
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Immediate emergency
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Malnutrition
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Visible ribs/bones, weakness, dull coat, lethargy
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Offer appropriate food for age (see feeding guide)
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Within 24-48 hours
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-3">When to Seek Veterinary Care</h3>
        <p className="text-gray-700 mb-4">
          Always seek veterinary care immediately if you notice:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Difficulty breathing or rapid breathing</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Severe diarrhea or vomiting (especially if blood is present)</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Seizures or collapse</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Trauma or injuries</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Severe lethargy or unresponsiveness</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">Refusal to eat for more than 12 hours (for puppies over 3 weeks)</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="/emergency" 
            className="inline-block px-6 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition-colors"
          >
            View Emergency Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

const FirstAid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency First Aid for Puppies</h2>
      
      <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div className="ml-3">
            <p className="text-base text-red-700">
              <strong>Important:</strong> This first aid guide is meant to help you stabilize a puppy until professional veterinary help is available. 
              Always seek veterinary care as soon as possible in an emergency situation.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
              <span className="text-red-600 font-bold">1</span>
            </div>
            Bleeding
          </h3>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-gray-900 mb-2">What to Do:</h4>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Apply direct pressure with a clean cloth or gauze</li>
              <li>• Hold pressure for at least 5-10 minutes</li>
              <li>• Elevate the injured area if possible</li>
              <li>• For severe bleeding, apply pressure to the supplying artery</li>
              <li>• Once bleeding is controlled, bandage the wound</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900 mb-2">When to Seek Help:</h4>
            <p className="text-gray-700">
              Seek immediate veterinary help for:
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>• Bleeding that doesn't stop after 10 minutes of pressure</li>
              <li>• Arterial bleeding (pulsing, bright red blood)</li>
              <li>• Large or deep wounds</li>
              <li>• Wounds on the chest or abdomen</li>
              <li>• Any significant blood loss</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-2">
              <span className="text-orange-600 font-bold">2</span>
            </div>
            Heat Stroke
          </h3>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-gray-900 mb-2">What to Do:</h4>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Move the puppy to a cool, shaded area immediately</li>
              <li>• Wet the puppy with room temperature water (not cold)</li>
              <li>• Place a fan near the puppy if available</li>
              <li>• Once temperature begins to drop, stop active cooling</li>
              <li>• Offer small amounts of water if the puppy is conscious</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900 mb-2">When to Seek Help:</h4>
            <p className="text-gray-700">
              Seek immediate veterinary help for:
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>• All cases of suspected heat stroke</li>
              <li>• Symptoms: heavy panting, bright red gums, vomiting, collapse</li>
              <li>• Even if the puppy seems to recover, internal damage may have occurred</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
              <span className="text-yellow-600 font-bold">3</span>
            </div>
            Fractures or Severe Lameness
          </h3>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-gray-900 mb-2">What to Do:</h4>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Minimize movement to prevent further injury</li>
              <li>• Do not attempt to realign or set the bone</li>
              <li>• Gently place the puppy on a flat, firm surface for transport</li>
              <li>• If transport is delayed, you can apply a temporary splint</li>
              <li>• For open fractures, cover wound with clean cloth</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900 mb-2">When to Seek Help:</h4>
            <p className="text-gray-700">
              Seek immediate veterinary help for:
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>• Any suspected fracture or severe lameness</li>
              <li>• Open fractures (bone visible)</li>
              <li>• Significant pain or inability to use a limb</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
              <span className="text-green-600 font-bold">4</span>
            </div>
            Choking
          </h3>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-gray-900 mb-2">What to Do:</h4>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Look in the mouth and remove any visible obstruction</li>
              <li>• For small puppies, hold upside down with head facing downward</li>
              <li>• Apply gentle pressure below the ribcage</li>
              <li>• If the puppy is unconscious, sweep the mouth and perform chest thrusts</li>
              <li>• Never perform blind finger sweeps as it may push object further</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900 mb-2">When to Seek Help:</h4>
            <p className="text-gray-700">
              Seek immediate veterinary help:
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>• If object cannot be removed</li>
              <li>• If the puppy loses consciousness</li>
              <li>• Even after successful removal if any distress persists</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <span className="text-blue-600 font-bold">5</span>
            </div>
            Seizures
          </h3>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-gray-900 mb-2">What to Do:</h4>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Keep calm and note the time the seizure started</li>
              <li>• Clear the area of objects that could hurt the puppy</li>
              <li>• Do not put your hands near the puppy's mouth</li>
              <li>• Do not restrain the puppy during a seizure</li>
              <li>• After the seizure, keep the puppy warm and quiet</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900 mb-2">When to Seek Help:</h4>
            <p className="text-gray-700">
              Seek immediate veterinary help:
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>• For any seizure in a puppy (this is always an emergency)</li>
              <li>• If the seizure lasts more than 2-3 minutes</li>
              <li>• If multiple seizures occur</li>
              <li>• If the puppy doesn't fully recover after the seizure</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
              <span className="text-purple-600 font-bold">6</span>
            </div>
            Poisoning
          </h3>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-gray-900 mb-2">What to Do:</h4>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Identify the poison if possible (keep packaging)</li>
              <li>• Remove the puppy from the source of poison</li>
              <li>• Do not induce vomiting unless instructed by a vet</li>
              <li>• If skin exposure, wash with mild soap and water</li>
              <li>• If eye exposure, flush with room temperature water</li>
            </ul>
            
            <h4 className="font-semibold text-gray-900 mb-2">When to Seek Help:</h4>
            <p className="text-gray-700">
              Seek immediate veterinary help:
            </p>
            <ul className="space-y-1 text-gray-700">
              <li>• For all cases of suspected poisoning</li>
              <li>• Common signs: vomiting, drooling, seizures, lethargy, diarrhea</li>
              <li>• Bring the suspected poison packaging if available</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold text-blue-700 mb-4">First Aid Kit for Puppies</h3>
        <p className="text-gray-700 mb-6">
          Having a basic first aid kit ready can help you respond quickly in an emergency. 
          Here's what to include in your puppy first aid kit:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Bandaging Supplies</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Gauze pads and rolls</li>
              <li>• Non-stick bandages</li>
              <li>• Adhesive tape</li>
              <li>• Cotton balls</li>
              <li>• Elastic bandage</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Tools</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Blunt-tipped scissors</li>
              <li>• Tweezers</li>
              <li>• Digital thermometer</li>
              <li>• Eyedropper or syringe</li>
              <li>• Small flashlight</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Cleaning & Treatment</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Saline solution</li>
              <li>• Antiseptic wipes</li>
              <li>• Betadine solution</li>
              <li>• Antibiotic ointment</li>
              <li>• Sterile water</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Transport & Support</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Small towel or blanket</li>
              <li>• Cardboard for emergency splint</li>
              <li>• Small pet carrier</li>
              <li>• Hot water bottle (heat support)</li>
              <li>• Instant cold pack</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Medications & Fluids</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Puppy milk replacer</li>
              <li>• Oral rehydration solution</li>
              <li>• Activated charcoal</li>
              <li>• Styptic powder (for nail bleeding)</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Important Information</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• List of emergency phone numbers</li>
              <li>• First aid manual for pets</li>
              <li>• PuppyRescue emergency contact card</li>
              <li>• Directions to nearest vet facilities</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8">
          <a 
            href="/emergency" 
            className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
          >
            View Emergency Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareTipsPage;