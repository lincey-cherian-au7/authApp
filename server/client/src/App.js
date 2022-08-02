import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route,Routes, } from "react-router-dom";
import {Provider} from 'react-redux';

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";



import store from './store'
import Landing from "./components/Layout/Landing";
import Navbar from "./components/Layout/Navbar"
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoutes";
import Dashboard from "./components/dashboard/Dashboard";



if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          
            
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Landing/>} />
              
              <Route  path="/register" element={<Register/>} />
            
              <Route  path="/login" element={<Login/>} />
            
          
              <PrivateRoute exact path="/dashboard" component={<Dashboard/>} />
                     
              </Routes>
          
          </div>
          </Router>
          </Provider>
    );
  }
}
export default App;