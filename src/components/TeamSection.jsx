import React, { useState, useEffect, useRef } from 'react';
import { Users, Linkedin, Github, Mail, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

const TeamSection = () => {
  // 7 team members
  const teamMembers = [
    {
      id: 1,
      name: "Irunva Opportun",
      role: "Founder & CEO",
      bio: "Data scientist and Environmental expert , Passionate Social Impact Leader | Millennium Fellow 2025 | Advocate for Sustainable Development Goals",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFlnkZ4dYgUtg/profile-displayphoto-shrink_400_400/B4DZSkTdATH0Ag-/0/1737923351676?e=1746662400&v=beta&t=hgMtMoP5vpwgrK-ZWqLEtPOc4DfSGo2q4bLYl18f6Ak",
      links: {
        linkedin: "https://www.linkedin.com/in/opportun-irumva-381677349/",
        email: "irunva.opportun@yezaafrica.com"
      },
      specialty: "GeoScientist"
    },
    {
      id: 2,
      name: "Kelvin Rwihimba",
      role: "CTO & Engineer",
      bio: "Engineer specializing in automation systems for sustainable agriculture and renewable energy integration.",
      imageUrl: './Tools/kelvin.jpeg',
      links: {
        linkedin: "https://www.linkedin.com/in/Kelvin-Rwihimba",
        github: "https://github.com/Kelvin364",
        email: "k.rwihimba@yezaafrica.com"
      },
      specialty: "Automation & IoT"
    },
    {
      id: 3,
      name: "Yvon Mutuyeyezu",
      role: "Lead Software Engineer",
      bio: "Principal Software Engineer | Entrepreneur | CEH ",
      imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGTEk-yDw0qkw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692184746799?e=1746662400&v=beta&t=FsvdEZ1Jt66UsWF1Z4P5buFxOCDlECv0TuEhQTvAz2I",
      links: {
        linkedin: "https://www.linkedin.com/in/yvon-mutuyeyezu/",
        github: "https://github.com/Yvonmu",
        email: "yvon.mu@yezaafrica.com"
      },
      specialty: "Software Engineer"
    },
    {
      id: 4,
      name: "Natnael Tibebu",
      role: "AI and System Infrastructure",
      bio: "a Full stack Developer | Computer Engineer based in Addis Ababa, ETH who is passionate about delivering value to businesses through technology.",
      imageUrl: "./Tools/ermias.jpg", 
      links: {
        linkedin: "https://www.linkedin.com/in/natnaeltibebu/",
        github: "https://github.com",
        email: "david@yezaafrica.com"
      },
      specialty: "Computer Engineer"
    },
    {
      id: 5,
      name: "Inyange Larissa",
      role: "Patnership and Communications",
      bio: "Specializes in developing eco-friendly farming solutions that minimize environmental impact.",
      imageUrl: "./Tools/larissa.jpg",
      links: {
        linkedin: "https://www.linkedin.com/in/inyange-larissa-88730329a/",
        github: "https://github.com",
        email: "inyangelarissa@gmail.com"
      },
      specialty: "Eco Solutions"
    },
    {
      id: 6,
      name: "Adelin Mugenga",
      role: "Hydroponic Specialist",
      bio: "Biochemist focused on optimizing plant nutrition formulas for hydroponic and aquaponic systems.",
      imageUrl: "./Tools/Adelin.jpg",
      links: {
        linkedin: "https://media.licdn.com/dms/image/v2/D4D03AQFPWylnzbO4DQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708695528804?e=1746662400&v=beta&t=qiiohZQP6hZ-_MUP1hwAZzYmF9VrSa38ZBOxPgh1PEM",
        github: "https://github.com",
        email: "robert@yezaafrica.com"
      },
      specialty: "Hydropnic systems"
    },
    {
      id: 7,
      name: "Teddy Valentine",
      role: "Marketing Lead",
      bio: "Strategic communicator helping small-scale farmers access markets and build sustainable businesses.",
      imageUrl: "./Tools/Valentine.jpg",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "nadia@yezaafrica.com"
      },
      specialty: "Market Access"
    }
  ];

  // Split members into two slides - 4 and 3
  const slides = [
    teamMembers.slice(0, 4), // First 4 members
    teamMembers.slice(4)     // Last 3 members
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideshowRef = useRef(null);
  const autoplayRef = useRef(null);

  // Set up autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 8000); // Change slides every 8 seconds
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  // Navigation functions
  const handlePrev = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    
    // Reset autoplay timer
    autoplayRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 8000);
  };
  
  const handleNext = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    
    // Reset autoplay timer
    autoplayRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 8000);
  };

  return (
    <div className="mt-12 relative overflow-hidden">
      {/* Background DNA strands */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-full h-full">
          {/* Creates dots for DNA strand */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={`strand-dot-${i}`}
              className="absolute w-4 h-4 rounded-full bg-green-600"
              style={{
                left: `${10 + (i * 5)}%`,
                top: `${50 + Math.sin(i * 0.5) * 20}%`,
                animation: `pulse 3s infinite ${i * 0.2}s`
              }}
            />
          ))}
          
          {/* Second strand */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={`strand2-dot-${i}`}
              className="absolute w-4 h-4 rounded-full bg-green-700"
              style={{
                left: `${10 + (i * 5)}%`,
                top: `${50 - Math.sin(i * 0.5) * 20}%`,
                animation: `pulse 3s infinite ${i * 0.2 + 1.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Users className="h-6 w-6 mr-2 text-green-700" />
          Meet Our Team
        </h2>
        
        {/* Navigation Arrows */}
        <div className="flex space-x-2">
          <button 
            onClick={handlePrev}
            className="bg-green-100 p-2 rounded-full text-green-700 hover:bg-green-200 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={handleNext}
            className="bg-green-100 p-2 rounded-full text-green-700 hover:bg-green-200 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Slideshow container */}
      <div 
        ref={slideshowRef} 
        className="relative overflow-hidden"
        style={{ minHeight: '480px' }} // Ensure consistent height between slides
      >
        {/* Slide 1 - 4 members */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 absolute w-full ${
            currentSlide === 0 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          {slides[0].map(renderTeamMember)}
        </div>
        
        {/* Slide 2 - 3 members */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-700 absolute w-full ${
            currentSlide === 1 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-full pointer-events-none'
          }`}
        >
          {slides[1].map(renderTeamMember)}
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => {
            if (autoplayRef.current) {
              clearInterval(autoplayRef.current);
            }
            setCurrentSlide(0);
            autoplayRef.current = setInterval(() => {
              setCurrentSlide(prev => (prev === 0 ? 1 : 0));
            }, 8000);
          }}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentSlide === 0 ? 'bg-green-600 w-6' : 'bg-green-300'
          }`}
          aria-label="Go to slide 1"
        />
        <button
          onClick={() => {
            if (autoplayRef.current) {
              clearInterval(autoplayRef.current);
            }
            setCurrentSlide(1);
            autoplayRef.current = setInterval(() => {
              setCurrentSlide(prev => (prev === 0 ? 1 : 0));
            }, 8000);
          }}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentSlide === 1 ? 'bg-green-600 w-6' : 'bg-green-300'
          }`}
          aria-label="Go to slide 2"
        />
      </div>
      
      {/* Join the team section */}
      <div className="mt-12 bg-green-50 rounded-lg p-8 relative overflow-hidden">
        {/* Animated decorative elements */}
        <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-green-100 opacity-60"></div>
        <div className="absolute -left-8 -bottom-8 w-24 h-24 rounded-full bg-green-200 opacity-40"></div>
        
        <div className="relative z-10 md:flex items-center justify-between">
          <div className="md:w-2/3 mb-6 md:mb-0">
           <a href = 'https://calendly.com/yeza-agri/30min' > <h3 className="text-xl font-bold text-gray-900 mb-2">Want to Join Our Team / Book one-one?</h3></a>
            <p className="text-gray-700">
              We're always looking for passionate individuals to help us revolutionize sustainable farming. 
              If you're excited about making a difference in food security and sustainability, we'd love to hear from you.
            </p>
          </div>
          <div className="md:w-1/3 md:text-right">
            <a 
              href="#" 
              className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>
      
      {/* CSS animations */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
  
  // Helper function to render team member card
  function renderTeamMember(member) {
    return (
      <div 
        key={member.id} 
        className="team-card relative bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        {/* Card top with image */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-60 z-10"></div>
          <img 
            src={member.imageUrl} 
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Floating specialty badge */}
          <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium z-20">
            {member.specialty}
          </div>
          
          {/* Social links - appear on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20">
            <a href={member.links.linkedin} className="bg-white p-2 rounded-full hover:bg-green-100 transition-colors">
              <Linkedin className="h-4 w-4 text-green-700" />
            </a>
            <a href={member.links.github} className="bg-white p-2 rounded-full hover:bg-green-100 transition-colors">
              <Github className="h-4 w-4 text-green-700" />
            </a>
            <a href={`mailto:${member.links.email}`} className="bg-white p-2 rounded-full hover:bg-green-100 transition-colors">
              <Mail className="h-4 w-4 text-green-700" />
            </a>
          </div>
        </div>
        
        {/* Card content */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
          <div className="flex items-center text-green-700 text-sm font-medium mb-2">
            <Briefcase className="h-3 w-3 mr-1" />
            {member.role}
          </div>
          <p className="text-gray-600 text-sm">{member.bio}</p>
        </div>
        
        {/* Decorative animated element */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    );
  }
};

export default TeamSection;