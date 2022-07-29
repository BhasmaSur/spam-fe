import React from 'react'
import {data} from "@spammetwice/web/src/demo-data"
import SpamTemplate from '@spammetwice/common/src/components/spam-template'
import {useQuery} from "@spammetwice/common";
import { httpService } from "@spammetwice/common/src/service-utils";

export const LandingPage = () => {
  const fetchSpam = async ()=>{
    const res = await httpService('search','get',null,"spam")
    return res.data
  }
  const {data} = useQuery("spam-page", fetchSpam);
  const similarSpams = data;
  return (
     <div>
       {data && <SpamTemplate spamData={data[4]} similarSpams={data}/>}
    </div>
  )
}
