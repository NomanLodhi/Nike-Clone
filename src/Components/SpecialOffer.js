import React from 'react'
import Showquality from '../assets/images/shoe8.svg'
const SpecialOffer = () => {
  return (
    <section className='padding-x'> 
<div className='flex max-lg:flex-col flex-row font-montserrat'>
<div className="lg:w-1/2">
<h1 className='py-3 font-bold text-4xl '>
  We Provide You  <span className='text-coral-red '>Super Quality</span> Shoes
</h1>
<p className='info-text py-5'> 
Ensuring premium comfort and style our meticulously crafted footwear is designed to elevate your experience providing you with unmatched quality innovation and a touch of elegance.
</p>
<p className='info-text py-5'> 
Our dedication to detail and excellence ensures your satisfaction
</p>
<button className='bg-coral-red px-10 py-3 text-white rounded-full hover:animate-bounce'>View Details</button>
</div>
<div className="lg:w-1/2 max-lg:w-full py-5 flex justify-center items-center max-lg:pt-10">
<img src={Showquality} alt="shoe-quality"/>
</div>
</div>

    </section>
  )
}

export default SpecialOffer
