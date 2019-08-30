import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

import modules from './Table.module.css';

class Table extends Component {
  prepareTableBody() {
    const data = this.props.data;
    return (
      <tbody>
        {data.map((item, idx) => {
          return (
            <tr key={idx} className={modules.Row}>
              {Object.keys(item).map((info, idx) => {
                return (<td key={idx} className={modules.Cell}>{item[info]}</td>)
              })}
              {this.props.allowEditing ? <td className={modules.Cell}><Button id={item.id} clicked={(e) => this.props.editItem(e)} copy="Edit" size="Small" btnType="Rectangular" colorSet="WhiteGreen"/></td> : null}
              {this.props.allowDeleting ? <td className={modules.Cell}><Button id={item.id} clicked={(e) => this.props.deleteItem(e)} copy="Delete" size="Small" btnType="Rectangular" colorSet="WhiteGreen"/></td> : null}
              {this.props.allowSelecting ? <td className={modules.Cell}><Input id={item.id} type='checkbox' onChange={this.props.onSelect} /></td> : null}
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
      </table>
    )
  }
}

export default Table;
