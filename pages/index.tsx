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
      <div className="gradient">
        <HeroSection />
        <FeatureSection />
      </div>
      <TimelineSection />
      <ProductIntroSection />
      <div className="bg-white w-full h-5 absolute" />
      <div className="bg-blue-200">
        <ProductInfoSection />
        <GetProductSection />
      </div>
    </>
  )
}

export default App
