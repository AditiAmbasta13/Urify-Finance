import React from 'react'
import Star from '../assets/images/Star.png'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#faq',
        start: 'top 80%',
      },
    });

    tl.to('.animf', {
      duration: 0.5,
      y: 20,
      opacity: 1,
      stagger: 0.2,
      ease: 'back.inOut',
    });
  }, []);

  return (
    <div id='faq' className='md:mx-36 font-clash-display text-center md:text-left md:mt-0 mt-20'>
      <h3 className=' animf opacity-0 text-red-500 text-[20px] font-medium'>F A Q</h3>
      <h1 className='animf opacity-0 font-extrabold text-black text-5xl md:w-[500px]'>Frequently Asked Question</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 my-10'>
        <div className='m-auto'>
          <div className='animf opacity-0 bg-red-500 hover:bg-red-400 md:w-[40vw] w-[80vw] h-[210px] p-8 rounded-lg'>
            <h3 className='text-md md:text-[28px] text-white font-extrabold items-center'>The Best Financial Accounting App Ever!</h3>
            <p className='text-sm md:text-[18px] text-white'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
          <div className='animf opacity-0 bg-white hover:bg-gray-100 md:w-[40vw] w-[80vw] h-[210px] p-8 rounded-lg'>
            <h3 className='text-md md:text-[28px] text-black font-extrabold items-center'>The Best Financial Accounting App Ever!</h3>
            <p className='text-sm md:text-[18px] text-black'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
          <div className='animf opacity-0 bg-red-500 hover:bg-red-400 md:w-[40vw] w-[80vw] h-[210px] p-8 rounded-lg'>
            <h3 className='text-md md:text-[28px] text-white font-extrabold items-center'>The Best Financial Accounting App Ever!</h3>
            <p className='text-sm md:text-[18px] text-white'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
        </div>
        <div className='md:ml-3 m-auto'>
        <div className='animf opacity-0 bg-white hover:bg-gray-100 md:w-[40vw] w-[80vw] h-[210px] p-8 rounded-lg'>
            <h3 className='text-md md:text-[28px] text-black font-extrabold items-center'>The Best Financial Accounting App Ever!</h3>
            <p className='text-sm md:text-[18px] text-black'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
          <div className='animf opacity-0 bg-red-500 hover:bg-red-400 md:w-[40vw] w-[80vw] h-[210px] p-8 rounded-lg'>
            <h3 className='text-md md:text-[28px] text-white font-extrabold items-center'>The Best Financial Accounting App Ever!</h3>
            <p className='text-sm md:text-[18px] text-white'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
          <div className='animf opacity-0 bg-white hover:bg-gray-100 md:w-[40vw] w-[80vw] h-[210px] p-8 rounded-lg'>
            <h3 className='text-md md:text-[28px] text-black font-extrabold items-center'>The Best Financial Accounting App Ever!</h3>
            <p className='text-sm md:text-[18px] text-black'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
        </div>
      </section>
      <img src={Star} alt="star" className='absolute right-0 md:right-24'/>
    </div>
  )
}

export default Faq
