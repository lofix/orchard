import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import FruitStorage from '../FruitStorage/FruitStorage';

import Home from '../../components/Home/Home';
import modules from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={modules.App}>
        <Header />
        <Layout>
          <Switch>
            <Route path="/packaging" component={Home} />
            <Route path="/shipments" component={Home} />
            <Route path="/sorting" component={Home} />
            <Route path="/fruit-storage" component={FruitStorage} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
