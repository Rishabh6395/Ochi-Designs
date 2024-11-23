/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    Shery.makeMagnet(".btn")
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructue relative -top-[1.5vw] mt-36 px-20 '>
            {["We Create", "Eye-Opening", "Presentation"].map((item, index)=>{
                return (
                <div className='masker '>
                    <div className='w-fit  flex items-end overflow-hidden'>
                        {index === 1 && (
                            <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration: 1.5}} className='mr-[1vw] w-[7.6vw] overflow-hidden rounded-md h-[4.7vw] -top-[.15vw] relative bg-green-500'>
                                <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </motion.div>)}
                        <h1 className='pt-[2vw] -mb-[0.1vw] uppercase text-[8vw] leading-[.75] font-foundersgrotesk'>{item}</h1>
                    </div>
                </div>
            )
            })}
            
        </div>
        <div className='border-t-[1px] py-5 px-20 border-zinc-800 mt-20 flex justify-between items-center'>
                {["For Public and Private Companies", "From the first pitch to IPO"].map((item, index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
                <div className='start flex items-center gap-5'>
                    <div className='btn px-5 py-2 border-[2px] font-light text-md uppercase  border-zinc-500 rounded-full'>Start the project</div>
                    
                </div>
        </div>
    </div>
  )
}

export default LandingPage