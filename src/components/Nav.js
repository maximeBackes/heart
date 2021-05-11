import {Link} from 'react-router-dom';

function Nav() {
    return (
      <nav className="Nav">
          <ul className="NavBarLink">
            <li classeName="NavBarItem">
              <a href="\" classeName="NavBarLink">
                Accueil
              </a>
            </li>
            <li classeName="NavBarItem">
              <a href="\" classeName="NavBarLink">
                Recommendation
              </a>
            </li>
            <li classeName="NavBarItem">
              <a href="\" classeName="NavBarLinkCenter">
                Profil
              </a>
            </li>
            <li classeName="NavBarItem">
              <a href="\" classeName="NavBarLink">
                Traitement
              </a>
            </li>
            <li classeName="NavBarItem">
              <a href="\" classeName="NavBarLink">
                PrendreRDV
              </a>
            </li>
          </ul>
      </nav>
    );
  }

  export default Nav;
