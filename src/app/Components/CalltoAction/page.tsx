'use client';
import { AnimationPlaybackControls, motion, useAnimate } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge';


const CalltoAction = () => {
  
  const [isHovered,setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope,animate] = useAnimate();

  useEffect(()=>{
    animation.current=animate(scope.current,{x:"-50%"},
      { duration: 20,
      ease:'linear',
      repeat:Infinity});
  },[]);

  useEffect(()=>{
    if(animation.current){
      if(isHovered){
        animation.current.speed = 0.25;
      } else{
        animation.current.speed=1;
      }
    }
  },[isHovered]);

  return (
    <div className='py-24'>
      <div className='flex overflow-x-clip p-4 '>
        <motion.div 
        ref={scope}
        className='flex flex-none gap-16 pr-16 text-8xl'
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        >
        {Array.from({length:10}).map((_,i)=>(
          <div 
          key={i} className='flex items-center cursor-pointer'>
             <p className={twMerge('font-medium',isHovered && "text-lime-400")}><span className='text-lime-400'>&#10038;</span> Try it for Free</p>
          </div>
        ))}
        </motion.div>
      </div> 
    </div>
  )
}

export default CalltoAction