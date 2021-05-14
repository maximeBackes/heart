HEAD
import {Link} from 'react-router-dom';

function Nav() {
    return (
      <div className="Nav">
        <p>Nav component</p>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Exemple">Exemple</Link>
        </nav>
      </div>
    );
  }
  
  export default Nav;

import React from 'react';
import '.Nav.css';

/** 

function Nav() {
    return (
      <nav className="navbar">
          <ul className="navbarlinks">
            <li classeName="navbaritem">
              <a href="\" classeName="navbarlink">
                Accueil
                <img src="" />
              </a>
            </li>
            <li classeName="navbaritem">
              <a href="\recommandation" classeName="navbarlink">
                Recommendation
                <img src="" />
              </a>
            </li>
            <li classeName="navbaritem">
              <a href="\profil" classeName="navbarlinkcenter">
                Profil
                <img src="" />
              </a>
            </li>
            <li classeName="navbaritem">
              <a href="\traitement" classeName="navbarlink">
                Traitement
                <img src="" />
              </a>
            </li>
            <li classeName="navbaritem">
              <a href="\prendreRDV" classeName="navbarlink">
                PrendreRDV
                <img src="" />
              </a>
            </li>
          </ul>
      </nav>
    );
  }

  export default Nav;
  >>>>>>> b2cc016b8cb7ee8c184960c9387d2fc9a9effe86 */
