import React, { Component } from 'react';
import axios from '../../../axios-instance';

import Auxi from '../../../hoc/Auxi/Auxi';

import Input from '../../../components/UI/Input/Input';
import Label from '../../../components/UI/Label/Label';
import Button from '../../../components/UI/Button/Button';
import Select from '../../../components/UI/Select/Select';

import modules from './FruitStorageForm.module.css';

class FruitStorageForm extends Component {
  state = {
    formConfig: {
      inputs: {
        arrivalDate: {
          id: "arrivalDate",
          placeholder: "When this pallet arrived?",
          label: "Date:",
          type: "date"
        },
        number: {
          id: "number",
          placeholder: "What is the number of this pallet?",
          label: "Pallet Number:",
          type: "number"
        },
        weight: {
          id: "weight",
          placeholder: "What is the weight of this pallet?",
          label: "Weight:",
          type: "text"
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
      }
    },
    arrivalDate: null,
    number: null,
    weight: null,
    variety: '',
    quality: null
  }

  addNewPallet = (e) => {
    e.preventDefault();
    const palletInfo = {
      arrivalDate: this.state.arrivalDate,
      number: this.state.number,
      weight: this.state.weight,
      variety: this.state.variety,
      quality: this.state.quality
    }
    axios.post('/fruit-storage/data.json', palletInfo);
  }

  inputChangeHandler = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState({[name]: value})
  }

  render() {
    return (
      <form className={modules.Form}>
        {Object.keys(this.state.formConfig.inputs).map(el => {
          const element = this.state.formConfig.inputs[el]
          return (
            <Auxi key={element.id}>
              <Label key={element.label} id={element.id} label={element.label}/>
              <Input onChange={(e) => this.inputChangeHandler(e)} type={element.type} key={element.placeholder} id={element.id} placeholder={element.placeholder} />
            </Auxi>
          );
        })}
        <Select options={this.state.formConfig.varieties} id="variety" onChange={(e) => this.inputChangeHandler(e)} />
        <Button clicked={this.addNewPallet} btnType="Rectangular" colorSet="WhiteGreen" copy="Submit" />
      </form>
    )
  }
}

export default FruitStorageForm;