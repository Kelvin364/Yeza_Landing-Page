import React, { useState, useEffect, useRef } from 'react';
import { farmingMethods } from '../data/farmingMethods';
import { Check } from 'lucide-react';

const FarmingMethodsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayRef = useRef(null);
  
  // Set auto-rotation
  useEffect(() => {
    // Auto-rotate cards every 5 seconds
    autoplayRef.current = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = prevIndex === farmingMethods.length - 1 ? 0 : prevIndex + 1;
        return nextIndex;
      });
    }, 5000);
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);
  
  // Handle navigation
  const handlePrev = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    setActiveIndex(prevIndex => (prevIndex === 0 ? farmingMethods.length - 1 : prevIndex - 1));
    
    // Restart autoplay
    autoplayRef.current = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === farmingMethods.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
  };

  const handleNext = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    setActiveIndex(prevIndex => (prevIndex === farmingMethods.length - 1 ? 0 : prevIndex + 1));
    
    // Restart autoplay
    autoplayRef.current = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === farmingMethods.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
  };

  const toggleExpand = (id) => {
    setExpandedMethod(expandedMethod === id ? null : id);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right
      handlePrev();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 overflow-hidden">
      {/* Horizontal DNA double helix background - limited to the cards section */}
      <div className="absolute inset-0 w-full opacity-50 pointer-events-none z-0 overflow-hidden">
        {/* First DNA strand */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={`strand1-${i}`} 
            className="absolute"
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: '#166534', // Forest green
              borderRadius: '50%',
              left: `${(i * 4) % 120}%`,
              top: '45%',
              filter: 'blur(1px)',
              animation: `dnaStrandH1 40s linear infinite`
            }}
          />
        ))}
        
        {/* Second DNA strand */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={`strand2-${i}`} 
            className="absolute"
            style={{
              width: '15px',
              height: '15px',
              backgroundColor: '#15803d', // Dark green
              borderRadius: '50%',
              left: `${((i * 4) + 2) % 120}%`,
              top: '55%',
              filter: 'blur(1px)',
              animation: `dnaStrandH2 40s linear infinite`
            }}
          />
        ))}
        
        {/* DNA connecting lines */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={`connector-${i}`} 
            className="absolute"
            style={{
              width: '3px',
              height: '10%',
              backgroundColor: '#4ade80', // Light green
              opacity: 0.9,
              left: `${(i * 4) % 120}%`,
              top: '45%',
              animation: `dnaConnectorH 40s linear infinite`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Modern Farming Methods</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different sustainable farming techniques that can help you grow more food with fewer resources.
          </p>
        </div>

        {/* Card Slider */}
        <div className="relative">
          {/* Navigation Buttons - Removed */}
          
          {/* Card Container */}
          <div 
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {farmingMethods.map((method, index) => (
              <div 
                key={method.id}
                className="min-w-full px-4 flex justify-center"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] max-w-4xl w-full">
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h2>
                    
                    <div className="grid grid-cols-4 gap-4">
                      <div className="col-span-1">
                        <img 
                          src={method.imageUrl} 
                          alt={method.name} 
                          className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                        />
                        
                        <div className="bg-gray-50 p-3 rounded-lg hover:bg-green-50 transition-colors mb-2">
                          <h3 className="font-semibold text-gray-700 text-sm">Setup Cost</h3>
                          <p className="text-sm">{method.setupCost}</p>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg hover:bg-green-50 transition-colors">
                          <h3 className="font-semibold text-gray-700 text-sm">Resource Efficiency</h3>
                          <p className="text-sm">{method.resourceEfficiency}</p>
                        </div>
                      </div>
                      
                      <div className="col-span-2 grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                          <h3 className="text-lg font-semibold mb-2">Description</h3>
                          <p className="text-gray-700 text-sm mb-3">{method.description}</p>
                        </div>
                        
                        <div className="col-span-1">
                          <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                          <ul className="space-y-1">
                            {method.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start group text-sm">
                                <Check className="h-4 w-4 text-green-600 mr-1 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="group-hover:text-green-700 transition-colors">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="col-span-1">
                          <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                          <ul className="space-y-1">
                            {method.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-start group text-sm">
                                <span className="text-red-500 mr-1 group-hover:text-red-600 transition-colors">•</span>
                                <span className="group-hover:text-red-700 transition-colors">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg hover:bg-green-50 transition-colors">
                          <h3 className="font-semibold text-gray-700 mb-1 text-sm">Suitable For</h3>
                          <ul className="space-y-1">
                            {method.suitableFor.map((item, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <Check className="h-4 w-4 text-green-600 mr-1 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-6">
            {farmingMethods.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`mx-1 h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-green-600' : 'bg-gray-300 hover:bg-green-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Getting Started Section - Unchanged */}
        <div className="bg-green-50 rounded-lg p-6 shadow-md mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started with Hydroponics</h2>
          <p className="text-gray-700 mb-4">
            Hydroponics is often the most accessible modern farming method for beginners. Here's a simple way to start:
          </p>
          
          <ol className="space-y-4 mb-6">
            <li className="flex">
              <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
              <div>
                <h3 className="font-semibold">Start with a simple system</h3>
                <p className="text-gray-600">Begin with a deep water culture (DWC) or wick system, which are the easiest to build and maintain.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
              <div>
                <h3 className="font-semibold">Choose beginner-friendly plants</h3>
                <p className="text-gray-600">Lettuce, spinach, and herbs like basil are perfect for beginners as they grow quickly and have simple needs.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
              <div>
                <h3 className="font-semibold">Monitor water quality</h3>
                <p className="text-gray-600">Check pH levels regularly and ensure your nutrient solution is properly balanced.</p>
              </div>
            </li>
            <li className="flex">
              <span className="bg-green-700 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">4</span>
              <div>
                <h3 className="font-semibold">Provide adequate lighting</h3>
                <p className="text-gray-600">Use natural sunlight or invest in simple grow lights for indoor systems.</p>
              </div>
            </li>
          </ol>
          
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-700 mb-2">Pro Tip</h3>
            <p>
              Start small and scale up as you gain experience. Many successful hydroponic farmers began with a single plant in a simple setup before expanding their operations.
            </p>
          </div>
        </div>
      </div>
      
      {/* Add keyframes for DNA animation */}
      <style jsx>{`
        @keyframes dnaStrandH1 {
          0% {
            transform: translateX(-20vw);
          }
          100% {
            transform: translateX(100vw);
          }
        }
        
        @keyframes dnaStrandH2 {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-20vw);
          }
        }
        
        @keyframes dnaConnectorH {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FarmingMethodsPage;