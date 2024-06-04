import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
import Heroimg1 from '../assets/images/HeroImg1.png'
import Heroimg2 from '../assets/images/HeroImg2.png'
import playbtn from '../assets/images/playbtn.png'
import Effect from '../assets/images/effect.png'
import Star from '../assets//images/Star.png'
import arrow from '../assets//images/arrow.png'

const Hero = () => {
    useEffect(() => {
        const tl = gsap.timeline();
      
        tl.to('.anim', { duration: 0.5, y: 20, opacity: 1, stagger: 0.2, ease: 'back.inOut' });
      
      }, []);

  return (
    <div id="hero-section" className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative container flex flex-col md:flex-row justify-between pl-4 md:pl-20 lg:pl-36 mt-36">
            <div className="relative text-center md:text-left">
                <img src={Star} alt="star" className='absolute -left-24 -mt-16'/>
                <h1 className="anim text-[64px] leading-[64px] font-extrabold text-black opacity-0 font-clash-display">Make The Best Financial Decisions</h1>
                <img className="absolute -top-40 -z-10" src={Effect} alt="" />
                <p className="anim text-lg text-gray-600 mt-4 opacity-0 font-clash-display">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Socils Arcu Lorem Porttitor.</p>
                <div className="anim opacity-0 flex mt-8 mx-16 md:mx-0">
                    <button className="btn flex items-center mr-4 px-9 py-3 bg-black text-white rounded-md hover:bg-gray-800 font-clash-display">
                        Get Started
                        <span>
                            <img src={arrow} alt="arrow" className='ml-2 object-contain'/>
                        </span>
                        </button>
                    <button className="btn flex items-center">
                        <span className="mr-2">
                            <img src={playbtn} alt="Play Button object-contain" />
                        </span>
                        Watch Video
                    </button>
                </div>
                <img src={Star} alt="star" className='star absolute left-40 mt-16'/>
                <div className='hidden md:flex lg:flex'>
                    <img src={Heroimg2} alt="" />
                </div>
            </div>
        </div>
        <div className="relative hidden md:flex lg:flex">
            <img src={Heroimg1} alt="Hero" className="object-cover w-full -mt-10" />
        </div>
    </div>
  );
}

export default Hero
