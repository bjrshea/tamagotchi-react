import React from 'react';
import StatButton from './StatButton';

function StatButtonList() {

  const masterStatButtonList = [
    {
      statButtonName: 'Feed',
      statButtonColor: '#00B12A'
    },
    {
      statButtonName: 'Exercise',
      statButtonColor: '#00A1B3'
    },
    {
      statButtonName: 'Rest',
      statButtonColor: '#DA003A'
    }
  ]

  return(
    <div>
      {masterStatButtonList.map((statButton, index) =>
        <StatButton
          statButtonName={statButton.statButtonName}
          statButtonColor={statButton.statButtonColor}
          key={index}
          />
      )}
    </div>
  );
}

export default StatButtonList;
