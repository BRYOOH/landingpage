"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/app/Assets/logo.jpeg'
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

const Links = [
    {
    id:"1",
    name:"Home"
    },
    {
    id:"2",
    name:"Features"
    },
    {
    id:"3",
    name:"Integration"
    },
    {
    id:"4",
    name:"FAQs"
    },
];

const Navbar = () => {
  const [open, isOpen] = useState(false);
  return (
    <>
 <div className=' w-full p-4 flex items-center justify-center fixed top-0 z-50 '>
  <div className='border bg-neutral-950/70 border-white/50 w-full  lg:w-[800px] mx-5 md:mx-24 rounded-[40px] md:rounded-full backdrop-blur'>
  <div 
  className='grid grid-cols-2 lg:grid-cols-3 items-center m-2 p-2'>
  <div className='inline-flex gap-2'>
    <Image src={logo} alt=''
    className='size-8 rounded-full'
    />
    <h1 className='text-2xl font-bold'>Layers</h1>
  </div>
  <div className='lg:flex gap-2 lg:gap-4 hidden'>
    {Links.map((link)=>{
        return <h2 key={link.id}>{link.name}</h2>
    })}
  </div>
  <div className='lg:flex gap-4 hidden justify-end'>
    <button className='rounded-full px-2 py-1 border border-lime-300/50 w-20'>Login</button>
    <button className='rounded-full px-2 py-1 bg-lime-400 w-20 text-white'>Signup</button>
  </div>
  <div className='flex justify-end pr-4'>
  <svg xmlns="http://www.w3.org/2000/svg" 
  width="24" height="24" viewBox="0 0 24 24" 
  fill="none" stroke="currentColor" strokeWidth="2" 
  strokeLinecap="round" strokeLinejoin="round" 
  className="feather feather-menu lg:hidden"
  onClick={()=>isOpen(!open)}>
    <line x1="3" y1="6" x2="21" y2="6"
    className={twMerge("origin-left transition",open && 'rotate-45 -translate-y-1')}></line>
    <line x1="3" y1="12" x2="21" y2="12"
    className={twMerge("transition",open && 'hidden')}
    ></line>
    <line x1="3" y1="18" x2="21" y2="18"
    className={twMerge("origin-left transition",open && '-rotate-45 translate-y-1')}></line>
    </svg>
  </div>
  </div>
  <AnimatePresence>
  {open && 
  <motion.div 
  initial={{height:0}}
  animate={{height:'auto'}}
  exit={{height:0}}
  className=' overflow-hidden '>
    <div className='flex flex-col items-center py-4 gap-4'>
    {Links.map((link)=>(
      <p key={link.id}>{link.name}</p>
    ))}
      <button className='rounded-full px-2 py-1 border border-lime-300/50 w-20'>Login</button>
      <button className='rounded-full px-2 py-1 bg-lime-400 w-20 text-white'>Signup</button>
    </div>
  </motion.div>
  }
  </AnimatePresence>
  </div>
 </div> 
 <div className='pb-[86px]'>

 </div>
 </>
  )
}

export default Navbar