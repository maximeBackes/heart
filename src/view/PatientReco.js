import React from 'react';
import Button from '../components/Button';  //import Button from '../components/Button';
import logo from '../Logocoeur.png';
import thumb from '../pouce.png';

function PatientReco() {
    return (
      <div className="PatientReco">
        <img src={logo} alt="heart" height="42" width="50"/>
        <br></br>
        <p id="reco">Vos constantes sont bonnes ! Vous n'avez pas de recommandation pour aujourd'hui.
            <br></br>
            <img src={thumb} alt="thumb" height="50" width="50"/>
        </p>
      </div>
    );
  }
  
   export default PatientReco;