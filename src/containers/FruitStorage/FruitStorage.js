import React, { Component } from 'react';
import { connect } from 'react-redux';

import EmptyTableInfo from '../../components/EmptyTableInfo/EmptyTableInfo';
import FruitStorageForm from './FruitStorageForm/FruitStorageForm';
import Lightbox from '../../components/UI/Lightbox/Lightbox';

import * as actions from '../../store/actions/index';

import modules from './FruitStorage.module.css';

class FruitStorage extends Component {
  componentWillMount() {
    this.props.fetchPallets();
  }

  onBackdropClick = () => {
    this.props.onAddNewItemFinished();
  }

  prepareTableBody() {
    const pallets = this.props.pallets;
    return (
      <tbody>
        {pallets.map(pallet => {
          return (
            <tr className={modules.Row}>
              {Object.keys(pallet).map(info => {
                return (<td className={modules.Cell}>{pallet[info]}</td>)
              })}
            </tr>
          )
        })}
      </tbody>);
  }

  addNewItemHandler = () => {
    this.props.onAddNewItemInit();
  }

  render() {
    const tableHeaders = ['Date', 'Pallet No', 'Variety','Weight', 'ID', 'Sorting Date'];
    return (
      <div className={modules.TableContainer}>
        <table className={modules.Table}>
          <thead> 
            <tr className={modules.Row}>
              {tableHeaders.map(headerEl => {
                return <th className={modules.Header} key={headerEl}>{headerEl}</th>;
              })}
            </tr>
          </thead>
            {this.props.pallets.length ? this.prepareTableBody() : null}
        </table>
        {!this.props.pallets.length ? 
          <EmptyTableInfo 
            title="Currently there are no blueberries in your coldroom."
            secondaryTitle="Click below to add a new pallet!"
            addNewItem={this.addNewItemHandler}/> : null}
        {this.props.addingNewItem ? <Lightbox clicked={this.onBackdropClick} header={"Fill the form and add a new pallet!"} content={<FruitStorageForm />}/> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pallets: state.fruitStorage.pallets,
    addingNewItem: state.fruitStorage.addingNewItem     
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewItemInit: () => dispatch(actions.addNewItemInit()),
    onAddNewItemFinished: () => dispatch(actions.addNewItemFinished()),
    fetchPallets: () => dispatch(actions.fetchPallets())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FruitStorage);