import React from "react"
import MarketArea from "./patials/intro-area/MarketArea"
import VideoComponent from "./patials/intro-area/VideoComponent"
import SubscriptionForm from "./patials/intro-area/SubscriptionForm"
import IntroText from "./patials/intro-area/IntroText"

export default function IntroArea() {
    
    return (
    <>
        <IntroText />
        <MarketArea />
        <VideoComponent />
        <SubscriptionForm />
        
    </>
        
    )
}