import Image from 'next/image'
import React from 'react'

export default function HeroText() {
  return (
    <div className='flex justify-center flex-col items-center sm:-mb-28 xl:-mb-0'>
        <img
            src={'/logo.png'}
            alt='logo'
            className='md:w-[200px] md:h-[100px] w-[100px] h-[40px]'
        />
        <div className='text-3xl sm:text-6xl xl:text-8xl  text-gray-700 font-black md:mt-2'>Where Your Style Story Unfolds</div>
    </div>
    
  )
}
