import React from 'react';
import './RadioButtonApp.css';
import PropTypes from 'prop-types';

function RadioForm({ formName, options, onChange, selectedItem }) {
  return (
    <form className="form" name={formName}>
      {options.map((item) => (
        <label key={item} htmlFor={item}>
          <input
            key={item}
            id={item}
            type="radio"
            value={item}
            onChange={onChange}
            checked={item === selectedItem}
          />
          {item}
        </label>
      ))}
    </form>
  );
}

RadioForm.propTypes = {
  formName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  selectedItem: PropTypes.string.isRequired,
};

export default RadioForm;
