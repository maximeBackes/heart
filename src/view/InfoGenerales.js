import React from 'react';
import Button from '../components/Button';  //import Button from '../components/Button';
import logo from '../Logocoeur.png';

function InfoGenerales() {
    return (
      <div className="InfoGenerales">
        <img src={logo} alt="heart" height="42" width="50"/>
        <p>Prénom Nom</p>
        <Button label="Mes rendez-vous" link="/PatientMesRendez-vous"/>
        <Button label="Mes recommandations" link="/PatientReco"/>
        
      </div>
    );
  }
  
  export default InfoGenerales;
    