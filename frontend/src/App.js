//* ADDED LOG IN COMPONENT TO THE APP COMPONENT *//

//todo: import everything that is needed from the log in component:
import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';

import "./index.css"

import LoginFormPage from './components/LoginFormPage';
import SignupPage from './components/SignUpPage';
import Navigation from "./components/Navigation";
import HomePage from "./components/SplashPage"
import UserProfile from "./components/UserProfile"
// import Footer from "./components/Footer"

import * as sessionActionCreators from "./store/session";



function App() {

  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActionCreators.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    {/* <div id="the-main-contain"> */}
    <Navigation isLoaded={isLoaded} />
        {isLoaded && (
        <Switch>
          <Route exact path="/">
              <HomePage />
          </Route>
          <Route path="/login">
              <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/profile/:id">
              <UserProfile />
          </Route>
        </Switch>
        )}
        {/* </div> */}
    </>
  );
}

export default App;
