import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Paper,
  Typography,
  Box,
  Grid,
  TextField,
} from "@spammetwice/common";
import { InputField } from "@spammetwice/common";
import "./idplogin.css";

const IdpLogin = (props) => {
  const { redirectUrl, validateDetails, onSuccess } = props;
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const historyHook = useNavigate();

  const handleSignUp = () =>{
    historyHook("/signup")
  }

  const verifyUser = () => {
    if (!userName) {
      alert("enter user name");
    }
    if (userName && !password) {
      alert("enter password");
    }
    if (userName && password && userName === "ramu" && password === "ramu") {
      //alert("successfully logged in");
      let userInfo = {
        username: userName,
        password: password,
      };
      onSuccess({
        user: userInfo,
        isLoggedIn: true,
      });
    }else{
      alert("Login failed")
    }
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              mt: 25,
              width: 500,
              height: 500,
            },
          }}
        >
          <Paper elevation={3}>
            <Typography variant="h4" mt={3}>
              Spam Me Twice
            </Typography>
            <div className="logo-box">logo</div>
            <div className="user-box">
              <InputField
                type="text"
                text={"User Name :"}
                handleChange={setUserName}
              />
              <InputField
                type="password"
                text={"Password :"}
                handleChange={setPassword}
              />
              <div className="btn-box">
                <Button
                  size="medium"
                  mt={2}
                  variant="contained"
                  onClick={verifyUser}
                >
                  Log In
                </Button>
              </div>
            </div>
            <div className="signup-box">
              Not a member? <Button onClick={handleSignUp}>Sign Up</Button>
              </div>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IdpLogin;
