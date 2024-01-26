import React from 'react'
import ServicesCards from './ServicesCards'
import Dropshipping from '../assets/icons/truck-fast.svg'
import Payment from '../assets/icons/shield-tick.svg'
import Support from '../assets/icons/support.svg'
const Services = () => {
  return (
    <section className='max-container font-montserrat flex justify-center items-center flex-wrap gap-10'>
<ServicesCards
headIcon={Dropshipping}
title='Free Shipping'
description="Enjoy seamless shopping with our complimentary shipping service."/>    
<ServicesCards
headIcon={Payment}
title='Secure Payment'
description="Experience worry-free transactions with our secure payment options."/>    
<ServicesCards
headIcon={Support}
title='Love to help you'
description="Our dedicated team is here to assist you every step of the way."/>    
</section>
  )
}

export default Services
