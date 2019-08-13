import React from 'react';
import modules from './Logo.module.css';
import { Link } from 'react-router-dom';

const logo = () => {
  return (
    <Link className={modules.Link} to='/'>
      <div className={modules.Logo}>
        Orchard
      </div>
    </Link>

  )
}
 export default logo;