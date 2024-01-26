import React from 'react'
import star from '../assets/icons/star.svg'
const ReviewCards = (props) => {
  return (
    <div className='flex flex-col justify-center items-center py-3'>
      <img src={props.client} alt="" width={150} className='rounded-full' />
      <p className="info-text text-center px-22 py-3">
        {props.review}
      </p>
      <div className='flex px-2 items-center'>
      <img src={star} alt="star-icon" className='py-3' height={20} width={20} />
    <p className="info-text px-2">(4.5)</p>
    </div>
    <p className='font-bold text-2xl '>{props.Name}</p>
    </div>
  )
}

export default ReviewCards
