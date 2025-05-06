import React from 'react'
import HeroSection from '../components/HeroSection'
import StorySection from '../components/Story'
import WhatYouWillLearnSection from '../components/Learn'
import CallToActionSection from '../components/CTA'
import InteractiveToolsPreview from '../components/Tools'
import ServicesPreview from '../components/Services'
import ClientSuccessStoriesPreview from '../components/Clients'
import WhatsAppListCTA from '../components/List'
import LibraryPreview from '../components/LibraryPreview'






const Home = () => {
  return (
    <div>
      <HeroSection/>
      <StorySection/>
      <WhatYouWillLearnSection/>
      <CallToActionSection/>
      <LibraryPreview/>
      <InteractiveToolsPreview/>
      <ServicesPreview/>
      <ClientSuccessStoriesPreview/>
      <WhatsAppListCTA/>
    </div>
  )
}

export default Home
