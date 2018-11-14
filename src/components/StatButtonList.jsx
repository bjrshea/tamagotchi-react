import React from 'react';
import StatButton from './StatButton';

function StatButtonList() {

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
  ]

  return(
    <div>
      {masterStatButtonList.map((statButton, index) =>
        <StatButton
          statButtonId={statButton.statButtonId}
          statButtonName={statButton.statButtonName}
          statButtonColor={statButton.statButtonColor}
          statButtonHoverColor={statButton.statButtonHoverColor}
          key={index}
          />
      )}
    </div>
  );
}

export default StatButtonList;
