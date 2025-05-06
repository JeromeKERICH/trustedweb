import React from 'react'
import SubscribeForm from '../subscription/SubscribeForm';
import { useEffect } from 'react'

import FaqSection from '../subscription/Faqs'

const SubPage = () => {

  useEffect(() => {
              window.scrollTo(0, 0);
          }, []);
  return (
    <div>
      <SubscribeForm/>
      <FaqSection/>
    </div>
  )
}

export default SubPage
