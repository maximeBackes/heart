import logo from '../Logocoeur.png';
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Button from '../components/Button';
//import interactionPlugin from "@fullcalendar/interaction";


function RDVPatient() {
    return (
      <div className="RDVPatient">
        <img src={logo} alt="heart" height="42" width="50"/>
        <section id="rdv">
          <div>
            <div>
            <h1 id="test"> Prendre un rendez-vous </h1>
            <form action="#" method="post">
              <input id="calendrier" placeholder="Nom et Prénom" name="name" type="text"></input><br></br>
              <br></br>
              <input id="calendrier" placeholder="Adresse mail" name="email" type="email"></input><br></br>
              <br></br>
              <input id="calendrier" placeholder="Numéro de contact" name="number" type="number"></input><br></br>
              <br></br>
              <input id="calendrier" name="date" type="date" required=""></input><br></br>
              <br></br>
              <input id="calendrier" placeholder="Horaire souhaité" name="time" type="time"></input><br></br>
              <br></br>
              <Button label="Soumettre"></Button>
            </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  //handleDateClick = (arg) => { // bind with an arrow function
    //alert(arg.dateStr)
  //}

//}

  export default RDVPatient;


  
