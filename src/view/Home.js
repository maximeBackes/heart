import Button from '../components/Button';  //import Button from '../components/Button';
import logo from '../Logocoeur.png';
import './Home.css';
import useToken from '../useToken';


function Home() {
    return (
      <div className="Home">
        <img src={logo} alt="heart" height="42" width="50"/>
        <h1>Heart & Health</h1>
        <h2>Bienvenue</h2>
        <p>Votre suivi santé en un click</p>
        <Button label="Je suis un patient" link="/Patient"/>
        <Button label="Je suis un docteur" link="/Doctor"/>

      </div>
    );
  }
  
    export default Home;


