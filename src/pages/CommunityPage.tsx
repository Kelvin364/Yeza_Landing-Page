import React from 'react';
import { Users, MessageSquare, Calendar, MapPin } from 'lucide-react';
import TeamSection from '../components/TeamSection';

const CommunityPage: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Hydroponic Basics Workshop',
      date: 'June 15, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Community Center, Downtown',
      description: 'Learn the fundamentals of setting up your first hydroponic system with minimal investment.'
    },
    {
      id: 2,
      title: 'Nutrient Management Masterclass',
      date: 'June 22, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual Event',
      description: 'Deep dive into nutrient solutions, pH balancing, and troubleshooting common issues.'
    },
    {
      id: 3,
      title: 'Urban Farming Meetup',
      date: 'July 5, 2025',
      time: '11:00 AM - 1:00 PM',
      location: 'Green Roof Garden, City Hall',
      description: 'Connect with other urban farmers and share experiences with space-efficient growing methods.'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Join Our Farming Community</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with other farmers, share experiences, and learn from each other to grow better together.
          </p>
        </div>
        
        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">5,000+</h2>
            <p className="text-gray-600">Active Community Members</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">10,000+</h2>
            <p className="text-gray-600">Questions Answered</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="bg-yellow-100 p-3 rounded-full mb-4">
              <Calendar className="h-8 w-8 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">250+</h2>
            <p className="text-gray-600">Events Hosted</p>
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-green-700" />
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-700 text-white p-4">
                  <h3 className="font-bold text-lg">{event.title}</h3>
                </div>
                <div className="p-4">
                  <div className="flex items-start mb-3">
                    <Calendar className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{event.date}</p>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p>{event.location}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  
                  <a href='https://docs.google.com/forms/d/1AWlVgv1vYDBX7Eu6YmKvAUt5o2E3zDWI_6D1emSMBGE/edit'>
                    <button className="bg-green-100 text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-200 transition duration-300 w-full">
                      Register for Event
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Join the Community */}
        <div className="bg-green-700 text-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <a href='https://docs.google.com/forms/d/1AWlVgv1vYDBX7Eu6YmKvAUt5o2E3zDWI_6D1emSMBGE/edit'>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
                </a>
                <p className="text-green-100 mb-6">
                  Connect with farmers around the world, share your experiences, ask questions, and learn from experts in modern farming techniques.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href='https://docs.google.com/forms/d/1AWlVgv1vYDBX7Eu6YmKvAUt5o2E3zDWI_6D1emSMBGE/edit'>
                    <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition duration-300">
                      Join Discord Community
                    </button>
                  </a>
                  <a href='https://www.linkedin.com/company/yeza/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin_dashboard_index%3Bkj4LzPhGT7WgbS4RHTlxjA%3D%3D'>
                    <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition duration-300">
                      Follow on Social Media
                    </button>
                  </a>
                </div>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Community gathering" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section - replaced Additional Resources */}
        <TeamSection />
      </div>
    </div>
  );
};

export default CommunityPage;