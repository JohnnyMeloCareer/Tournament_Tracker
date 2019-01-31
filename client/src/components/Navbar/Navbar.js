import React from 'react'; 
import { BrowserRoute as Router, Route, Link } from "react-router-dom";


import './Navbar.css';



const Navbar = () => (
    <nav className = "navbar navbar-expand-ld navbar-dark">
    <ul className="nav">
		<li>
			<Link to="/ProfilePage">Profile</Link></li>
			

		<li><a href="#">Popular</a></li>
		
		<li><a href="#">Search</a></li>
	</ul>
  
          </nav>
)

export default Navbar;