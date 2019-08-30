import React from 'react';
import modules from './Label.module.css';
import PropTypes from 'prop-types';


const label = (props) => {
  return (
    <label className={modules.Label} htmlFor={props.id}>{props.label}</label>
  )
};

label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
}
export default label;