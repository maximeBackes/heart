import React from 'react';
import {Link} from 'react-router-dom';
import Home from './img/Home.png'
//import '.Nav.css';



function Nav() {
    return (
      <div className="navbar">
        <nav>
          <Link to="../view/Home">
            <img src= {Home} alt="pic" />
          </Link>
          <Link to="/Exemple">Exemple</Link>
        </nav>
      </div>
    );
  }

  export default Nav;
