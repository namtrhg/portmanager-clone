import {
  FeatureSection,
  GetProductSection,
  HeroSection,
  ProductInfoSection,
  ProductIntroSection,
  TimelineSection,
} from 'components/home'
import React from 'react'

const App = () => {
  return (
    <>
      <div className="gradient bg-no-repeat w-screen overflow-hidden">
        <HeroSection />
        <FeatureSection />
      </div>
      <TimelineSection />
      <ProductIntroSection />
      <div className="bg-white w-full h-[22px] absolute shadow-sm" />
      <div className="bg-blue-200">
        <ProductInfoSection />
        <GetProductSection />
      </div>
    </>
  )
}

export default App
