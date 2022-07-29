import React, { useEffect } from "react";
import { BLNavbar } from "@spammetwice/common/src/components/navbar-before-login";
import { useNavigate } from "react-router-dom";
import { auth } from "@spammetwice/auth";
import SpamTemplate from "@spammetwice/common/src/components/spam-template";
import {data as testData} from "@spammetwice/web/src/demo-data";
import {useQuery} from "@spammetwice/common";
import { httpService } from "@spammetwice/common/src/service-utils";
const Question = () => {
  const { getSessionData } = auth();
  const historyHook = useNavigate();
  const { user, accessToken, refreshToken, tenantId } = getSessionData();
  const fetchSpam = async ()=>{
    const res = await httpService('search','get',null,"spam")
    return res.data
  }
  const {data} = useQuery("spam", fetchSpam);
  const similarSpams = data;
  //console.log("spams",data)
  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      historyHook("/spam-page");
      return;
    }
  }, [historyHook]);
  return (
    <div>
      <BLNavbar />
      {data && <SpamTemplate spamData={data[4]} similarSpams={similarSpams}/>}
    </div>
  );
};

export default Question;
