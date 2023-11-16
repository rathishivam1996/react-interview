import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ data, index, handleChange }) {
  return (
    <label htmlFor="check-box">
      <input
        value={data.item}
        type="checkbox"
        checked={data.isChecked}
        onChange={() => handleChange(index)}
      />
      {data.item}
    </label>
  );
}

ListItem.propTypes = {
  data: PropTypes.shape({
    item: PropTypes.number,
    isChecked: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ListItem;
