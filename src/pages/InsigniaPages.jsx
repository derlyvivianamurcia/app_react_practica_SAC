import React from 'react';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom'

class Insigniapages extends React.Component {
    render() {
    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/insignianew" className="btn btn-primary">
              Insignia Nueva
            </Link>
          </div>

    
        </div>
      </div>
    );
  }
}

export default Insigniapages;