import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Header from '../Header/Header';
import Home from '../../components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
