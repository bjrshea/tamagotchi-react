import React from 'react';
import PropTypes from 'prop-types';

function StatButton(props) {

  const statButtonStyles = {
    backgroundColor: `${props.statButtonColor}`
  }

  return(
    <button style={statButtonStyles}>{props.statButtonName}</button>
  );
}

StatButton.propTypes = {
  statButtonName: PropTypes.string,
  statButtonColor: PropTypes.string
}

export default StatButton;
