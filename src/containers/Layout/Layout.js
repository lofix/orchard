import React, { Component } from 'react';

import modules from './Layout.module.css';

class Layout extends Component {
  render(props) {
    return (
      <main className={modules.Layout}>
        {this.props.children}
      </main>
    )
  };
};

export default Layout;