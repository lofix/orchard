import React from 'react';
import modules from './Label.module.css';

const label = (props) => {
  return (
    <label className={modules.Label} htmlFor={props.id}>{props.label}</label>
  )
};

export default label;