// This where you build your front end app


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';


const App = () => (

  <Router>
    <Navbar />
    </Router >
  )


  


export default App;
