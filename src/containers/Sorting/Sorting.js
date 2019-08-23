import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableInfo from '../../components/TableInfo/TableInfo';

import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import Lightbox from '../../components/UI/Lightbox/Lightbox';

import * as actions from '../../store/actions/index';
import modules from './Sorting.module.css';

class Sorting extends Component {
  componentWillMount() {
    this.props.fetchSortingData();
  }

  prepareTableBody() {
    const data = this.props.data;
    return (
      <tbody>
        {data.map(item => {
          return (
            <tr key={item.id} className={modules.Row}>
              {Object.keys(item).map(info => {
                return (<td className={modules.Cell}>{item[info]}</td>)
              })}
              <td className={modules.Cell}><Button id={item.id} clicked={(e) => this.props.editSortingInit(e)} copy="Edit" size="Small" btnType="Rectangular" colorSet="WhiteGreen"/></td>
              <td className={modules.Cell}><Button id={item.id} clicked={(e) => this.props.deleteSorting(e)} copy="Delete" size="Small" btnType="Rectangular" colorSet="WhiteGreen"/></td>
            </tr>
          )
        })}
      </tbody>);
  }

  onBackdropClick = () => {
    this.props.onAddSortingFinished();
  }


  addNewSortingHandler = () => {
    this.props.onAddNewSortingInit();
  }

  render() {
    const tableHeaders = ['Date', 'Customer', 'Packaging', 'Weight In', 'Weight Out', 'Rejected', 'Edit', 'Delete' ];
    const isTableEmpty = !this.props.data.length;

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
        {!isTableEmpty ? this.prepareTableBody() : null}
      </table>
      <TableInfo 
        isEmpty={isTableEmpty}
        secondaryTitle={isTableEmpty ? "Click below to create new sorting": "Click the button below"}
        title={isTableEmpty ? "You haven't sorted anything yet" : "To create new sorting"} 
        addNewItem={this.addNewSortingHandler}
        />
        {this.props.addingInProgress ? <Lightbox clicked={this.onBackdropClick} header={"Fill in the form to add new sorting"}/> : null}
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
    addingInProgress: state.sorting.addingInProgress
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSortingData: () => dispatch(actions.fetchSortingData()),
    // editSortingInit: () => dispatch()
    // deleteSorting: () => dispatch()
    onAddSortingFinished: () => dispatch(actions.onAddSortingFinished()),
    onAddNewSortingInit: () => dispatch(actions.onAddNewSortingInit())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);