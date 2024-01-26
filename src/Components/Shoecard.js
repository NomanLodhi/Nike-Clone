import React from 'react'
import { useState } from 'react'
import bigShoeImg from '../assets/images/big-shoe1.png'
import bigShoeImg2 from '../assets/images/big-shoe2.png'
import bigShoeImg3 from '../assets/images/big-shoe3.png'
const Shoecard = (props) => {
   const [ShoeImg,setShoeImg]=useState(bigShoeImg)
    const Change=()=>{
      if(ShoeImg!==bigShoeImg){
    setShoeImg(bigShoeImg)
}
} 



    const Change2=()=>{
      if(ShoeImg!==bigShoeImg2){
    setShoeImg(bigShoeImg2)
    }

  
} 
    const Change3=()=>{
      if(ShoeImg!==bigShoeImg3){
    setShoeImg(bigShoeImg3)
    }
} 
    
  return (
    <div className='bg-hero lg:w-1/2 max-md:w-full'>
  <img src={ShoeImg} 
  alt="bigshoe"
  className='w-10/12 mx-auto mt-44' />
    <div className="flex items-center justify-center my-8 space-x-5">
    <button className={`w-[30%] `} onClick={Change} >

    <img src={props.ShoeImg} alt="" className='bg-card p-2 rounded-2xl cursor-pointer ' />
    </button>
    <button className='w-[30%]' onClick={Change2}>
    <img src={props.ShoeImg2} alt="" className='bg-card p-2 rounded-2xl cursor-pointer ' />
    </button>
    <button className='w-[30%]'onClick={Change3}>
    <img src={props.ShoeImg3} alt="" className='bg-card p-2 rounded-2xl cursor-pointer '/>
    </button>
  </div>
  </div>
  )
}

export default Shoecard
