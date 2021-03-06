import React from 'react';
import PropTypes from 'prop-types';

import modules from './Select.module.css';

const select = (props) => {
  return (
    <select className={modules.Select} id={props.id} onChange={props.onChange}>
      {Object.keys(props.options).map(el => {
            const variety = props.options[el];
            return (
              <option key={variety.value} value={variety.value}>{variety.value}</option>
            );
          })}
    </select>
  )
}

select.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object
}

export default select;