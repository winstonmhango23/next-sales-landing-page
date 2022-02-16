import React from 'react'
import Image from 'next/image'

export default function Syllabus () {
   
  return (
    <>
      <div className="bg-white container px-4 py-8 mx-auto md:py-12 lg:pt-16 lg:pb-24" id="content">
        <h2 className="text-2xl font-bold text-center md:text-4xl md:mb-2">Course content</h2>
        <p className="mx-auto text-xl leading-snug text-center text-gray-700 lg:w-2/5 lg:mb-12">The course consists of six individual sections. These sections have a number of lessons brocken down to explain the main concepts with a project aspect area.</p>
        
        <div className="container flex flex-wrap content-center justify-center mx-auto mt-8 p-8 ">
            <div className="shadow-md rounded-lg m-4  p-3">
                
                <div className="flex items-center justify-center ">
                  <Image src="/images/undraw_react_y-7-wq (1).svg" alt=""  width ='200' height= '200'/>
              </div>

                <h3 className="mb-1 font-bold mt-2 font-bold leading-none text-md md:mt-4">1.React Components</h3>
                <p className="leading-snug text-gray-700">Understanding the basics of components and Single page apps.</p>
                
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block py-2 no-underline color-blue-500 hover:underline">View This Section→</a>

            </div>
            
            <div className="shadow-md rounded-lg m-4  p-3">
                <div className="flex items-center justify-center ">
                  <Image src="/images/undraw_next_js_-8-g5m (1).svg" alt=""  width='200' height='200'/>
              </div>

                <h3 className="mb-1 font-bold mt-2 font-bold leading-none text-md md:mt-4">2.Routing/Next Page Component</h3>
                <p className="leading-snug text-gray-700">Learn how pages work as components and page based routing.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block py-2 no-underline color-blue-500 hover:underline">View This Section→</a>
              </div>

          <div className="shadow-md rounded-lg m-4  p-3">	
            <div className="flex items-center justify-center ">
                  <Image src="/images/Online_banking_SVG.svg" alt=""  width='200' height='200'/>
              </div>

                <h3 className="mb-1 font-bold mt-2 font-bold leading-none text-md md:mt-4">3.Front-end Pre-rendering</h3>
                <p className="leading-snug text-gray-700">Learn how NEXT JS pre-renders html and content at the cliend side.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block py-2 no-underline color-blue-500 hover:underline">View This Section→</a>
            </div>
            
            <div className="shadow-md rounded-lg m-4  p-3">
                <div className="flex items-center justify-center ">
                  <Image src="/images/Delivery_app_SVG.svg" alt=""  width='200' height='200'/>
              </div>

                <h3 className="mb-1 font-bold mt-2 font-bold leading-none text-md md:mt-4">4.Server side Pre-rendering</h3>
                <p className="leading-snug text-gray-700">Learn how NEXT JS pre-renders html and content at server side.</p>

                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block py-2 no-underline color-blue-500 hover:underline">View This Section→</a>
            </div>

            <div className="shadow-md rounded-lg m-4  p-3">
                <div className="flex items-center justify-center ">
                  <Image src="/images/Cryptocurrency_SVG.svg" alt=""  width='200' height='200'/>
              </div>

                <h3 className="mb-1 font-bold mt-2 font-bold leading-none text-md md:mt-4">5.Data Fetching </h3>
                <p className="leading-snug text-gray-700">Learn how to fetch and pre-render data both at front and back-end</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block py-2 no-underline color-blue-500 hover:underline">View This Section→</a>
            </div>

            <div className="shadow-md rounded-lg m-4  p-3">
                <div className="flex items-center justify-center ">
                  <Image src="/images/Data_analysis_SVG.svg" alt=""  width='200' height='200'/>
              </div>

                <h3 className="mb-1 font-bold mt-2 font-bold leading-none text-md md:mt-4">6.API Routing</h3>
                <p className="leading-snug text-gray-700">Understanding what is API feature and how to Create APIs in NEXT JS</p>

                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block py-2 no-underline color-blue-500 hover:underline">View This Section→</a>
            </div>

            <div className="shadow-md rounded-lg m-4  p-3">
                <div className="flex items-center justify-center ">
                  <Image src="/images/payment_completed_SVG.svg" alt=""  width='200' height='200'/>
              </div>

                <h3 className="mb-1 font-bold mt-2 font-bold leading-none text-md md:mt-4">7.Styling in NEXT JS</h3>
                <p className="leading-snug text-gray-700">Understanding how to apply different styling methods in NEXT JS apps</p>

                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block py-2 no-underline color-blue-500 hover:underline">View This Section→</a>
            </div>

            <div className="shadow-md rounded-lg m-4  p-3">
                <div className="flex items-center justify-center ">
                  <Image src="/images/Financial_insurance_SVG.svg" alt=""  width='200' height='200'/>
              </div>

                <h3 className="mb-1 font-bold mt-2 font-bold leading-none text-md md:mt-4">8.Other NEXT JS Features</h3>
                <p className="leading-snug text-gray-700">Learn other features like _app.js, head component, Image component </p>

                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block py-2 no-underline color-blue-500 hover:underline">View This Section→</a>
            </div>
        </div>
    </div>
    </>
  )
}
