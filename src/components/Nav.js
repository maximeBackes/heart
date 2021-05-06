import {Link} from 'react-router-dom';

function Nav() {
    return (
      <div className="Nav">
        <p>Nav component</p>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Exemple">Exemple</Link>
        </nav>
      </div>
    );
  }
  
  export default Nav;