"use client";
import Image from 'next/image'
import { stacks } from '../Data/data'
import { motion } from 'framer-motion'
import { Fragment } from 'react';


const Stack = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 py-24 overflow-hidden gap-12'>
        <h1 className='border border-lime-400 rounded-full text-2xl py-2 px-1.5 text-lime-400 uppercase'> &#10038; Our stacks</h1>
        <span className='text-6xl text-lime-500 font-extrabold'>Tech <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>stacks</span> we specialize in:</span>
        <div className='flex flex-col md:flex-row mt-12 md:mt-8 gap-10 items-center justify-center'>
        <div className='flex flex-col lg:flex-row md:flex-1 items-center justify-center gap-12'>
            <p className='text-4xl text-center  text-white font-medium'>Showcasing <span className='bg-gradient-to-l from-purple-500 to-pink-500 bg-clip-text text-transparent'>skills and expertises</span> </p>
            <p className='text-center inline-flex text-2xl text-white/50'>These are our most valuable programming skills for developing the customers desired applications. </p>
        </div>
        <div className=' flex md:flex-1  mt-8 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent) h-[400px] md:h-[800px] gap-4  overflow-hidden '>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 '>
          <motion.div
          initial={{
            y:0,
          }} 
            animate= {{
              y:'-50%',
            }}
            transition={{
              duration:15,
              ease:'linear',
              repeat:Infinity,
            }}
            className='flex flex-col pb-4 gap-4 '>
              {Array.from({length:2}).map((_,i)=>(
                <Fragment key={i}>
                   {stacks.map((stack,index)=>(
                    <div className=' flex flex-col gap-3 p-4 md:w-[320px] w-full items-center  rounded-2xl justify-center aspect-video  bg-neutral-900 border-white/20' key={index}>
                      <Image className='size-24 rounded-2xl'
                    src={stack.image} alt=''/>
                    <h1 className='text-3xl text-center mt-6'>{stack.header}</h1>
                    <p className='text-center text-white/20 mt-2'>{stack.info}</p>
                    </div>
                    ))}
                </Fragment>      
              ))}
            </motion.div>
            
            <motion.div
           initial={{
            y:'-50%'
          }} 
            animate= {{
              y:0,
            }}
            transition={{
              duration:15,
              ease:'linear',
              repeat:Infinity,
            }}
             className=' flex flex-col-reverse pb-4 gap-4 '
            >
             {Array.from({length:2}).map((_,i)=>(
              <Fragment key={i}>
              {stacks.map((stack,index)=>(
                 <div className='flex flex-col p-4 items-center md:w-[320px] w-full rounded-2xl gap-3 justify-center aspect-video bg-neutral-900 border-white/20' key={index}>
                 <Image className='size-24 rounded-2xl'
                 src={stack.image} alt=''/>
                 <h1 className='text-3xl text-center mt-6'>{stack.header}</h1>
                 <p className='text-center text-white/20 mt-2'>{stack.info}</p>
                 </div>
              ))}  
              </Fragment>
             ))}
            </motion.div>
          </div>
        </div>
        </div>

    </div> 
  )
}

export default Stack