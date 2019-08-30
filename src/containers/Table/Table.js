import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';

import modules from './Table.module.css';

class Table extends Component {

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

  render() {
    return (
    <table className={modules.Table}>
      <thead>
      <tr className={modules.Row}>
          {this.props.tableHeaders.map(headerEl => {
            return <th className={modules.Header} key={headerEl}>{headerEl}</th>;
          })}
        </tr>
      </thead>
      {!this.props.isTableEmpty ? this.prepareTableBody() : null}
    </table>)
  }
}

export default Table;
