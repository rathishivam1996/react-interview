import React from 'react';
import './MoveListItemApp.css';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

function List({ data, handleChange }) {
  return (
    <div className="list">
      {data.map((elem, index) => (
        <ListItem
          key={elem.item}
          data={elem}
          index={index}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.number,
      isChecked: PropTypes.bool,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default List;
