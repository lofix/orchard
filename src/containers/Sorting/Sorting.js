import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableInfo from '../../components/TableInfo/TableInfo';
import SortingForm from './SortingForm/SortingForm';
import Table from '../Table/Table';

import Spinner from '../../components/UI/Spinner/Spinner';
import Lightbox from '../../components/UI/Lightbox/Lightbox';

import * as actions from '../../store/actions/index';
import modules from './Sorting.module.css';

class Sorting extends Component {
  componentWillMount() {
    this.props.fetchSortingData();
  }

  preparePalletsData() {
    console.log(this.props.availablePallets);
    const pallets = []
    this.props.availablePallets.map(pal => {
      pallets.push({
        arrivalDate: pal.arrivalDate,
        number: pal.number,
        weight: pal.weight,
        variety: pal.variety,
        id: pal.id
      })
    });
    return pallets;    
  }

  onBackdropClick = () => {
    this.props.onAddSortingFinished();
  }

  addNewSortingHandler = () => {
    this.props.onAddNewSorting();
  }

  render() {
    const sortingTableHeaders = ['Sorting Date', 'Customer', 'Packaging', 'Weight In', 'Weight Out', 'Rejected', 'Edit', 'Delete' ];
    const palletsTableHeaders = ['Date', 'Pallet No', 'Weight', 'Variety', 'Id'];
    const isTableEmpty = !this.props.data.length;

    const content = 
      <div className={modules.TableContainer}>
        <Table 
          isTableEmpty={!this.props.data.length}
          tableHeaders={sortingTableHeaders}
          data={this.props.data}
        />
        <TableInfo 
          isEmpty={isTableEmpty}
          secondaryTitle={isTableEmpty ? "Click below to create new sorting": "Click the button below"}
          title={isTableEmpty ? "You haven't sorted anything yet" : "To create new sorting"} 
          addNewItem={this.addNewSortingHandler}
        />
          {this.props.selectingPallets ? <Lightbox clicked={this.onBackdropClick} header={"First select pallets which were sorted"} content={<Table allowSelecting tableHeaders={palletsTableHeaders} isTableEmpty={false} data={this.preparePalletsData()}/>}/> : null}
          {this.props.addingInProgress ? <Lightbox clicked={this.onBackdropClick} header={"Fill in the form to add new sorting"} content={<SortingForm />}/> : null}
      </div>
    
    return (
      this.props.loading ? <Spinner /> : content
    )
  }
};

const mapStateToProps = state => {
  return {
    loading: state.sorting.loading,
    data: state.sorting.data,
    selectingPallets: state.sorting.selectingPallets,
    availablePallets: state.sorting.availablePallets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSortingData: () => dispatch(actions.fetchSortingData()),
    // editSortingInit: () => dispatch()
    // deleteSorting: () => dispatch()
    onAddSortingFinished: () => dispatch(actions.onAddSortingFinished()),
    onAddNewSorting: () => dispatch(actions.onAddNewSorting())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);