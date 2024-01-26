import React from 'react'
import product1 from '../assets/images/shoe4.svg'
import product2 from '../assets/images/shoe5.svg'
import product3 from '../assets/images/shoe6.svg'
import product4 from '../assets/images/shoe7.svg'
import star from '../assets/icons/star.svg'
import ProductCard from './ProductCard'
const PopularProducts = () => {
  return (
 <section  className='padding-x max-container'>
<div className="my-4">
  <h1 className='font-montserrat text-4xl font-bold py-4'>Our <span className="text-coral-red">Popular</span> Products</h1>
  <p className='info-text lg:pe-96'>Experience top notch quality and style with our sought after selections. Discover a world of comfort, design  and value. </p>
</div>
<div className="flex max-md:flex-col md:grid md:grid-cols-2 lg:flex gap-4 py-6">
  <ProductCard star={star} product={product1}/>
  <ProductCard star={star} product={product2}/>
  <ProductCard star={star} product={product3}/>
  <ProductCard star={star} product={product4}/>

  
</div>

 </section> )
}

export default PopularProducts
