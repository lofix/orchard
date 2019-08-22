import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableInfo from '../../components/TableInfo/TableInfo';
import FruitStorageForm from './FruitStorageForm/FruitStorageForm';

import Lightbox from '../../components/UI/Lightbox/Lightbox';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';

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
              <td className={modules.Cell}><Button id={pallet.id} clicked={(e) => this.props.editItemInit(e)} copy="Edit" size="Small" btnType="Rectangular" colorSet="WhiteGreen"/></td>
              <td className={modules.Cell}><Button id={pallet.id} clicked={(e) => this.props.deleteItem(e)} copy="Delete" size="Small" btnType="Rectangular" colorSet="WhiteGreen"/></td>
            </tr>
          )
        })}
      </tbody>);
  }

  addNewItemHandler = () => {
    this.props.onAddNewItemInit();
  }

  render() {
    const tableHeaders = ['Date', 'Pallet No', 'Sorting Date', 'Variety','Weight', 'ID', 'Edit', 'Delete' ];
    const isTableEmpty = !this.props.pallets.length;
    const content =  
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
      {this.props.editingInProgress ? <Lightbox clicked={this.onBackdropClick} header={"Edit the pallet data"} content={<FruitStorageForm editedItemId={this.props.editedItemId}/>} /> : null }
    </div>;

    return (
     this.props.loading ? <Spinner /> : content
    )
  }
}

const mapStateToProps = state => {
  return {
    pallets: state.fruitStorage.pallets,
    addingNewItem: state.fruitStorage.addingNewItem,
    loading: state.fruitStorage.loading,
    editingInProgress: state.fruitStorage.editingInProgress,
    editedItemId: state.fruitStorage.editedItemId   
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewItemInit: () => dispatch(actions.addNewItemInit()),
    onAddNewItemFinished: () => dispatch(actions.addNewItemFinished()),
    fetchPallets: () => dispatch(actions.fetchPallets()),
    deleteItem: (e) => dispatch(actions.deleteItem(e)),
    editItemInit: (e) => dispatch(actions.editItemInit(e))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FruitStorage);
