import React from 'react'
import Image from 'next/image'

export default function AboutAuthor () {
   
  return (
    <>
      <div className="bg-blue-100" id="author">
        <div className="container px-4 mx-auto lg:pt-8">
            <div className="items-center mx-auto text-center md:flex md:text-left md:w-2/3">
                <div className="flex-1 mb-8 md:mb-0">
                    <h3 className="mb-2 text-2xl font-bold leading-tight md:text-3xl">Hi, my name is Winston JC Mhango</h3>
                    <p className="text-lg leading-snug text-gray-700">I am a full stack developer (I design and develop both front-end and back-end) from Karonga, Malawi. Currently I live in Lilongwe(Malawi). I am a passionate developer. I always find myself learning and catching up on new technologies, developing up-to-date apps. An avid bloger and share content on my blogging site and social media handles. Am also an Author of Illustrated Guide to Django(A python and Django Framework).Will see you in the Course!
                        <a href="https://twitter.com/winstonmhango23" target="_blank" rel="noopener noreferrer">Twitter</a> or send me an 
                        <a href="mailto:winstonmhango@gmail.com">email</a>.
                    </p>
                </div>
                
                <div className="flex-1 ml-2">
                    <Image src="/images/winston.svg"  alt="Winston Mhango" loading="lazy" className="block w-1/2 rounded-full mx-auto md:w-auto " width="351" height="583"/>
                </div>
            </div>
        </div>
      </div>
    
    </>
  )
}
