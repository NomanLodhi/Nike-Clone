import { React,useState } from 'react'
import  arrow  from '../assets/icons/arrow-right.svg'
import bigShoeImg from '../assets/images/big-shoe1.png'
import bigShoeImg2 from '../assets/images/big-shoe2.png'
import bigShoeImg3 from '../assets/images/big-shoe3.png'
import Shoecard from './Shoecard'
const Hero = () => {
 


  return (
   <section id='home' className='padding-x p-3 font-montserrat w-full flex max-lg:flex-col flex-row min-h-screen'>
<div className='flex flex-col w-1/2 max-lg:w-full pt-44 '>
<p className='text-coral-red text-lg '>Our Summer Collections</p>
<h1 className='py-3 font-bold text-4xl '>
  The New Arrival Of <span className='text-coral-red '>Nike</span> Shoes
</h1>
  
<p className='info-text py-5'>
  Discover stylish Nike arrivals quality
  comfort and innovation for your active life
</p>
<button
className='bg-coral-red
w-52 py-4 rounded-full flex justify-center mt-10 hover:animate-bounce'
>
  <p className='text-white'>Shop Now</p>
  <span>
    <img src={arrow} alt="rightarrow" className='mx-3' />
  </span>
</button>
<div className="grid max-md:mx-auto grid-cols-3 max-md:grid-cols-1 max-md:item-center my-16 gap-4">
  <div>
<p className='text-4xl font-bold font-palanquin py-3'>
  1k+ 
</p>
<p className='info-text'>
  Brands
</p>

  </div>
  <div>
<p className='text-4xl font-bold font-palanquin py-3'>
500+ 
</p>
<p className='info-text'>
  Shops
</p>

  </div>
  <div>
<p className='text-4xl font-bold font-palanquin py-3'>
  250k+
</p>
<p className='info-text'>
  Customers
</p>
  </div>
  
</div>
</div>

  <Shoecard
  ShoeImg={bigShoeImg}
  ShoeImg2={bigShoeImg2}
  ShoeImg3={bigShoeImg3}
  />

   </section>
  )
}

export default Hero
