import React from 'react'

export default function SubscriptionForm () {

    const registerUser = async event => {
        event.preventDefault()
    
        const res = await fetch(
          'https://hooks.zapier.com/hooks/catch/123456/abcde',
          {
            body: JSON.stringify({
              name: event.target.name.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )
    
        const result = await res.json()
        // result.user => 'Ada Lovelace'
      }



    return (
        <div className="relative z-10 mx-auto mt-6 overflow-hidden transition-all duration-300 ease-out bg-white rounded-lg shadow-lg md:-mt-16 md:w-3/4 lg:w-2/3 xl:w-1/2 js-sign-up" id="signup">

               
        <div className="p-6 md:p-8">
        <h3 className="text-lg font-bold leading-snug text-gray-700 md:text-2xl">Become<span className="underline decoration-sky-500"> a Highly Demanded Developer</span> with Best<span className="highlight"> React Production Ready Skill set</span> access now</h3>

            <p className="mt-1 leading-snug text-gray-700 md:text-xl">We will send you an email to your inbox with details of how to access the course,<span className="highlight">once you enter the email below.</span>
            </p>

             <form onSubmit={registerUser}   id="subscription-form" name="subscription-form" className="mt-4" >
                    <label   className="block mb-1 text-sm font-bold cursor-pointer">Email Address
                    </label>
                 <div className="md:flex">
                   <input type="email" value={""} name="EMAIL"  autoComplete="email" className="block w-full p-3 placeholder-gray-700 border border-gray-500 rounded shadow-none appearance-none md:flex-1" id="email"/> 
                  
                   <input type="submit" name="subscribe" id="subscribe" value="Get the course" className="w-full px-6 py-3 mt-2 font-bold text-white bg-blue-500 rounded cursor-pointer md:mt-0 md:w-auto md:ml-2 hover:bg-blue-400 focus:bg-blue-600 js-sub-button"/>
                 </div>
             </form>
          </div>
     </div>
    )
}


