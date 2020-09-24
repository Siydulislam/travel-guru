import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './components/Booking/Booking';
import DetailsInfo from './components/DetailsInfo/DetailsInfo';
import Login from './components/LoginInfo/Login';
import PrivateRoute from './components/LoginInfo/PrivateRoute/PrivateRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/details">
            <DetailsInfo></DetailsInfo>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
