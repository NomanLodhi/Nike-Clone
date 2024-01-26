import React from 'react'

import FooterIcon from '../assets/images/footer-logo.svg'
import Facebook from '../assets/icons/facebook.svg'
import Twitter from '../assets/icons/twitter.svg'
import Instagram from '../assets/icons/instagram.svg'
const Footer = () => {
  return (
    <section className='text-white font-montserrat'>
      <div className='lg:w-1/3 my-2'>
        <img src={FooterIcon} alt="" width={150} className='mb-5'/>
        <p className="my-3 info-text">
          Get shoes ready for the new term at your nearest Nike store. Find your perfect Size in Store.Get Rewards.
        </p>
        <div className="flex gap-5">
          <img src={Facebook} alt="" className='rounded-full bg-white p-2 cursor-pointer' />
          <img src={Twitter} alt="" className='rounded-full bg-white p-2 cursor-pointer' />
          <img src={Instagram} alt="" className='rounded-full bg-white p-2 cursor-pointer' />
        </div>
      </div>
      <div className='flex max-lg:flex-col justify-between mt-10'>
    <div className='flex flex-col'>
      <p className="text-3xl font-bold py-3">Products</p>
      <ul>
        <li className='py-2'>Air Force 1</li>
        <li className='py-2'>Air Max 1</li>
        <li className='py-2'>Air Jump 1</li>
        <li className='py-2'>Air Jordan 1</li>
        <li className='py-2'>Air Min 1</li>
      </ul>
    </div>
    <div className='flex flex-col'>
      <p className="text-3xl font-bold py-3">Help</p>
      <ul>
        <li className='py-2'>Home</li>
        <li className='py-2'>About Us</li>
        <li className='py-2'>FAQs</li>
        <li className='py-2'>How it works</li>
        <li className='py-2'>Privacy Policy</li>
        <li className='py-2'>Payment Method</li>
      </ul>
    </div>
    <div className='flex flex-col'>
      <p className="text-3xl font-bold py-3">Get In Touch</p>
      <ul>
        <li className='py-2'>Customer@Nike.com</li>
        <li className='py-2'>+92-12345678</li>
      </ul>
    </div>
    </div>
     <p className=" pt-10">
      &copy; 2024 Copyright Reserved By Nike. 
     </p>
    </section>
  )
}

export default Footer
