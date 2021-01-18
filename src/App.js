import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import DetailsInfo from './components/DetailsInfo/DetailsInfo';
import Login from './components/LoginInfo/Login';
import PrivateRoute from './components/LoginInfo/PrivateRoute/PrivateRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import { getCurrentUser, handleSignOut } from './components/LoginInfo/FirebaseInfo';

export const UserContext = createContext();

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({});
  useEffect(() => {
    getCurrentUser().then(res => {
      setUser(res)
    })
  }, [])
  const signOutUser = () => {
    handleSignOut().then(res => {
      setUser(res)
    })
  }

  return (
    <UserContext.Provider value = {{ user, setUser, bookingInfo, setBookingInfo, signOutUser }}>
      <div className={`${location.pathname === '/' || location.pathname.includes('booking') ? 'home' : ''}`}>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/booking/:id">
              <Booking></Booking>
            </Route>
            <PrivateRoute path="/details/:id">
              <DetailsInfo></DetailsInfo>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
