import React from 'react';
import { Link } from 'react-router-dom';

import modules from './Button.module.css';

const button = (props) => {
  const button = <button 
                    className={[modules.Button, modules[props.btnType], modules[props.colorSet]].join( ' ')}>
                    {props.withIcon ? <i className={props.iconClasses}></i> : null}
                    {props.copy}
                  </button>;
  return (props.isLink && props.path ? <Link to={props.path}>{button}</Link> : button)
}

export default button;