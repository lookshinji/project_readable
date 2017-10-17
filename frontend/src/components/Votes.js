//Libs
import React from 'react';
//Styles
import { Button, Glyph} from 'elemental';

const Votes = ({ item, type, handleVote }) => {
  return (
    <div className="votes">
      <Button type="link" onClick={() => handleVote(item.id, type, 1)}><Glyph icon="chevron-up" /></Button>
      <h4>{item.voteScore}</h4>
      <Button type="link" onClick={() => handleVote(item.id, type , -1)}><Glyph icon="chevron-down" /></Button>
    </div>
  );
};

export default Votes;
