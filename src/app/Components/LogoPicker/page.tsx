"use client";
import React, { Fragment } from 'react'
import apple from '@/app/Assets/apple.png'
import bud from '@/app/Assets/budweiser.png'
import cocacola from '@/app/Assets/cocacola.png'
import starbucks from '@/app/Assets/starbucks.jpg'
import sponsor from '@/app/Assets/sponsor.jpg'
import nike from '@/app/Assets/nike.png'
import ranker from '@/app/Assets/ranker.png'
import Image from 'next/image'
import { motion } from 'framer-motion'


const logos= [
    {id:'1',image:apple},
    {id:'2',image:cocacola},
    {id:'3',image:bud},
    {id:'4',image:starbucks},
    {id:'5',image:nike},
    {id:'6',image:ranker},
    {id:'7', image:sponsor}
];

const Logo = () => {
  return (
    <div className='py-24 overflow-x-clip  w-full'>
        <div className='p-4'>
            <p className='text-white/50 text-center mb-16'>Meet our sponsors</p>
            <div className=' flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%, transparent)]'>
            <motion.div 
            animate={{
              x:'-50%',
            }}
            transition={{
              duration:20,
              ease:'linear',
              repeat:Infinity,
            }}
            className='gap-24 flex flex-none pr-24 items-center'>
              {Array.from({length:2}).map((_,i)=>(
                <Fragment key={i}>
                {logos.map((logo)=>(
                  <Image src={logo.image} key={logo.id} alt='' 
                  className='w-24'/>
               )
               )}
                </Fragment>
                 
              ))}
            </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Logo