import React from 'react';

import { Link } from 'react-router-dom';

import modules from './ForwardButton.module.css';

const button = (props) => {
  return (
    <Link to={props.path}>
      <button className={modules.ForwardButton} />
    </Link>
    
  )
}

export default button;