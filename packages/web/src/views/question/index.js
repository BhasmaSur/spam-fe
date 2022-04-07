import React, { useEffect } from "react";
import { BLNavbar } from "@spammetwice/common/src/components/navbar-before-login";
import { useNavigate } from "react-router-dom";
import { auth } from "@spammetwice/auth";
import SpamTemplate from "@spammetwice/common/src/components/spam-template";

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
  const data = {
    heading:
      "how is this spam, whay st do you think about it, its exprensive, they asked",
    description:[
      "askdbasdbjsabdjsa asjdbjasbd sajdjasdjsads absdjasbd jsabdjasdvjas asjbdjas jvasjdvsa dsajdvjsavdsa djasvdjsavdjas djsadvjsad sajdvjasvdas djasvdjsavdjas djsavdjasvdjasdj asdjas",
      "asdbha jsadb ajsdbjsa dkashdias sakdhkasd kasdksa",
      "a sdasjdbas djasud asdhas dasidhasud awdia c9a8d9asdiasdhiasd saidhasidas dia"
    ]

  };
  return (
    <div>
      <BLNavbar />
      <SpamTemplate props={data} />
    </div>
  );
};

export default Question;
