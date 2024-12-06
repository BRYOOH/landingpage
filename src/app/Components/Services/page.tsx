import Image from 'next/image'
import React from 'react'
import avatar1 from '@/app/Assets/avatar1.jpeg'
import avatar2 from '@/app/Assets/avatar2.jpeg'
import avatar3 from '@/app/Assets/avatar3.jpeg'
import avatar4 from '@/app/Assets/avatar4.jpeg'


const Feature = [
    {id:'1',name:"React js"},
    {id:'2',name:"Next js"},
    {id:'3',name:"Tailwindcss"},
    {id:'4',name:"Node js"},
    {id:'5',name:"Springboot"},
]

const Services = () => {
  return (
    <div className='py-24 p-4 '>
        <div className='flex items-center flex-col  p-2'>
            <div className='flex flex-col items-center justify-center gap-12'>
            <h1 className="border border-lime-400 text-lime-400 rounded-full px-4 py-1.5 uppercase text-2xl"> &#10038; Features</h1>
            <h2 className='text-7xl text-lime-500 font-bold'>What do we offer </h2>
            </div>
  
            <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 '>
                <div className='bg-neutral-900 p-6 rounded-3xl border border-white/20 group'>
                    <div className='aspect-video flex items-center justify-center overflow-hidden'>
                        <div className='z-40 overflow-hidden size-20 border-4 border-lime-400 rounded-full p-1 bg-neutral-900'><Image src={avatar1} alt=''
                        className='rounded-full'/></div>
                        <div 
                        className='z-30 -ml-6 overflow-hidden size-20 border-4 border-sky-400 p-1 rounded-full bg-neutral-900'><Image src={avatar2} alt=''
                         className=' rounded-full '/></div>
                        <div className='z-20 overflow-hidden -ml-6 size-20 border-4 border-fuchsia-400 rounded-full p-1 bg-neutral-900'>
                        <Image src={avatar3} alt=''
                        className='rounded-full '/></div>
                        <div className='-ml-6 size-20 border-transparent group-hover:border-orange-500 transition relative overflow-hidden rounded-full border-4'>
                            <Image src={avatar4} alt="" 
                            className='size-full opacity-0 group-hover:opacity-100 absolute rounded-full transition duration-500'
                            />
                            <div className='size-full rounded-full bg-neutral-700 inline-flex justify-center items-center gap-2'>
                                {Array.from({length:3}).map((_,i)=>(
                                    <span className='size-1.5 rounded-full bg-white inline-flex ' key={i}></span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-2xl font-medium mt-2'> Project management</h3>
                        <p className='mt-3 text-white/50'>We optimize your webpage for quick and efficient performance</p>
                    </div>
                    </div>
                <div className='bg-neutral-900 p-6 rounded-3xl border border-white/20'>
                    <div className='aspect-video flex items-center p-2 text-center relative group'>
                        <p className='xl:text-6xl text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500'>
                            Contributed to <span 
                            className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>over 100</span>
                            <video src="/assets/run.mp4"  
                            autoPlay
                            muted
                            loop
                            className='absolute bottom-32 size-36 left-1/2 -translate-x-1/2 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 shadow-xl pointer-events-none'
                            />
                             projects
                        </p>
                    </div>
                    <div className=''>
                        <h3 className='text-2xl font-medium mt-6'> Speed optimization</h3>
                        <p className='mt-3 text-white/50'>We optimize your webpage for quick and efficient performance</p>
                    </div>
                </div>
                <div className='bg-neutral-900 p-6 rounded-3xl border border-white/20 group'>
                    <div className='aspect-video text-2xl text-black font-medium flex gap-4 items-center justify-center '>
                        <div 
                        className='w-28 bg-slate-200 border p-2 rounded-2xl outline outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-2 '>Shift</div>
                        <div className='w-12 bg-slate-200 border p-2 rounded-2xl outline outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-2 delay-150 '>C</div>
                        <div className='w-16 bg-slate-200 border p-2 rounded-2xl outline outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-2 delay-300'>Crtl</div>
                    </div>
                    <div className=''>
                        <h3 className='text-2xl font-medium mt-6'> Responsive websites</h3>
                        <p className='mt-3 text-white/50'>We create colorful and responsive websites with modern HTML practices</p>
                    </div>
                </div>
            </div>
            <div className=' mt-16 flex flex-wrap justify-center gap-10 '>
                {Feature.map((item)=>(
                    <div 
                    className='border rounded-2xl p-2 inline-flex px-3 py-1.5 items-center border-white/20 justify-center gap-2 bg-neutral-900 hover:scale-125 transition cursor-pointer group' key={item.id}>
                         <span className='bg-lime-400 size-5 rounded-full text-neutral-950 inline-flex items-center justify-center group-hover:rotate-45 transition duration-500'>&#10034;</span>
                         <span className='font-medium md:text-xl'>{item.name}</span>
                    </div>
                ))}
            </div> 
        </div>
    </div>
  )
}

export default Services