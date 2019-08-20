import React from 'react';
import modules from './Lightbox.module.css'

import Auxi from '../../../hoc/Auxi/Auxi'
import Backdrop from '../Backdrop/Backdrop';

const lightbox = (props) => {
  return (
    <Auxi>
      <Backdrop show/>
      <div className={modules.Lightbox}>
        <h4 className={modules.Header}>{props.header}</h4>
        {props.content}
      </div>
    </Auxi>
  )
};

 

export default lightbox;