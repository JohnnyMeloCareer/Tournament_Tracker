// This where you build your front end app


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TournamentCards from './components/TournamentCards';


const App = () => (
<div>

  <Router>
    <Navbar />
    </Router >
    <TournamentCards />
  </div>
  )


  


export default App;