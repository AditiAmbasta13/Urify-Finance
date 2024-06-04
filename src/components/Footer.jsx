import React from 'react'
import footer from '../assets/images/footer.png'
import LogoImg from '../assets/images/Logo.png'
import msg from '../assets/images/msg.png'
import phone from '../assets/images/phone.png'
import Effect from '../assets/images/effect.png'
import Star from '../assets//images/Star.png'

const Footer = () => {
  return (
    <div>
      <img src={Star} alt="star" className='absolute md:left-16 md:mt-10'/>
      <div className="md:flex justify-center items-center my-36 mx-40 font-clash-display relative hidden">
      <img src={Effect} alt="effect" className='absolute -left-48 -top-48 -z-10'/>
        <img src={footer} alt="" className="w-full" />
        <div className="absolute left-10 ml-16">
          <h3 className="font-extrabold text-white text-5xl w-[500px]">Ready To Get Started?</h3>
          <p className="text-[20px] text-white mt-4 mb-6 w-[600px]">Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
          <a
            href="#"
            className="px-9 py-3 bg-white text-black rounded-md hover:bg-gray-300 font-clash-display font-semibold"
          >
            Download App
          </a>
        </div>
      </div>
      <footer className="bg-white py-6 font-clash-display">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="items-center space-y-3 m-auto md:mt-0 mt-20">
          <img src={LogoImg} alt="" />
          <div className="space-y-3">
            <p className='flex gap-2'>
              <img src={msg} alt="" />Help@Frybix.Com</p>
            <p className='flex gap-2'>
              <img src={phone} alt="" />+1234 456 678 89</p>
          </div>
        </div>
        <div className="md:flex space-x-10 text-black hidden">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="space-y-3">
              <li>Home</li>
              <li>About Us</li>
              <li>Bookings</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-3">
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-3">
              <li>Take Tour</li>
              <li>Live Chat</li>
              <li>Reveiws</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <ul className="space-y-3">
              <li>Stay up to date</li>
            </ul>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="py-4 px-3 bg-gray-100 rounded-l-md"
              />
              <button className="bg-black text-white py-4 px-4 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <p className="text-center text-black">Created by Aditi Ambasta - @aditiambasta2004@gmail.com</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
