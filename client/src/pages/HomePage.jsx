import React, { Component } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import TournamentCards from "../components/TournamentCards";

class HomePage extends Component {

    render() {
        return (
            <Header />,
            <Navbar />,
            <TournamentCards />
        )
    }
}


export default HomePage;