// This where you build your front end app


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
// import SideNavbar from './components/SideNavbar';
import TournamentCards from './components/TournamentCards';
// import TournamentJoinButton from './components/TournamentJoinButton';


const App = () => (
<div>

    <Header />
    {/* <SideNavbar /> */}
  <Router>
    <Navbar />
  </Router>
    <TournamentCards />
    {/* <TournamentJoinButton /> */}
  </div>
  )


  


export default App;
