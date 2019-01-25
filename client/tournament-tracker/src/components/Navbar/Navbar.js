import React from 'react'; 
import { Link } from "react-router-dom";

import './Navbar.css';



const Navbar = () => (
    <nav className = "navbar navbar-expand-ld navbar-dark">
    <ul class="nav">
		<li><a href="index.html">Popular</a></li>
		
		<li><a href="contact.html">Search</a></li>
	</ul>
  
          </nav>
)

export default Navbar;