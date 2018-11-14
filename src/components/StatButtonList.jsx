import React from 'react';
import StatButton from './StatButton';

function StatButtonList() {

  const masterStatButtonList = [
    {
      buttonName: 'Feed'
    },
    {
      buttonName: 'Exercise'
    },
    {
      buttonName: 'Rest'
    }
  ]

  return(
    <div>
      {masterStatButtonList.map((button, index) =>
        <StatButton
          buttonName={button.buttonName}
          key={index}
          />
      )}
    </div>
  );
}

export default StatButtonList;
