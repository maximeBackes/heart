import logo from '../Logocoeur.png';


function ContacterMedecin() {
    return (
      <div className="ContacterMedecin">
        <img src={logo} alt="heart" height="42" width="50"/>
        <h1 id="test">Contacter mon médecin</h1>
        <form action="#" method="post">
          <div><input id="a" type ="text" name="name" placeholder="Nom du destinataire"></input></div>
          <br></br>
          <div><input id="message" name="message" placeholder="Message"></input></div>
        </form>
      </div>
    );
  }
  
  export default ContacterMedecin;