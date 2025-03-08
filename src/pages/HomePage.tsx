import React from 'react'
import { Link } from 'react-router-dom'
import { Droplet, Sun, Leaf, Calculator, Users, ArrowRight } from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='relative bg-green-700 text-white'>
        <div className='absolute inset-0 overflow-hidden'>
        <video
  autoPlay
  muted
  loop
  className='w-full h-full object-cover'
  style={{ background: 'transparent' }}
>
  <source src="./" type="video/webm" />
  <source src="./Tools/Home.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
        </div>
        <div className='relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            SEE MORE , GROW MORE
          </h1>
          <p className='text-xl max-w-3xl mb-8'>
            Learn sustainable farming techniques that work anywhere, with a
            focus on hydroponic systems that use less water and space while
            producing more food.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              to='/methods'
              className='bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition duration-300'
            >
              Explore Methods
            </Link>
            <Link
              to='/calculator'
              className='bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition duration-300'
            >
              Try Our Calculator
            </Link>
            <a
              href='https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/02/28/10/20250228100521-PCPQZ4WO.json'
              className='bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              Assess Chatbot
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
<div className = 'bg-teal-80 py-16 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8'>
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
    Why Modern Farming Matters
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* First Card with rotating lines */}
    <div className="relative">
      {/* Rotating lines container */}
      <div className="absolute inset-0 -m-3 pointer-events-none">
        <div className="w-full h-full border border-green-500 rounded-lg opacity-60 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-0 border-2 border-dashed border-green-200 rounded-lg opacity-40 m-4 animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>
      
      {/* Card content */}
      <div className="bg-white  p-6 rounded-lg shadow-md flex flex-col items-center text-center relative z-10">
        <div className="bg-blue-100 p-3 rounded-full mb-4">
          <Droplet className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
        <p className="text-gray-600">
        Make informed decisions with our data-driven insights for sustainable and profitable farming practices.
        </p>
      </div>
    </div>

    {/* Second Card with rotating lines */}
    <div className="relative">
      {/* Rotating lines container */}
      <div className="absolute inset-0 -m-3 pointer-events-none">
        <div className="w-full h-full border border-green-300 rounded-lg opacity-60 animate-[spin_55s_linear_infinite]"></div>
        <div className="absolute inset-0 border-2 border-dashed border-green-200 rounded-lg opacity-40 m-4 animate-[spin_45s_linear_infinite_reverse]"></div>
      </div>
      
      {/* Card content */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center relative z-10">
        <div className="bg-yellow-100 p-3 rounded-full mb-4">
          <Sun className="h-8 w-8 text-yellow-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Year-Round Growing</h3>
        <p className="text-gray-600">
          Control your growing environment to produce fresh food throughout
          the year, regardless of outside weather conditions.
        </p>
      </div>
    </div>

    {/* Third Card with rotating lines */}
    <div className="relative">
      {/* Rotating lines container */}
      <div className="absolute inset-0 -m-3 pointer-events-none">
        <div className="w-full h-full border border-green-300 rounded-lg opacity-60 animate-[spin_65s_linear_infinite]"></div>
        <div className="absolute inset-0 border-2 border-dashed border-green-200 rounded-lg opacity-40 m-4 animate-[spin_50s_linear_infinite_reverse]"></div>
      </div>
      
      {/* Card content */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center relative z-10">
        <div className="bg-green-100 p-3 rounded-full mb-4">
          <Leaf className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Integration with Farm Management Tools</h3>
        <p className="text-gray-600">
          Grow more food in less space, making modern farming techniques
          perfect for urban environments and small plots.
        </p>
      </div>
    </div>
  </div>
</div>

      {/* Getting Started Section */}
      <div className='bg-grey-10 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center mb-12 text-gray-800'>
            How to Get Started
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
                <h3 className='text-xl font-semibold mb-2 flex items-center'>
                  <span className='bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3'>
                    1
                  </span>
                  Learn About Different Methods
                </h3>
                <p className='text-gray-600 ml-11'>
                  Explore various modern farming techniques and find the one
                  that suits your needs and resources.
                </p>
              </div>

              <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
                <h3 className='text-xl font-semibold mb-2 flex items-center'>
                  <span className='bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3'>
                    2
                  </span>
                  Plan Your System
                </h3>
                <p className='text-gray-600 ml-11'>
                  Use our calculator to determine the optimal conditions for
                  your chosen plants and system design.
                </p>
              </div>

              <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
                <h3 className='text-xl font-semibold mb-2 flex items-center'>
                  <span className='bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3'>
                    3
                  </span>
                  Join Our Community
                </h3>
                <p className='text-gray-600 ml-11'>
                  Connect with other farmers, share experiences, and get support
                  as you grow your knowledge and crops.
                </p>
              </div>

              <div className='mt-6'>
                <Link
                  to='/methods'
                  className='inline-flex items-center text-green-700 font-medium hover:text-green-800'
                >
                  Get started now
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/pyl9Or0f6rY"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='bg-green-700 text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Transform Your Farming?
          </h2>
          <p className='text-xl max-w-3xl mx-auto mb-8'>
            Join thousands of farmers who are already using our resources to
            improve their yields and sustainability.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              to='/calculator'
              className='bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition duration-300 flex items-center'
            >
              <Calculator className='mr-2 h-5 w-5' />
              Try Our Calculator
            </Link>
            <Link
              to='/community'
              className='bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition duration-300 flex items-center'
            >
              <Users className='mr-2 h-5 w-5' />
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
