import React from 'react';
import PropTypes from 'prop-types';

import modules from './Lightbox.module.css'

import Auxi from '../../../hoc/Auxi/Auxi'
import Backdrop from '../Backdrop/Backdrop';

const lightbox = (props) => {
  return (
    <Auxi>
      <Backdrop show clicked={props.clicked}/>
      <div className={modules.Lightbox}>
        <h4 className={modules.Header}>{props.header}</h4>
        {props.content}
      </div>
    </Auxi>
  )
};

 lightbox.propTypes = {
   clicked: PropTypes.func,
   header: PropTypes.string
 }

export default lightbox;