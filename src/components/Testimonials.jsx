import React from 'react'
import testimonial from '../assets/images/testimonial.png'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Star from '../assets/images/Star.png'

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#test-section',
        start: 'top 80%',
      },
    });

    tl.to('.tanim', {
      duration: 0.5,
      y: 20,
      opacity: 1,
      stagger: 0.2,
      ease: 'back.inOut',
    });
  }, []);
  return (
    <div id="test-section" className='relative mt-20 md:mt-0'>
    <img src={Star} alt="star" className='absolute md:left-24'/>
    <h3 className='tanim opacity-0 font-clash-display text-black text-[20px] font-medium text-center'>T E S T I M O N I A L S</h3>
    <h1 className='tanim opacity-0 font-clash-display font-extrabold text-black text-5xl text-center md:w-[500px] m-auto'>What Our Users Say About Us?</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 md:mx-24">
        <div className='w-full h-full'>
            <img src={testimonial} alt=""/>
          </div>
          <div className='relative font-clash-display md:mx-0 mx-10 md:mt-24 text-centre md:text-left'>
            <div className='tanim opacity-0 mt-10 md:mr-[150px]'>
              <h3 className='text-[30px] text-black font-extrabold items-center'>The Best Financial Accounting App Ever!</h3>
              <p className='text-[20px] text-gray-500 mt-4'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
            </div>
            <div className='flex gap-3 mt-10 items-center'>
              <div className='h-[50px] w-[50px] rounded-full bg-gray-200'></div>
              <div className='h-[40px] w-[40px] rounded-full bg-gray-200'></div>
              <div className='h-[40px] w-[40px] rounded-full bg-gray-200'></div>
              <div className='h-[40px] w-[40px] rounded-full bg-gray-200'></div>
              <div className='h-[40px] w-[40px] rounded-full bg-gray-200'></div>
            </div>
          <h3 className='tanim opacity-0 font-clash-display mt-5 text-black text-[18px] font-bold'>Nick Jonas</h3>
          </div>
        </section>
        <img src={Star} alt="star" className='absolute md:right-24 right-0'/>
    </div>
  )
}

export default Testimonials
