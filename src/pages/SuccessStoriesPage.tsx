import React, { useState } from 'react';
import { Heart, Search, Filter } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  category: string;
}

const SuccessStoriesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  
  const stories: Story[] = [
    {
      id: 1,
      title: "Rescued from a Storm Drain",
      description: "A litter of five puppies was found trapped in a storm drain during heavy monsoon rains in Mumbai. Our rescue team worked for hours to safely extract each puppy. All five were treated for exposure and minor injuries, and have since been adopted into loving homes.",
      image: "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Mumbai, Maharashtra",
      date: "August 15, 2023",
      category: "rescue"
    },
    {
      id: 2,
      title: "Roadside Recovery",
      description: "Raja was found severely injured on a highway outside Delhi after being hit by a vehicle. Emergency responders stabilized him and transported him to our treatment center where he underwent surgery. After two months of rehabilitation, Raja has made a full recovery and now lives with one of our volunteers.",
      image: "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Delhi",
      date: "June 3, 2023",
      category: "medical"
    },
    {
      id: 3,
      title: "Abandoned Puppies Find a Home",
      description: "A box containing seven newborn puppies was found abandoned outside our Bangalore center. Our team provided round-the-clock care, bottle feeding and medical attention. Through our adoption program, all seven siblings were placed in permanent homes within the same neighborhood, and they still have regular playdates!",
      image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Bangalore, Karnataka",
      date: "March 22, 2023",
      category: "adoption"
    },
    {
      id: 4,
      title: "Malnourished to Thriving",
      description: "When Coco was found in Jaipur, she was severely malnourished and suffering from mange. Our veterinary team created a specialized treatment and nutrition plan. After six weeks of care, her transformation was remarkable. Coco is now healthy, her coat has grown back beautifully, and she's been adopted by a loving family.",
      image: "https://images.pexels.com/photos/2795881/pexels-photo-2795881.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Jaipur, Rajasthan",
      date: "May 11, 2023",
      category: "medical"
    },
    {
      id: 5,
      title: "Community Comes Together",
      description: "When a stray dog gave birth to nine puppies in a vacant lot in Chennai, local residents contacted us for help. We provided food, vaccinations, and medical care, while community members took turns monitoring the puppies. As they grew, we helped find homes for all nine puppies while spaying the mother and returning her to her familiar territory with ongoing care from the community.",
      image: "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Chennai, Tamil Nadu",
      date: "April 7, 2023",
      category: "community"
    },
    {
      id: 6,
      title: "From Pain to Playfulness",
      description: "Buddy was found with a severely infected paw in Kolkata. The infection was so advanced that we feared amputation might be necessary. Thanks to our skilled veterinary team and intensive antibiotic treatment, we were able to save his leg. Today, Buddy runs and plays like any other puppy and has become the beloved pet of a local doctor who treated him.",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Kolkata, West Bengal",
      date: "July 19, 2023",
      category: "medical"
    },
    {
      id: 7,
      title: "School Adoption Program Success",
      description: "Our educational outreach program at Delhi Public School resulted in an incredible initiative where students, with parental support, adopted 12 rescued puppies. The school also implemented an awareness program about responsible pet ownership and stray animal welfare that has become a model for other schools in the region.",
      image: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Delhi",
      date: "September 2, 2023",
      category: "adoption"
    },
    {
      id: 8,
      title: "Rescued from Construction Site",
      description: "A litter of puppies was discovered during the demolition of an old building in Hyderabad. Construction workers halted the project and called our emergency line. Our team safely extracted all six puppies and provided immediate care. The construction company later sponsored the complete medical treatment and care for all the puppies.",
      image: "https://images.pexels.com/photos/1662433/pexels-photo-1662433.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Hyderabad, Telangana",
      date: "October 12, 2023",
      category: "rescue"
    },
  ];
  
  const filteredStories = stories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          story.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          story.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === '' || story.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every puppy we save has a unique story of resilience and hope. These success stories
            showcase the impact of our work and the difference we're making in the lives of stray puppies across India.
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search success stories..."
                className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="w-full md:w-64">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <div className="px-3 py-2 bg-gray-100 border-r border-gray-300">
                  <Filter className="h-5 w-5 text-gray-500" />
                </div>
                <select
                  className="w-full px-3 py-2 focus:outline-none"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="rescue">Rescue Stories</option>
                  <option value="medical">Medical Recoveries</option>
                  <option value="adoption">Adoption Success</option>
                  <option value="community">Community Efforts</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map(story => (
              <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="relative h-48">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                      story.category === 'rescue' ? 'bg-red-100 text-red-800' :
                      story.category === 'medical' ? 'bg-blue-100 text-blue-800' :
                      story.category === 'adoption' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {story.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{story.location}</span>
                    <span className="mx-2">•</span>
                    <span>{story.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{story.description}</p>
                  
                  <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Read Full Story
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-xl text-gray-500">No stories match your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setFilterCategory('');}}
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View All Stories
            </button>
          </div>
        )}
        
        {/* Share Your Story Section */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Share Your Success Story</h2>
              <p className="text-gray-600 mb-6">
                Have you rescued a puppy or helped one through our programs? We'd love to hear your story! 
                Share your experience to inspire others and help us raise awareness about stray puppy rescue in India.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Submit Your Story
              </button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Happy puppy with person" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        
        {/* Impact Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-8">Our Impact Since Inception</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15,000+</div>
              <div className="text-blue-100">Puppies Rescued</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">9,500+</div>
              <div className="text-blue-100">Successful Adoptions</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25</div>
              <div className="text-blue-100">Cities Covered</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Volunteers</div>
            </div>
          </div>
          
          <div className="mt-10">
            <a 
              href="/donate" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full font-medium shadow-md hover:bg-blue-50 transition-colors"
            >
              <Heart className="h-5 w-5 mr-2" /> Support Our Mission
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;