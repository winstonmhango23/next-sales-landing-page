import React from 'react'

export default function Questions () {
   
  return (
    <>
        <div className="py-4 bg-blue-100" id="FAQ">
        <div className="container px-4 py-8 mx-auto md:py-12">
        <h2 className="mb-8 text-2xl font-bold text-center md:text-4xl md:mb-12">FAQ</h2>
        <div className="mx-auto lg:w-2/3">
            <div className="p-8 mb-4 bg-white rounded md:mb-8">
                <h3 className="text-xl font-bold leading-tight md:text-2xl">Who is this course for?</h3>
                <p className="mt-2 text-lg leading-snug text-gray-700 lg:text-xl md:mt-3">This course is for front end developers, or anyone who wants to become one. As a developer you will learn the essential skills and thinking patterns to build production ready react apps. As a developer you will learn various design principles and how to improve both the usability and accessibility of the components youre already building.</p>
            </div>
            
            <div className="p-8 mb-4 bg-white rounded md:mb-8">
                <h3 className="text-xl font-bold leading-tight md:text-2xl">I do not know JavaScript (JS), can I still take this course?</h3>
                <p className="mt-2 text-lg leading-snug text-gray-700 lg:text-xl md:mt-3">Yes, you can. Although it helps if you are familiar with at least the basics of JavaScript, you will probaby do just fine. If during the course you feel like you cant keep up, I recommend you to check 
                    <a href="#" target="_blank" rel="noopener noreferrer">w3schools.com</a>.
                </p>
            </div>
            
            <div className="p-8 mb-4 bg-white rounded md:mb-8">
                <h3 className="text-xl font-bold leading-tight md:text-2xl">I am a php developer and I dont know any JavaScript/react, let alone JS. Can I still take this course?</h3>
                <p className="mt-2 text-lg leading-snug text-gray-700 lg:text-xl md:mt-3">You definitely can, but I recommend learning at least the very basics of HTML and CSS first. We dont do anything crazy in HTML or CSS, so basics will take you far.</p>
            </div>
            
            <div className="p-8 mb-4 bg-white rounded">
                <h3 className="text-xl font-bold leading-tight md:text-2xl">Why is this course free Jussi?</h3>
                <p className="mt-2 text-lg leading-snug text-gray-700 lg:text-xl md:mt-3">This course is free because I believe that by teaching I can have a greater impact on peoples lives. I have been privileged to learn and I want to pass my knowledge forward. The easiest way to do that is to make the content available for everyone, for free.</p>
            </div>
            
            <div className="p-8 mb-4 bg-white rounded">
                <h3 className="text-xl font-bold leading-tight md:text-2xl">Are the lessons linked so that I have to go through them all or can I just pick what I like?</h3>
                <p className="mt-2 text-lg leading-snug text-gray-700 lg:text-xl md:mt-3">You can pick what you like. The only thing linking the individual lessons is the small design system we will build at the beginning of the course. Bear in mind though that I designed the lesson order so that we start with basics and proceed to more difficult components towards the end.

                </p>
            </div>
            
            <div className="p-8 mb-4 bg-white rounded">
                <h3 className="text-xl font-bold leading-tight md:text-2xl">I love your course! Will you make another one?</h3>
                <p className="mt-2 text-lg leading-snug text-gray-700 lg:text-xl md:mt-3">Thank you for your kind words! I am planning to create more courses in the future. 
                    <a href="#top">Sign up

                    </a> to this course and I will email you as soon as I have more information to share. If you have ideas for future content, 
                    <a href="#" target="_blank" rel="noopener noreferrer">let me know</a>.
                </p>
            </div>
            
            <div className="p-8 mb-4 bg-white rounded">
                <h3 className="text-xl font-bold leading-tight md:text-2xl">I spotted a bug, what do I do?</h3>
                <p className="mt-2 text-lg leading-snug text-gray-700 lg:text-xl md:mt-3">Please raise an issue on the 
                    <a href="#" target="_blank" rel="noopener noreferrer">course repository</a>.
                </p>
            </div>
          
            
        </div>
    </div>
    </div>

    </>
  )
}
