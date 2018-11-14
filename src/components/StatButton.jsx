import React from 'react';
import PropTypes from 'prop-types';

function StatButton(props) {
  return(
    <button>{props.buttonName}</button>
  );
}

StatButton.propTypes = {
  buttonName: PropTypes.string
}

export default StatButton;
