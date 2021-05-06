import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../Logocoeur.png';
import Button from '../components/Button';




async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  
  return(
    <div className="login-wrapper">
      <img src={logo} alt="heart" height="42" width="50"/>
      <p>Heart & Health</p>
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input placeholder="Nom d'utilisateur" type="text" onChange={e => setUserName (e.target.value)}/>
        </label>
        <label>
          <input placeholder="Mot de passe" type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <Button label="Se connecter" link="/PatientAccueil"/>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

//<button type="submit">Connexion</button>