import React from 'react';
import Button from '../components/Button';  //import Button from '../components/Button';
import logo from '../Logocoeur.png';

function PatientMesRDV() {
    return (
      <div className="PatientAccueil">
        <img src={logo} alt="heart" height="42" width="50"/>
        <Button label="Mon prochain rendez-vous : "/>
        <Button label="Mon historique" />
        <Button label="Prendre un rendez-vous" link="/RDVPatient"/>
      </div>
    );
  }
  
    export default PatientAccueil;