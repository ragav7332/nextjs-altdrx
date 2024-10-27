"use client"
import React from 'react';
// import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, LinkedIn } from 'lucide-react';
import Link from 'next/link'; 
import { FaFacebook as Facebook, FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as LinkedIn } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import { Card } from './components/ui/card';
import HowItWorksSection from './components/HowitWorkSection';
import InvestmentStagesSection from './components/InvestmentStageSection';
import MultipleChoiceSection from './components/componentmultiplesection';
import TrustedPartnerSection from './components/trustedPartner';
import StartInvestingSection from './components/StartInvestment';
// import { Link } from 'react-router-dom';


const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img

                className="h-15 w-auto "
                src="altdrxlogo.png"
                alt="AltDRX Logo"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600"
            >
              Properties
            </Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-blue-600">
              Team
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" passHref>
              <a className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </a>
            </Link>
            <Link href="/properties" passHref>
              <a className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Properties
              </a>
            </Link>
            <Link href="/about" passHref>
              <a className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </a>
            </Link>
            <Link href="/team" passHref>
              <a className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Team
              </a>
            </Link>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};


const HeroSection = () => {
  return (
    <div className="relative bg-white pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Invest in Real Estate</span>
                <span className="block text-blue-600">The Smart Way</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Start investing in premium real estate properties with fractional ownership. 
                Low minimum investment, high potential returns.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Start Investing
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/api/placeholder/800/600"
          alt="Investment Properties"
        />
      </div>
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              className="h-8 w-auto"
              src="/api/placeholder/120/40"
              alt="AltDRX Logo"
            />
            <p className="text-gray-400">
              Making real estate investment accessible to everyone through fractional ownership.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedIn size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">© 2024 AltDRX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


const imageUrls = [
  'premProp1.jpg',
  'premProp2.jpg',
  'premProp3.jpg',
];

const prices = [
  '$10000', 
  '$35000', 
  '$75000',  
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Investment Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden shadow-lg">
                <img
                  src={imageUrls[item - 1]} 
                  alt={`Property ${item}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Property {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    High-yield investment opportunity in prime location
                  </p>
                  <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{prices[item - 1]}</span>  
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                      Invest Now
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Invest with AltDRX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Low Minimum Investment",
                description:
                  "Start investing in real estate with as little as $10000",
              },
              {
                title: "Diversified Portfolio",
                description:
                  "Spread your investment across multiple properties",
              },
              {
                title: "Professional Management",
                description:
                  "Expert team handles all property management details",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <HowItWorksSection />
      <InvestmentStagesSection />
      <MultipleChoiceSection />
      <TrustedPartnerSection />
      <StartInvestingSection />

      <Footer />
    </div>
  );
};

// Management Team Page
const ManagementTeamPage = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      image: "johnSmith.jpg",
      bio: "20+ years of experience in real estate investment"
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image: "sarah.jpg",
      bio: "Former tech lead at major fintech companies"
    },
    {
      name: "Michael Brown",
      position: "Head of Investments",
      image: "michel.jpg",
      bio: "15+ years of investment banking experience"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Image Section */}
      <div className="relative h-96">
        <img
          src="/api/placeholder/1920/600"
          alt="Team Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Our Management Team</h1>
        </div>
      </div>

      {/* Democratise Section */}
      <section className="py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-6">Democratise Section</h2>
    <p className="text-center text-gray-700 mb-4 text-justify">
      At our Company , we believe in empowering individuals and communities by making critical information and opportunities accessible to everyone. 
    </p>
    <p className="text-center text-gray-700 mb-4 text-justify">
      Our mission is to break down barriers and provide resources that allow individuals from all backgrounds to participate in [industry/sector]. Whether through educational programs, transparent processes, or open-access platforms, we strive to create an environment where everyone can thrive.
    </p>
    <p className="text-center text-gray-700 mb-4">
      We are committed to:
    </p>
    <ul className="list-disc list-inside text-center text-gray-600 text-justify">
      <li className="mb-2">Offering educational resources to enhance understanding and skills in [specific area].</li>
      <li className="mb-2">Providing mentorship programs that connect experienced professionals with emerging talents.</li>
      <li className="mb-2">Facilitating community forums where individuals can share their experiences and insights.</li>
      <li className="mb-2">Ensuring transparency in our processes to build trust and engagement.</li>
    </ul>
    <p className="text-center text-gray-700 mb-4 text-justify">
      Join us in our mission to democratize [specific opportunities] and make a difference in the lives of individuals across the globe. Together, we can build a more equitable future for all.
    </p>
  </div>
</section>

      {/* Media Badges Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Media Badges</h2>
          <div className="flex justify-center space-x-4">
            {/* Add media badge images here */}
            <img src="badge1.png" alt="Media Badge 1" className="w-32" />
            <img src="badge2.png" alt="Media Badge 2" className="w-32" />
            <img src="badge3.png" alt="Media Badge 3" className="w-32" />
          </div>
        </div>
      </section>

      

      {/* Management Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Management Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TrustedPartnerSection />

      {/* Contact Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 border rounded"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 border rounded"
                id="message"
                  
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { HomePage as default, ManagementTeamPage };
