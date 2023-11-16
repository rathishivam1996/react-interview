import React from 'react';
import PropTypes from 'prop-types';

function Actions({ moveRight, moveLeft }) {
  return (
    <div id="actions">
      <button className="action" type="button" onClick={moveRight}>
        &gt;
      </button>
      <button className="action" type="button" onClick={moveLeft}>
        &lt;
      </button>
    </div>
  );
}

Actions.propTypes = {
  moveRight: PropTypes.func.isRequired,
  moveLeft: PropTypes.func.isRequired,
};

export default Actions;
