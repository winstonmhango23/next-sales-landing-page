import React from "react"

export default function VideoComponent (){
    return (
        <>
        {
            /*<div className="relative">
        
         <video  className="mx-auto mt-4 bg-blue-300 rounded xl:w-2/3 md:mt-12 js-video" >
         </video>
        </div>*/
        }

        <div className="relative">
    		<div className="absolute z-20 flex items-center justify-center w-32 h-32 bg-blue-500 bg-opacity-50 rounded-full cursor-pointer hover:bg-opacity-75 js-play-button" value="play" 
            style={{left: '50%', top: '50%', transform: 'translateX(-50%) translateY(-50%)'}}>
              

               	<svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 20L0 0V40L29 20Z" fill="white"></path>
               	</svg>
            </div>

            <video src="/videos/intro-video.wmv" className="mx-auto mt-4 bg-blue-300 rounded xl:w-2/3 md:mt-12 js-video" poster="/images/undraw_next_js_-8-g5m.svg" autoPlay="" playsinline="" muted="" loop="">
             </video>
        </div>
    </>
    )
}



