//Libs
import React from 'react';
import { Link } from 'react-router-dom';
//Style
import { Glyph } from 'elemental';

const Header = ({ history, location }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header--content">
          {location.state === undefined ?
            <Link to="/" className="header--button">
              <Glyph icon="home" />
            </Link> :
            <a
              onClick={() => history.goBack()}
              onKeyDown={() => history.goBack()}
              role="link"
              tabIndex={0}
              className="header--button">
              <Glyph icon="arrow-left" />
            </a>
          }
          <h1>Readable</h1>
          <Link to="/add_post" className="header--button">
            <Glyph icon="plus" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
