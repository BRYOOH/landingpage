import React from 'react'
import { Links } from '../Data/data'
import Image from 'next/image'
import logo from '@/app/Assets/logo.jpeg'


const Footer = () => {
  return (
    <div className='py-14 md:px-10 px-2 border border-neutral-300/50 rounded-xl md:m-4 m-1'>
      <div className='flex flex-col lg:flex-row items-center gap-8 justify-center md'>
        <div className='flex  flex-1  gap-8 lg:pl-20'>
         <Image src={logo} alt=''
         className='size-10'
         />
         <h1 className='font-bold text-4xl text-lime-400'>Layers</h1>
        </div>
        <div className='flex items-center justify-center flex-1 gap-2 md:gap-8 lg:gap-16'>
        {Links.map((link)=>(
          <p key={link.id}
          className='text-xl text-neutral-500'
          >{link.name}</p>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Footer