import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route,Routes, } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store'
import Landing from "./components/Layout/Landing";
import Navbar from "./components/Layout/Navbar"
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";



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
            
              </Routes>
          
          </div>
          </Router>
          </Provider>
    );
  }
}
export default App;