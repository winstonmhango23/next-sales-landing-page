import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar () {
   
  return (
    <div className="items-center justify-between py-4 md:flex">
      <Link href='/'>
        <a><Image src={"/images/coding.png"} height= '40' width= '40' alt="logo" /></a>
        
        </Link>
      <nav className="flex justify-center mt-4 md:mt-0">
        <ul className="flex flex-wrap">
          <li>
            <Link href='#content'>
              <a className='block px-2 py-1 text-gray-600 no-underline md:p-3 hover:text-gray-900'>Content</a>
            </Link>
          </li>
          <li>
            <Link href='#FAQ'>
              <a className='block px-2 py-1 text-gray-600 no-underline md:p-3 hover:text-gray-900'>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href='#author'>
              <a className='block px-2 py-1 text-gray-600 no-underline md:p-3 hover:text-gray-900'>Author</a>
            </Link>
          </li>
          <li>
            <Link href='#signup'>
              <a className='block px-2 py-1 text-gray-600 no-underline md:p-3 hover:text-gray-900'>Sign up</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  
  )
}
