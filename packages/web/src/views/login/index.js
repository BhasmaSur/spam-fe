import { IdpLogin } from "@spammetwice/auth";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from '@spammetwice/auth';

const Login = (props) => {
  const { location } = props;
  const dispatch = useDispatch();
  const history = useNavigate();
  const { setUserData, setTenantData, setTokenData} = auth()

  const validateFedAuthDetails = useCallback(async(user) =>{
    console.log(user)
  })
  const handleLoginSuccess = async (loginData) => {
    const { user, isLoggedIn } = loginData;
    if (isLoggedIn) {
      let tokenData = {
        access_token:"ashjfbasjfbja",
        refresh_token: "askgdhjavfhjavh"
      }
      setUserData(user)
      setTenantData("tenant3456")
      setTokenData(tokenData)
      history("/")
    }
  };

  return (
    <div>
      <IdpLogin
        redirectUrl={location}
        validateDetails={validateFedAuthDetails}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Login;
