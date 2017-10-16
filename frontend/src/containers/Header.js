//Libs
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Style
import { Glyph } from 'elemental';

const Header = (props) => {
  const { title, history, match, location } = props;

  console.log('match', match);
  console.log('history', history);
  console.log('location', location);

  return (
    <div className="header">
      <a onClick={() => history.goBack()} onKeyDown={() => history.goBack()} role="link" tabIndex={0} className="back-button"><Glyph icon="arrow-left" /></a>
      <h1>{title ? title : 'Readable' }</h1>
      <Link to="/add_post" className="add-button"><Glyph icon="plus" /></Link>
    </div>
  );
};

export default connect(state => {
  return {
    categories: state.app.categories,
    posts: state.app.posts
  };
}, {  })(Header);
