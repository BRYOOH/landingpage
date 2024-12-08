"use client";
import { useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = "responsive websites with speed optimization with next js frameworks. We aim to not only meet but exceed our customer's expectations."
const words = text.split(' ');

const Intro = () => {

  const scrollRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target:scrollRef, offset:['start end','end end']
  })
  
  const [currentWord,setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress,[0,1],[0,words.length]);

  useEffect(()=>{
    wordIndex.on('change',(latest)=>{
      setCurrentWord(latest);
    })
  },[wordIndex])

  return (
    <div className="py-24 "> 
    <div className="sticky top-20 md:top-32 lg:top-36">
    <div className=" flex justify-center ">
        <h1 className=" border border-lime-400 text-lime-400 rounded-full p-2 uppercase text-2xl"> &#10038; Introduction</h1>
      </div>
        <div className="mt-10 text-4xl md:text-5xl lg:text-6xl text-center px-4 md:px-10 lg:px-20 justify-center">
            <p className=" text-white font-medium" >
               Layers is a modern application web service provide with 
               <span>
               {words.map((word,wordIndex)=>(
                <span 
                className={twMerge("transition duration-500 text-white/15",wordIndex<currentWord && 'text-white')}
                key={wordIndex}>{`${word} `}</span>
               ))}
               </span>
            </p>
            <p className=" text-lime-400">Let&apos;s connect and work on projects</p>
        </div>
    </div>
    <div className="h-[150vh]" ref={scrollRef}></div>
    </div>
  )
}

export default Intro