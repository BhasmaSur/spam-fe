import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import Test from "../views/test/Test";
import { auth } from "@spammetwice/auth";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Login from "../views/login";
import NotFound from "../views/not-found/notFound";

import SignUp from "../views/signup/signup";
import Layout from "../hoc/layout";
import Question from "../views/question";
import { LandingPage } from "../views/landing-page";
import Home from "../views/home";

const GuardedRoutesBehindFeatureFlag = () => {
  const flags = {
    showHeader : true,
    showFooter : true
  }
  return (
    <Layout flags={flags}>
      <Routes>
        <Route path="/admin-page" element={<Test />} exact />
        <Route path="/landing-page" element={<LandingPage />} exact />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </Layout>
  );
};

const GuardedRoutes = () => {
  const { getSessionData } = auth();
  const [loggedInUser, setLoggedInUser] = useState();
  const historyHook = useNavigate();
  const location = useLocation();
  const [currPage, setCurrPage] = useState("/");

  useEffect(async () => {
    const { user } = getSessionData();
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const getLandingPageAsPerPreference = (user) => {
    return "/landing-page";
  };

  useEffect(() => {
    const doGuard = async () => {
      try {
        const { user, accessToken, refreshToken, tenantId } = getSessionData();

        if (!user || !accessToken || !refreshToken || !tenantId) {
          historyHook("/login");
          return;
        }

        if (user) {
          if (location.pathname === "/") {
            const { user } = getSessionData();
            const landingPage = getLandingPageAsPerPreference(user);
            historyHook(landingPage);
            //setLoggedInUser(user);
          }
        }
      } catch (err) {
        historyHook("/login");
      }
    };

    doGuard();
  }, [historyHook, location]);

  if (!loggedInUser) return "";

  return (
    <div>
      <GuardedRoutesBehindFeatureFlag location={currPage} />
    </div>
  );
};
const AllRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/question" element={<Question />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/*" element={<GuardedRoutes />} />
      </Routes>
    </Router>
  );
};

export default AllRoute;
