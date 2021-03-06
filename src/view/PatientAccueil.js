import React from 'react';
import Button from '../components/Button';  //import Button from '../components/Button';
import logo from '../Logocoeur.png';

function PatientAccueil() {
    return (
      <section id="acceuil">
        <div className="PatientAccueil">
          <img src={logo} alt="heart" height="42" width="50"/>
          <p>Mon profil</p>
          <p>Prénom Nom</p>
          <Button label="Consulter mes données" link="/ConsultationDonneesPatient"/>
          <Button label="Prendre rendez-vous" link="/RDVPatient"/>
          <Button label="Contacter mon médecin" link="/ContacterMedecin"/>
          <Button label="Mes informations" link="/InfoGenerales"/>
        </div>
      </section>
    );
  }
  
    export default PatientAccueil;

