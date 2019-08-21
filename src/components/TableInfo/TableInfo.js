import React from 'react';

import Button from '../UI/Button/Button';
import modules from './TableInfo.module.css';

const tableInfo = (props) => {
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
          clicked={props.addNewItem}
        />
      </div>

    </div>
  );
}

export default tableInfo;