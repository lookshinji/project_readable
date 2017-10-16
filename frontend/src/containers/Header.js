//Libs
import React from 'react';
import { Link } from 'react-router-dom';

//Style
import { Glyph } from 'elemental';

const Header = ({ history, location }) => {
  console.log(location);
  return (
    <div className="header">
      {location.pathname == '/' ?
        <Link to="/" className="back-button">
          <Glyph icon="home" />
        </Link> :
        <a onClick={() => history.goBack()} onKeyDown={() => history.goBack()} role="link" tabIndex={0} className="back-button">
          <Glyph icon="arrow-left" />
        </a>
      }
      <h1>Readable</h1>
      <Link to="/add_post/form" className="add-button"><Glyph icon="plus" /></Link>
    </div>
  );
};

export default Header;
