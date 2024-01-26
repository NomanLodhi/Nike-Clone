import React from 'react'
import pic from '../assets/images/offer.svg'
const SuperOffer = () => {
  return (
    <section className='flex items-center max-lg:flex-col padding-x font-montserrat' >
<div className='lg:w-1/2'>
<img src={pic} alt="" />
</div>
<div className="lg:w-1/2 max-lg:pt-5">
<h1 className='py-3 font-bold text-4xl '>
<span className='text-coral-red '>Special</span> Offer
</h1>
<p className='info-text py-5'> 
Embark on a shopping journey that redefines your exxperience with unbeatable deals. From premier selections to incredible savings,we offer unparalleled value that sets us apart.   
</p>
<p className='info-text py-5'> 
Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional. 
</p>
<div className="flex gap-5 my-3 max-md:flex-col max-lg:pt-5">
<button className='bg-coral-red px-10 py-4 flex font-montserrat text-white rounded-full hover:animate-bounce'>Shop Now</button>
<button className='border-gray-500 border-2 px-10 py-3 flex info-text rounded-full hover:animate-bounce'>Learn more</button>
</div>
</div>
    </section>
  )
}

export default SuperOffer
