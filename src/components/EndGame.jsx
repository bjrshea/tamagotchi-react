import React from 'react';
import PropTypes from 'prop-types';

function EndGame(props) {
  return(
    <div>
      <h1>GAME OVER</h1>
      <button onClick={props.onResetGame}>Play Again</button>
    </div>
  );
}

EndGame.propTypes = {
  onResetGame: PropTypes.func
};

export default EndGame;
