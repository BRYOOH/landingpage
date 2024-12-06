import React from 'react'

const Hero = () => {
  return (
    <div className='w-full flex justify-center items-center mt-20 p-4'>
      <div className='flex w-full md:w-[750px] items-center flex-col gap-7 '>
      <div 
      className=' font-extrabold text-gray-700 rounded-full border bg-gradient-to-r from-purple-400 to-pink-400 p-1'> &#10038; over 100 completed solutions </div>
      <h1 className='text-6xl font-bold'>Impactiful designs for user interactivity</h1>
      <div className='text-white/60 text-3xl'>Layers has intergrated many technology solutions in across african contries collaborating with more than 1000 developers to achive efficiency</div>
      <div className='flex border rounded-full w-[350px] md:w-[550px] mt-10 '>
        <input type="email" placeholder='Enter your email address'
        className='rounded-full p-3 w-[450px] bg-black'
        />
        <button 
        className='flex-1 bg-lime-500 text-black rounded-xl md:rounded-full'>Subscribe</button>
      </div>
      </div>
    </div>
  )
}

export default Hero