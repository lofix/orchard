import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableInfo from '../../components/TableInfo/TableInfo';
import FruitStorageForm from './FruitStorageForm/FruitStorageForm';
import Table from '../Table/Table';

import Lightbox from '../../components/UI/Lightbox/Lightbox';
import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';

import modules from './FruitStorage.module.css';

class FruitStorage extends Component {
  componentWillMount() {
    this.props.fetchPallets();
  }

  onAddingBackdropClick = () => {
    this.props.onAddNewItemFinished();
  }

  onEditingBackdropClick = () => {
    this.props.onEditItemFinished();
  }

  addNewItemHandler = () => {
    this.props.onAddNewItemInit();
  }

  render() {
    const tableHeaders = ['Date', 'Pallet No', 'Sorting Date', 'Variety','Weight', 'ID', 'Edit', 'Delete' ];
    const isTableEmpty = !this.props.pallets.length;
    const content =  
    <div className={modules.TableContainer}>
      <Table 
        tableHeaders={tableHeaders}
        isTableEmpty={isTableEmpty}
        data={this.props.pallets}
        allowEditing
        editItem={this.props.editItemInit}
        allowDeleting
        deleteItem={this.props.deleteItem}
      />
      <TableInfo
        isEmpty={isTableEmpty}
        title={isTableEmpty ? "Currently there are no blueberries in your coldroom." : "In order to add more pallets"}
        secondaryTitle={isTableEmpty ? "Click below to add a new pallet!" : "Click the button below!"}
        addNewItem={this.addNewItemHandler}
      />
      {this.props.addingNewItem ? <Lightbox clicked={this.onAddingBackdropClick} header={"Fill the form and add a new pallet!"} content={<FruitStorageForm />}/> : null}
      {this.props.editingInProgress ? <Lightbox clicked={this.onEditingBackdropClick} header={"Edit the pallet data"} content={<FruitStorageForm editedItemId={this.props.editedItemId}/>} /> : null }
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
    onEditItemFinished: () => dispatch(actions.editItemFinished()), 
    onAddNewItemFinished: () => dispatch(actions.addNewItemFinished()),
    fetchPallets: () => dispatch(actions.fetchPallets()),
    deleteItem: (e) => dispatch(actions.deleteItem(e)),
    editItemInit: (e) => dispatch(actions.editItemInit(e))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FruitStorage);
