//import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";import './App.css';

// pages
import Home from './view/Home';
import Exemple from './view/Exemple';
import Doctor from './view/Doctor';
import Patient from './view/Patient';
import PageAccueil from './view/PageAccueil';
import Preferences from './view/Preferences';
import Login from './view/Login';
import useToken from './useToken';
import PatientAccueil from './view/PatientAccueil';
import ConsultationDonneesPatient from './view/ConsultationDonneesPatient';
import ContacterMedecin from './view/ContacterMedecin';
import RDVPatient from './view/RDVPatient';

import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const { token, setToken } = useToken();


  //if(!token) {
    //return <Login setToken={setToken} />
  //}
  
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/exemple" exact component={Exemple}/> 
          <Route path="/doctor" exact component={Doctor}/> 
          <Route path="/patient" exact component={Patient}/>
          <Route path="/PageAccueil" exact component={PageAccueil}/> 
          <Route path="/Preferences" exact component={Preferences}/>  
          <Route path="/Login" exact component={Login}/>  
          <Route path="/PatientAccueil" exact component={PatientAccueil}/>
          <Route path="/ConsultationDonneesPatient" exact component={ConsultationDonneesPatient}/>  
          <Route path="/ContacterMedecin" exact component={ContacterMedecin}/>  
          <Route path="/RDVPatient" exact component={RDVPatient}/>  
  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
