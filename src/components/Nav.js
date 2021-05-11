import React from 'react';
import '.Nav.css';<

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
