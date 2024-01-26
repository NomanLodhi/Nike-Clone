import React from 'react'
import ReviewCards from './ReviewCards'
import Client1 from '../assets/images/customer1.jpeg'
import Client2 from '../assets/images/customer2.svg'
const CustomerReviews = () => {
  return (
    <section className='font-montserrat'>
      <h1 className='text-center text-4xl font-bold'>
        What Our <span className='text-coral-red'>Customers</span> Say?
      </h1>
      <p className='info-text text-center my-3'>
Hear genuine stories from  our satisfied customers about their exceptional experiences with us.
      </p>
      <div className="flex justify-evenly max-lg:flex-col gap-24 my-10 py-5">
        <ReviewCards 
        client={Client1}
        review='The attention to detail and the quality of the product exceeded my exceptations.Highly recommended!'
        Name='Morich Brown'
        />
        <ReviewCards
        client={Client2}
        review="The product not only met but exceeded my expectations.I'll definately be a returning customer! "
        Name='Lota Mongeskar'
        />
      </div>
    </section>
  )
}

export default CustomerReviews
