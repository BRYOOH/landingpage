"use client";
import {data }from '@/app/Components/Data/data'
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Faqs = () => {

  const [Index, setIndex] = useState(0);

  return (
    <div className="py-24">
        <div className="flex flex-col items-center gap-6">
        <h1 className="border border-lime-400 text-lime-400 rounded-full px-4 py-1.5 uppercase text-2xl"> &#10038; Features</h1>
        <h2 className="text-6xl font-bold mt-6 text-center"> Got questions? We have the  <span className="text-lime-500"> answers</span></h2>
        <div className="mt-12 flex gap-6 p-4 flex-col">
            {data.map((quiz,quizIndex)=>(
                <div key={quizIndex} 
                onClick={()=>setIndex(quizIndex)}
                className=' rounded-xl p-4 bg-neutral-700 w-full md:w-[800px]  '>
                    <div className='flex justify-between'>
                    <h1 className='font-medium'>{quiz.question}</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className={twMerge("feather feather-plus text-lime-400 flex-shrink-0 transition duration-500", Index==quizIndex && 'rotate-45')}>
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                    {Index==quizIndex && 
                    <AnimatePresence>
                    <motion.div 
                    initial={{
                      height:0,
                      marginTop:0,
                    }}
                    animate={{
                      height:'auto',
                      marginTop:24,
                    }}
                    exit={{
                      height:0,
                      marginTop:0,
                    }}
                    className={twMerge('overflow-hidden')}>
                    <p className= 'text-white/50'>{quiz.answer}</p>
                    </motion.div>
                    </AnimatePresence>
                    }
                    
                </div>
            )
            )}
        </div>
        </div>
    </div>
  )
}

export default Faqs