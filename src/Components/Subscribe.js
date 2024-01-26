import React from 'react'

const Subscribe = () => {
  return (
    <section className='padding-x font-montserrat' >
     <div className='flex justify-center max-lg:flex-col items-center'>
<div className="lg:w-1/2">
<h1 className='font-montserrat text-4xl font-bold py-4 pe-7'>Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h1>
</div>
<div className="lg:w-1/2 max-md:w-full ">
<div className="border-2 p-2 flex rounded-full max-lg:mt-10 justify-normal">
<input type="text" placeholder='Enter Mail Here' className='border-0 focus-within:outline-none px-3 w-[70%]' />
<button className='bg-coral-red text-white py-3 w-[30%] rounded-full'>
  Sign Up
</button>
</div>

</div>
     </div>
    </section>
  )
}

export default Subscribe
