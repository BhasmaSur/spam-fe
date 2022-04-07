import React from 'react'
import {data} from "@spammetwice/web/src/demo-data"
import SpamTemplate from '@spammetwice/common/src/components/spam-template'
export const LandingPage = () => {
    
  return (
     <div>
      <SpamTemplate props={data} />
    </div>
  )
}
