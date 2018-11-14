import React from 'react';
import Stat from './Stat';

function TamagotchiStatsList() {

  const masterStatList = [
    {
      statId: 'feedStat',
      statColor: '#00B12A'
    },
    {
      statId: 'exerciseStat',
      statColor: '#00A1B3'
    },
    {
      statId: 'restStat',
      statColor: '#DA003A'
    }
  ]

  return(
    <div>
      {masterStatList.map((stat, index) =>
        <Stat
          statId={stat.statId}
          statColor={stat.statColor}
          key={index}
        />
      )}
    </div>
  );
}

export default TamagotchiStatsList;
