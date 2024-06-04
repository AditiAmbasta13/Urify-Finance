import React from 'react'
import featureImg from '../assets/images/featureImg.png'
import Effect2 from '../assets/images/Effect2.png'
import cube from '../assets/images/cube.png'
import starsmall from '../assets/images/starsmall.png'
import hexagon from '../assets/images/hexagon.png'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#features-section',
        start: 'top 80%',
      },
    });

    tl.to('.fanim', {
      duration: 0.5,
      y: 20,
      opacity: 1,
      stagger: 0.2,
      ease: 'back.inOut',
    });
  }, []);
  return (
    <section id="features-section" className="grid grid-cols-1 md:grid-cols-2 ">
      <div className='-mt-20 w-full h-full object-cover ml-10'>
        <img src={featureImg} alt="features" className='hidden md:flex'/>
      </div>
        <img src={Effect2} alt="effect" className='absolute right-0'/>
      <div className='relative font-clash-display text-center md:text-left mt-40 md:mx-0 md:mt-3 mx-10'>
        <h3 className='fanim opacity-0 text-red-500 text-[20px] font-medium'>F E A T U R E S</h3>
        <h1 className='fanim opacity-0 font-extrabold text-black text-5xl'>Uifry Premium</h1>
        <div className=''>
          <div className='fanim opacity-0 mt-10 md:mr-[150px] text-left'>
            <h3 className='flex text-[20px] text-black font-extrabold'>
              <img src={starsmall} alt="" className='mr-2 object-contain'/>
              Budgeting Intervals
            </h3>
            <p className='text-[20px] text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
          <div className='fanim opacity-0 mt-10 md:mr-[150px] text-left'>
            <h3 className='flex text-[20px] text-black font-extrabold'>
              <img src={hexagon} alt="" className='mr-2 object-contain'/>
              Budgeting Intervals
            </h3>
            <p className='text-[20px] text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
          <div className='fanim opacity-0 mt-10 md:mr-[150px] text-left'>
            <h3 className='flex text-[20px] text-black font-extrabold'>
              <img src={cube} alt="" className='mr-2 object-contain'/>
              Budgeting Intervals
            </h3>
            <p className='text-[20px] text-gray-500'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>   
        </div> 
      </div>
    </section>
  )
}

export default Features


