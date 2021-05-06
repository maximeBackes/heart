import {Link} from 'react-router-dom';

function Button(props) {
    return (
      <div className="Button">
        <Link to={props.link}>
          <button type="button">
                {props.label}
          </button>
        </Link>
      </div>
    );
  }
  
  export default Button;