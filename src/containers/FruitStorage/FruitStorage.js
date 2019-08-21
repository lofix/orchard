import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableInfo from '../../components/TableInfo/TableInfo';
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
            <tr key={pallet.id} className={modules.Row}>
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
    const tableHeaders = ['Date', 'Pallet No', 'Sorting Date', 'Variety','Weight', 'ID' ];
    const isTableEmpty = !this.props.pallets.length;

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
        <TableInfo
          isEmpty={isTableEmpty}
          title={isTableEmpty ? "Currently there are no blueberries in your coldroom." : "In order to add more pallets"}
          secondaryTitle={isTableEmpty ? "Click below to add a new pallet!" : "Click the button below!"}
          addNewItem={this.addNewItemHandler}
        />
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