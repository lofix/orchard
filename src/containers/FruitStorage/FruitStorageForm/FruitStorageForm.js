import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { updateObject, checkValidation } from '../../../shared/utility';

import Auxi from '../../../hoc/Auxi/Auxi';

import Input from '../../../components/UI/Input/Input';
import Label from '../../../components/UI/Label/Label';
import Button from '../../../components/UI/Button/Button';
import Select from '../../../components/UI/Select/Select';

import modules from './FruitStorageForm.module.css';

class FruitStorageForm extends Component {
  state = {
    inputs: {
      arrivalDate: {
        id: "arrivalDate",
        placeholder: "When this pallet arrived?",
        label: "Date:",
        type: "date",
        validation: {
          required: true
        },
        valid: false,
        value: '',
        touched: false
      },
      number: {
        id: "number",
        placeholder: "What is the number of this pallet?",
        label: "Pallet Number:",
        type: "number",
        validation: {
          required: true
        },
        valid: false,
        value: '',
        touched: false
      },
      weight: {
        id: "weight",
        placeholder: "What is the weight of this pallet?",
        label: "Weight:",
        type: "text",
        validation: {
          required: true
        },
        valid: false,
        value: '',
        touched: false
      },
    },
    varieties: {
      Duke: {
        value: "Duke"
      },
      Elliot: {
        value: "Elliot"
      },
      Nelson: {
        value: "Nelson"
      },
      Bluecrop: {
        value: "Bluecrop"
      },
      Chandler: {
        value: "Chandler"
      },
    },
    isFormValid: false,
    arrivalDate: null,
    number: null,
    weight: null,
    variety: 'Duke',
    quality: null,
    sortingDate: '-'
  }

  addNewPallet = (e) => {
    e.preventDefault();
    const palletInfo = {
      arrivalDate: this.state.inputs.arrivalDate.value,
      number: this.state.inputs.number.value,
      variety: this.state.variety,
      weight: this.state.inputs.weight.value,
      sortingDate: this.state.sortingDate,
      quality: this.state.quality
    }
    this.props.onAddNewPallet(palletInfo);
  }

  editPallet = (e) => {
    const editedItemId = this.props.editedItemId;
    const palletInfo = {
      arrivalDate: this.state.inputs.arrivalDate.value,
      number: this.state.inputs.number.value,
      variety: this.state.variety,
      weight: this.state.inputs.weight.value,
      sortingDate: this.state.sortingDate,
      quality: this.state.quality
    }
    this.props.onEditItem(palletInfo, editedItemId);
  }

  inputChangeHandler = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    const element = this.state.inputs[name];
    const updatedElement = updateObject(element, {
      value,
      touched: true,
      valid: checkValidation(value, element.validation)
    });
    const updatedForm = updateObject(this.state.inputs, {
      [name]: updatedElement
    });

    let isFormValid = true;
    for ( let id in updatedForm ) {
      isFormValid = updatedForm[id].valid && isFormValid;
    }
    this.setState({
      inputs: updatedForm,
      isFormValid 
    })
  }

  selectChangeHandler = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState({[name]: value})
  }

  render() {
    return (
      <form className={modules.Form}>
        {Object.keys(this.state.inputs).map(el => {
          const element = this.state.inputs[el]
          return (
            <Auxi key={element.id}>
              <Label key={element.label} id={element.id} label={element.label}/>
              <Input onChange={(e) => this.inputChangeHandler(e)} type={element.type} key={element.placeholder} id={element.id} placeholder={element.placeholder} />
            </Auxi>
          );
        })}
        <Select options={this.state.varieties} id="variety" onChange={(e) => this.selectChangeHandler(e)} />
        <Button size="Large" disabled={!this.state.isFormValid} clicked={this.props.editedItemId ? this.editPallet : this.addNewPallet} btnType="Rectangular" colorSet="WhiteGreen" copy="Submit" />
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {
    editedItemId: state.fruitStorage.editedItemId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddNewPallet: (itemData) => dispatch(actions.addNewPalletSuccess(itemData)),
    onEditItem: (itemData, editedItemId) => dispatch(actions.editPalletSuccess(itemData, editedItemId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FruitStorageForm);