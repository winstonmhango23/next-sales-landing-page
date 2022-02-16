import React from "react"
import Image from "next/image"

export default function MarketArea() {
    return (
        <>
        <div className="flex justify-center mt-4 md:mt-8">
            <div className="w-36 p-4 bg-white rounded-lg shadow-md md:px-8 md:py-6">
                <div className="flex items-center justify-center h-12">

                    <Image src="/images/undraw_react_y-7-wq.svg" width='130' height='130' alt="react-components" />

                </div>
                <h4 className="mt-2 font-bold leading-none text-md md:mt-4">React Components</h4>
            </div>
            <div className="self-center px-2 text-xl leading-none text-gray-500 md:px-4 md:text-3xl md:text-gray-400">→
            </div>

            <div className="w-36 p-4 bg-white rounded-lg shadow-md md:px-8 md:py-6">
                <div className="flex items-center justify-center h-12">

                    <Image src="/images/undraw_next_js_-8-g5m.svg" width='130' height='130' alt="next-pages" />

                </div>
                <h4 className="mt-2 font-bold leading-none text-md md:mt-4">Next Pages/Routes</h4>
            </div>
            <div className="self-center px-2 text-xl leading-none text-gray-500 md:px-4 md:text-3xl md:text-gray-400">→
            </div>

            <div className="w-36 p-4 bg-white rounded-lg shadow-md md:px-8 md:py-6">
                <div className="flex items-center justify-center h-12">

                    <Image src="/images/Delivery_app_SVG.svg" width='130' height='130' alt="next-prerendering" />
                    
                </div>
                <h4 className="mt-2 font-bold leading-none text-md md:mt-4">Pre-rendering</h4>
             </div>
                
        </div>
        </>
    )
}