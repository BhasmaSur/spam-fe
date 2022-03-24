import React from "react";
import { BLNavbar } from "@spammetwice/common/src/components/navbar-before-login";
import { useNavigate } from "react-router-dom";
import { auth } from "@spammetwice/auth";

const Question = () => {
  const { user, accessToken, refreshToken, tenantId } = getSessionData();
  const historyHook = useNavigate();
  const { getSessionData } = auth();
  if (!user || !accessToken || !refreshToken || !tenantId) {
    historyHook("/login");
    return;
  }
  return (
    <div>
      <BLNavbar />
    </div>
  );
};

export default Question;
