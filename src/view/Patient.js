import logo from '../Logocoeur.png';
import useToken from '../useToken';
import Login from '../view/Login';

function Patient() {
  const { token, setToken } = useToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }

    return (
      <div className="Patient">
        <img src={logo} alt="heart" height="42" width="50"/>
        <p>Heart & Health</p>
        <p>Se connecter</p>
      </div>
    );
  }
 

  export default Patient;

  