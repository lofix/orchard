import React from 'react';

import Button from '../UI/Button/Button';
import modules from './EmptyTableInfo.module.css';

const emptyTableInfo = (props) => {
  return (
    <div className={modules.Information}>
      <h3 className={modules.Title}>{props.title}</h3>
      <h4 className={modules.SecondaryTitle}>{props.secondaryTitle}</h4>
      <div className={modules.ButtonContainer}>
        <Button 
          withIcon 
          iconClasses="fas fa-plus" 
          btnType="Round"
          colorSet="WhiteGreen"
          className={modules.Button}
          />
      </div>

    </div>
  );
}

export default emptyTableInfo;