// This where you build your front end app

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
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