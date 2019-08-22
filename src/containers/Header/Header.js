import React, { Component } from 'react';

import Logo from '../../components/UI/Logo/Logo';
import Button from '../../components/UI/Button/Button';

import modules from './Header.module.css';

class Header extends Component {
  render() {
    return(
      <header className={modules.Header}>
        <Logo />
        <Button 
          copy="LOGIN"
          btnType="Rectangular"
          colorSet="WhiteGreen"
          size="Large"
        />
      </header>
    )
  };
};

export default Header;