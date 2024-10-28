import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
        <div className='w-full bg-yellow-300 flex justify-center items-center border-b-2 py-2'>
            {/* left side */}
            <div className='w-[80%] h-full flex justify-between items-center'>
                <h1 className='text-xl font-bold mr-96'>Muhammad Owais Khan</h1>
            </div>
            {/* right side */}
            <div>
                <ul className='flex gap-x-5 mr-5'>
                    <li>
                        <Link className='hover:underline' href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className='hover:underline' href={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link className='hover:underline' href={'/about'}>About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header