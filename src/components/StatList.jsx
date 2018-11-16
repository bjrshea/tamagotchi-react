import React from 'react';
import Stat from './Stat';
import PropTypes from 'prop-types';

function StatList(props) {

  const StatListStyles = {
    padding: '0 20px'
  };

  return(
    <div style={StatListStyles}>
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

StatList.propTypes = {
  statList: PropTypes.array
};

export default StatList;
