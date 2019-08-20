import React, { Component } from 'react';

import EmptyTableInfo from '../../components/EmptyTableInfo/EmptyTableInfo';
import FruitStorageForm from './FruitStorageForm/FruitStorageForm';
import Lightbox from '../../components/UI/Lightbox/Lightbox';

import modules from './FruitStorage.module.css';

class FruitStorage extends Component {
  state = {
    config: {
      headers: ['#','Date', 'Pallet No', 'ID', 'Weight', 'Variety', 'Sorting Date'],
      noData: {
        title: "Currently there are no blueberries in your coldroom.",
        secondaryTitle: "Click below to add a new pallet!"
      }
    },
    data: null,
    addingNewItem: false
  }

  prepareTableBody() {
    return <tbody><tr><td>TABLE</td></tr></tbody>;
  }

  addNewItemHandler = () => {
    this.setState({addingNewItem:true});
  }

  render() {
    return (
      <div className={modules.TableContainer}>
        <table className={modules.Table}>
          <thead> 
            <tr className={modules.Row}>
              {this.state.config.headers.map(headerEl => {
                return <th className={modules.Header} key={headerEl}>{headerEl}</th>;
              })}
            </tr>
          </thead>
            {this.state.data ? this.prepareTableBody() : null}
        </table>
        {!this.state.data ? 
          <EmptyTableInfo 
            title={this.state.config.noData.title}
            secondaryTitle={this.state.config.noData.secondaryTitle}
            addNewItem={this.addNewItemHandler}/> : null}
        {this.state.addingNewItem ? <Lightbox header={"Fill the form and add a new pallet!"} content={<FruitStorageForm />}/> : null}
      </div>
    )
  }
}

export default FruitStorage;