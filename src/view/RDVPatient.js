import logo from '../Logocoeur.png';
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
//import interactionPlugin from "@fullcalendar/interaction";


function RDVPatient() {
    return (
      <div className="RDVPatient">
        <img src={logo} alt="heart" height="42" width="50"/>
        <h1>Prendre un rendez-vous</h1>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        weekends={false}
        events={[
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' }
        ]}
        />
      </div>
    );
  }
  
  //handleDateClick = (arg) => { // bind with an arrow function
    //alert(arg.dateStr)
  //}

//}

  export default RDVPatient;


  
