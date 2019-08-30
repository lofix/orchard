import React from 'react';
import PropTypes from 'prop-types';


import modules from './Input.module.css';

const input = (props) => {
  return (
    <input type={props.type} onChange={props.onChange} id={props.id} placeholder={props.placeholder} className={modules.Input}></input>
  );
}

input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.string
}

export default input;