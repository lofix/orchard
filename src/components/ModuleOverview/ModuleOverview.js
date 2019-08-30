import React from 'react';
import PropTypes from 'prop-types';

import Button from '../UI/Button/Button';

import modules from './ModuleOverview.module.css';

const moduleOverview = (props) => {
  return (
    <div className={modules.ModuleOverview}>
      <h3 className={modules.Title}>{props.title}</h3>
      <div className={modules.ContentContainer}>
        <p>{props.description}</p>
          <Button
            path={props.path}
            isLink
            withIcon
            iconClasses="fas fa-arrow-right fa-2x"
            btnType="Round"
            colorSet="WhiteGreen"
          />
      </div>
    </div>
  )
};
moduleOverview.propTypes = {
  description: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string
}
export default moduleOverview;