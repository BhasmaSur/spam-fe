import React, { useEffect } from "react";
import { BLNavbar } from "@spammetwice/common/src/components/navbar-before-login";
import { useNavigate } from "react-router-dom";
import { auth } from "@spammetwice/auth";
import SpamTemplate from "@spammetwice/common/src/components/spam-template";
import {data} from "@spammetwice/web/src/demo-data"
const Question = () => {
  const { getSessionData } = auth();
  const historyHook = useNavigate();
  const { user, accessToken, refreshToken, tenantId } = getSessionData();
  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      historyHook("/landing-page");
      return;
    }
  }, [historyHook]);
  return (
    <div>
      <BLNavbar />
      <SpamTemplate props={data} />
    </div>
  );
};

export default Question;
