import React from 'react';
import Stat from './Stat';

function TamagotchiStatsList() {

  const masterStatList = [
    {
      statId: 'feedStat'
    },
    {
      statId: 'exerciseStat'
    },
    {
      statId: 'restStat'
    }
  ]

  return(
    <div>
      {masterStatList.map((stat, index) =>
        <Stat
          statId={stat.statId}
          key={index}
        />
      )}
    </div>
  );
}

export default TamagotchiStatsList;
