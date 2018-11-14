import React from 'react';
import PropTypes from 'prop-types';

function StatButton(props) {

  const statButtonStyles = {
    backgroundColor: `${props.statButtonColor}`
  };

  return(
    <div>
      <style>{`
          #${props.statButtonId}:hover {
            background-color: ${props.statButtonHoverColor}!important;
          }
      `}</style>
      <button id={props.statButtonId} style={statButtonStyles}>{props.statButtonName}</button>
    </div>
  );
}

StatButton.propTypes = {
  statButtonId: PropTypes.string,
  statButtonName: PropTypes.string,
  statButtonColor: PropTypes.string,
  statButtonHoverColor: PropTypes.string
};

export default StatButton;
