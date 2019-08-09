import React from 'react';

import ForwardButton from '../UI/ForwardButton/ForwardButton';

import modules from './ModuleOverview.module.css';
const moduleOverview = (props) => {
  return (
    <div className={modules.ModuleOverview}>
      <h3 className={modules.Title}>{props.title}</h3>
      <div className={modules.ContentContainer}>
        <p>{props.description}</p>
          <ForwardButton
            path={props.path}
          />
      </div>
    </div>
  )
};

export default moduleOverview;