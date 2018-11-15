import React from 'react';
import PropTypes from 'prop-types';

function Stat(props) {

  const statBarBackgroundStyles = {
    width: '100%',
    height: '20px',
    backgroundColor: '#FFF',
    marginBottom: '10px'
  };
  const statBarStyles = {
    width: `${props.statAmount}%`,
    height: '100%',
    backgroundColor: `${props.statColor}`,
    float: 'left'
  };

  return(
    <div style={statBarBackgroundStyles}>
      <div id={props.statId} style={statBarStyles}></div>
    </div>
  );
}

Stat.propTypes = {
  statId: PropTypes.string,
  statColor: PropTypes.string,
  statAmount: PropTypes.number
};

export default Stat;
