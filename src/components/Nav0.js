import React from 'react';
import {Link} from 'react-router-dom';
import Recommander from './img/recommander.svg';
import Info from './img/info.svg';
import Medicament from './img/medicament.svg';
import User from './img/user.svg';
import Agenda from './img/agenda.svg';
import './Nav.css';



function Nav() {
    return (
      <div class="navbar">
        <nav>
          <Link to="../view/InfoGenerales">
            <img class="side" src= {Recommander} alt="information" />
          </Link>
          <Link to="../view/InfoGenerales">
            <img class="side" src= {Info} alt="information" />
          </Link>
          <Link to="../view/Home">
            <img class="center" src= {User} alt="utilisateur" />
          </Link>
          <Link to="../view/Home">
            <img class="side" src= {Medicament} alt="medicament" />
          </Link>
          <Link to="../view/Home">
            <img class="side" src= {Agenda} alt="agenda" />
          </Link>
        </nav>
      </div>
    );
  }

  export default Nav;
