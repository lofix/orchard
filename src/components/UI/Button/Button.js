import React from 'react';

import modules from './Button.module.css';

const button = (props) => {
  return (
    <button className={modules.Button}>{props.copy}</button>
  )
}

export default button;