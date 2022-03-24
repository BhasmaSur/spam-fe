import React from 'react';
import { BLNavbar } from "@spammetwice/common/src/components/navbar-before-login";
const Question = () => {
    const { user, accessToken, refreshToken, tenantId } = getSessionData();

        if (!user || !accessToken || !refreshToken || !tenantId) {
          historyHook("/login");
          return;
        }
    return (
        <div>
            <BLNavbar/>
        </div>
    );
};

export default Question;