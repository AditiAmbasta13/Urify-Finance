import React from 'react'
import AdvImg from '../assets/images/advImg.png'
import AdvImg2 from '../assets/images/advImg2.png'
import bell from '../assets/images/bell.png'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Advantages = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#adv-section',
        start: 'top 80%',
      },
    });

    tl.to('.aanim', {
      duration: 0.5,
      y: 20,
      opacity: 1,
      stagger: 0.2,
      ease: 'back.inOut',
    });
  }, []);
  return (
    <div id="adv-section">
      <section className="grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-0">
        <div className='relative font-clash-display mt-3 md:ml-36 text-center md:text-left'>
          <h3 className='aanim opacity-0 text-red-500 text-[20px] font-medium'>A D V A N T A G E S</h3>
          <h1 className='aanim opacity-0 font-extrabold text-black text-5xl'>Why Choose Uifry?</h1>
          <div className='aanim opacity-0 mt-10 md:mr-[150px] mx-10'>
            <h3 className='flex text-[30px] text-black font-extrabold items-center'>
              <img src={bell} alt="" className='mr-2 object-contain text-left'/>
              Clever Notifications
            </h3>
            <p className='text-[20px] text-gray-500 mt-4'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
          </div>
        </div>
        <div className='w-full h-full -mt-20 hidden md:flex'>
          <img src={AdvImg} alt=""/>
        </div>
      </section>
      <section id="adv-section-2" className="grid grid-cols-1 md:grid-cols-2">
      <div className='w-full h-full md:-mt-20 '>
          <img src={AdvImg2} alt=""/>
        </div>
        <div className='relative font-clash-display md:mt-24 -mt-10 text-center md:text-left'>
          <div className='aanim opacity-0 mt-10 md:mr-[150px] mx-10'>
            <h3 className='flex text-[30px] text-black font-extrabold items-center'>
              <img src={bell} alt="" className='mr-2 object-contain text-left'/>
              Fully Customizable
            </h3>
            <p className='text-[20px] text-gray-500 mt-4'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Advantages
