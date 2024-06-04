import React from 'react'
import { useState } from 'react';
import gsap from 'gsap'
import { useEffect } from 'react'
import LogoImg from '../assets/images/Logo.png'
import ham from '../assets/images/ham.png'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const tl = gsap.timeline();
  
    tl.to('nav', { duration: 0.5, y: 20, opacity: 1, stagger: 0.2, ease: 'back.inOut' });
  
  }, []);

  return (
    <nav className="opacity-0 mx-36 flex items-center justify-between pt-4 px-8 bg-white mb-3">
      <div className="flex items-center">
        <img src={LogoImg} alt="Logo" className="h-8 mr-4" />
        <div className="hidden md:flex space-x-6 font-clash-display text-lg">
          <a
            href="#hero-section"
            className={`text-gray-800 font-medium ${
              activeLink === 'home' ? 'text-red-500 font-bold' : 'hover:text-red-500 '
            }`}
            onClick={() => handleLinkClick('home')}
          >
            Home 
          </a>
          <a
            href="#"
            className={`text-gray-800 font-medium ${
              activeLink === 'about' ? 'text-red-500 font-bold' : 'hover:text-red-500'
            }`}
            onClick={() => handleLinkClick('about')}
          >
            About Us
          </a>
          <a
            href="#"
            className={`text-gray-800 font-medium ${
              activeLink === 'pricing' ? 'text-red-500 font-bold' : 'hover:text-red-500'
            }`}
            onClick={() => handleLinkClick('pricing')}
          >
            Pricing
          </a>
          <a
            href="#features-section"
            className={`text-gray-800 font-medium ${
              activeLink === 'features' ? 'text-red-500 font-bold' : 'hover:text-red-500'
            }`}
            onClick={() => handleLinkClick('features')}
          >
            Features
          </a>
        </div>
      </div>
      <div className="hidden md:flex">
        <a
          href="#"
          className="px-9 py-3 bg-black text-white rounded-md hover:bg-gray-800 font-clash-display "
        >
          Download
        </a>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 hover:text-red-500 focus:outline-none"
        >
          <img src={ham} alt="ham" className='w-7 ml-4 md:ml-0'/>
        </button>
      </div>
    </nav>
  );
}

export default Navigation
