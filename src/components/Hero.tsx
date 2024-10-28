import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Hero() {
  return (
    <div className='w-full h-[400px] flex justify-center mt-8'>
        <div className=' h-full w-full bg-black flex justify-between py-20 px-20 pt-5'>
            {/* left side */}
            <div className='text-white mt-20'>
                <div>
                    <h1 className='font-bold text-5xl mt-35'>I'm Front-End Developer</h1>
                </div>
                <div>
                <button className='font-bold underline underline-offset-8 mt-3 ml-48'>
                    <Link className='hover:underline' href={'/contact'}>Contact Now</Link>
                    </button>
                </div>
            </div>
            {/* right side */}
            <div>
                <Image src={'/images/Portfolio-image-.png'} width={233} height={150} alt='Portfolio Image' ></Image>
            </div>
        </div>
    </div>
  )
}

export default Hero