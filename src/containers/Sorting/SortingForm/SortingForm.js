import React, { Component } from 'react';
import modules from './SortingForm.module.css';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { updateObject, checkValidation } from '../../../shared/utility';

import Auxi from '../../../hoc/Auxi/Auxi';

import Input from '../../../components/UI/Input/Input';
import Label from '../../../components/UI/Label/Label';
import Button from '../../../components/UI/Button/Button';
import Select from '../../../components/UI/Select/Select';

class SortingForm extends Component {
  state = {
    inputs: {
      sortingDate: {
        id: "sortingDate",
        placeholder: "When is the sorting?",
        label: "Sorting Date:",
        type: "date",
        validation: {
          required: true
        },
        valid: false,
        value: '',
        touched: false
      },
      Customer: {
        id: "customer",
        placeholder: "Who is it sorted for?",
        label: "Customer:",
        type: "text",
        validation: {
          required: true
        },
        valid: false,
        value: '',
        touched: false
      },
      typeOfPackaging: {
        id: "typeOfPackaging",
        placeholder: "What is the packaging type?",
        label: "Packaging Type:",
        type: "text",
        validation: {
          required: true
        },
        valid: false,
        value: '',
        touched: false
      },
      weightOut: {
        id: "weightOut",
        placeholder: "How many kg was after sorting?",
        label: "Weight out:",
        type: "number",
        validation: {
          required: true
        },
        valid: false,
        value: '',
        touched: false
      },
      rejected: {
        id: "rejected",
        placeholder: "How many kg was rejected?",
        label: "Rejected:",
        type: "number",
        validation: {
          required: true
        },
        valid: false,
        value: '',
        touched: false
      },
    },
    isFormValid: false,
    sortingDate: null,
    customer: null,
    typeOfPackaging: null,
    weightIn: null,
    weightOut: null,
    rejected: null,
    variety: 'Duke',
    quality: null,
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

  render () {
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
        <Button size="Large" disabled={!this.state.isFormValid} clicked={this.props.editedItemId ? this.editPallet : this.addNewPallet} btnType="Rectangular" colorSet="WhiteGreen" copy="Submit" />
      </form>
    )
  }
}

export default SortingForm;