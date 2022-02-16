import React from 'react'
import Image from 'next/image'

export default function Author () {
   
  return (
    <>
    <div className="items-center mx-auto mt-10 mb-6 text-center md:text-left md:flex  md:mt-12 md:w-3/4 lg:w-2/3 xl:w-1/2">
      <Image src="/images/win.jpg" alt="Winston Mhango, the author of next js course" className="mx-auto mb-2  rounded-full md:mr-4 md:mb-0" lazy="" width="160" height="160"/>
      <div className='md:ml-6'>
          <h3 className="text-lg font-bold leading-snug md:text-xl">Meet your teacher</h3>
          <p className="mt-1 leading-snug text-gray-700 md:text-lg">Hi! I am 
              <a href="https://twitter.com/winstonmhango23" target="_blank" rel="noopener noreferrer">Winston JC Mhango</a>
              , a developer with 6+ years of professional experience. I have worked with over 30 companies, both startups and corporations. See you in the course!
        </p>
    </div>
  </div>
  </>
  )
}
