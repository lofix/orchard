import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import modules from './Button.module.css';

const button = (props) => {
  const button = <button 
                    disabled={props.disabled}
                    className={[modules.Button, modules[props.btnType], modules[props.colorSet], modules[props.size]].join( ' ')}
                    onClick={props.clicked}
                    id={props.id}>
                    {props.withIcon ? <i className={props.iconClasses}></i> : null}
                    {props.copy}
                  </button>;
  return (props.isLink && props.path ? <Link to={props.path}>{button}</Link> : button)
}

button.propTypes = {
  disabled: PropTypes.bool,
  btnType: PropTypes.string,
  colorSet: PropTypes.string,
  clicked: PropTypes.func,
  withIcon: PropTypes.bool,
  isLink: PropTypes.bool,
  path: PropTypes.string,
  copy: PropTypes.string
}
export default button;