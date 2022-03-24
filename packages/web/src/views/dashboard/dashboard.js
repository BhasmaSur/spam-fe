import { Button } from '@mui/material';
import { auth } from '@spammetwice/auth';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
    useLocation,
    Outlet,
  } from "react-router-dom";

const Dashboard = () => {
    const historyHook = useNavigate();
    const {logout} = auth()
    const logoutHandler=()=>{
        logout()
      
        historyHook("login")
    }
    return (
        <div>
            dashboard
            <Button onClick={logoutHandler}>Logout</Button>
          
        </div>
    );
};

export default Dashboard;