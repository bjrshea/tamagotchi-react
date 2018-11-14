import React from 'react';
import Stat from './Stat';
import PropTypes from 'prop-types';

function TamagotchiStatsList(props) {

  return(
    <div>
      {props.statList.map((stat, index) =>
        <Stat
          statId={stat.statId}
          statColor={stat.statColor}
          statAmount={stat.statAmount}
          key={index}
        />
      )}
    </div>
  );
}

TamagotchiStatsList.propTypes = {
  statList: PropTypes.array
}

export default TamagotchiStatsList;
