import React from 'react';
import PropTypes from 'prop-types';

function Stat(props) {
  return(
    <div>
      <div id={props.statId}>Stat</div>
    </div>
  );
}

Stat.propTypes = {
  statId: PropTypes.string
}

export default Stat;
