import React from 'react';

import modules from './Input.module.css';

const input = (props) => {
  return (
    <input type={props.type} onChange={props.onChange} id={props.id} placeholder={props.placeholder} className={modules.Input}></input>
  );
}
export default input;