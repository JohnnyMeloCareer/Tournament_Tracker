// This where you build your front end app

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import SideNavbar from './components/SideNavbar';
import TournamentCards from "./components/TournamentCards";
// import TournamentJoinButton from './components/TournamentJoinButton';

const App = () => (
  <Router>
    <div>
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route exact path="/profile" component={ProfilePage} />
    <Route exact path="/homepage" component={HomePage} />
    </Switch>
    </div>
    </Router>
    
    );
    
    export default App;
    
    



    //   <LoginPage
    // //   updateUser={this.updateUser}
    // // />} />
    {/* <Header />
      {/* <TournamentCards /> */}
    // <Navbar />  <-- Put inside of the page you want to display these components */}