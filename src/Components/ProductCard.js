import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='flex flex-col'>
    <img src={props.product} alt="product-1" />
    <div className='flex px-2 items-center'>
      <img src={props.star} alt="star-icon" className='py-3' height={20} width={20} />
    <p className="info-text px-2">(4.5)</p>
    </div>
    <p className="font-bold font-montserrat py-2">Nike Air Jordan-100</p>
    <p className="text-coral-red font-montserrat font-semibold">$220.20</p>
  </div>
  )
}

export default ProductCard
