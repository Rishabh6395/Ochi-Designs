/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
  Shery.makeMagnet(".btn")
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-neueMontrealregular tracking-tight text-[4vw] leading-[4.5vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-10 border-[#9baf50] mt-14'>
            <div className='w-1/2 '>
                <h1 className='text-7xl '>Our approach: </h1>
                <button className='btn px-10 uppercase items-center py-6 flex gap-10 mt-10 bg-zinc-900 rounded-full text-white'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-[50vw] overflow-hidden h-[70vh] rounded-2xl bg-[#96a758]'>
              <img className='w-full h-full ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default About