import React from 'react'

export default function Footer () {
   
  return (
    <>
    {/* top footer --marketing */}
    <div className="py-8 bg-white md:py-12 lg:py-20">
      <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold text-center md:text-4xl md:mb-2">Sign up for free</h2>
          <p className="mx-auto text-xl leading-snug text-center text-gray-700 lg:w-2/5 lg:mb-12">Get the course today, it is free to get started!</p>
          <form action="#" method="post" id="suscribe-form" name="suscribe" className="mx-auto mt-4 md:w-2/3 lg:w-2/5">
              <label className="block mb-1 text-sm font-bold cursor-pointer">Email Address</label>
  
              <div className="md:flex"> 
                <input type="email" value="" name="email" className="block w-full p-3 placeholder-gray-700 border border-gray-500 rounded shadow-none appearance-none md:flex-1" id="footer-email"/> 
                <input type="submit" name="subscribe" id="suscribe-footer" value="Get the course" className="w-full px-6 py-3 mt-2 font-bold text-white bg-blue-500 rounded cursor-pointer md:mt-0 md:w-auto md:ml-2 hover:bg-blue-400 focus:bg-blue-600 js-sub-button"/>
              </div>
          </form>
      </div>
    </div>
    {/* bottom footer --social icons */}
    <div className="flex justify-center py-8">
        <ul className="flex list-none">
            <li className="pr-3 mr-3 border-r border-gray-400">
                <a href="https://www.linkedin.com/in/winston-mhango-401980ab/" target="_blank" rel="noopener noreferrer" className="text-gray-700 no-underline hover:text-blue-500">LinkedIn
								</a>
            </li>

            <li className="pr-3 mr-3 border-r border-gray-400">
                <a href="https://facebook.com/winstonmhango23" target="_blank" rel="noopener noreferrer" className="text-gray-700 no-underline hover:text-blue-500">FaceBook
								</a>
            </li>
            <li className="pr-3 mr-3 border-r border-gray-400">
                <a href="https://instagram.com/winstonmhango23" target="_blank" rel="noopener noreferrer" className="text-gray-700 no-underline hover:text-blue-500">Instagram
								</a>
            </li>
            <li className="pr-3 mr-3 border-r border-gray-400">
                <a href="https://github.com/winstonmhango23" target="_blank" rel="noopener noreferrer" className="text-gray-700 no-underline hover:text-blue-500">Github
								</a>
            </li>
        </ul>
    </div>

   </>
  )
}
