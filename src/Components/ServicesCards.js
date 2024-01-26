import React from 'react'

const ServicesCards = (props) => {
  return (
    <div className='flex flex-col justify-start shadow-lg p-3 lg:w-[30%] rounded-2xl w-full'>
      <img src={props.headIcon} className='bg-coral-red rounded-full p-2 my-3' height={50} width={50} />
      <p className="font-bold py-2 text-2xl">{props.title}</p>
      <p className="info-text my-3">{props.description}</p>
    </div>
  )
}

export default ServicesCards
