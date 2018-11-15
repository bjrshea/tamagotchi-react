import React from 'react';
import StatButton from './StatButton';
import PropTypes from 'prop-types';

function StatButtonList(props) {

  const statButtonListStyles = {
    display: 'flex',
    justifyContent: 'center'
  }

  const masterStatButtonList = [
    {
      statButtonId: 'feedButton',
      statButtonName: 'Feed',
      statButtonColor: '#00B12A',
      statButtonHoverColor: '#068624'
    },
    {
      statButtonId: 'exerciseButton',
      statButtonName: 'Exercise',
      statButtonColor: '#00A1B3',
      statButtonHoverColor: '#007B95'
    },
    {
      statButtonId: 'restButton',
      statButtonName: 'Rest',
      statButtonColor: '#DA003A',
      statButtonHoverColor: '#C60029'
    }
  ];

  return(
    <div style={statButtonListStyles}>
      {masterStatButtonList.map((statButton, index) =>
        <StatButton
          statButtonId={statButton.statButtonId}
          statButtonName={statButton.statButtonName}
          statButtonColor={statButton.statButtonColor}
          statButtonHoverColor={statButton.statButtonHoverColor}
          onNewStatUpdate={props.onNewStatUpdate}
          id={index}
          key={index}
        />
      )}
    </div>
  );
}

StatButtonList.propTypes = {
  onNewStatUpdate: PropTypes.func
};

export default StatButtonList;
