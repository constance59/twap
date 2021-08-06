import React, {Component} from 'react';
import react from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js'
import axios from 'axios';
import { plot } from 'plotly.js';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TotalQty: '',
      Duration: '',
      UpperFixedPctOffset:'',
      LowerFixedPctOffset:'',
      UpperLeewayPctOffset:'',
      LowerLeewayPctOffset:'',
      StartBoundTaperPct:'',
      EndBoundTaperPct:'',
      ProximityThresholdToTake:'',
      TakerTargetProximity:'',
      Urgency:'',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Plotting...." + this.state.TotalQty+this.state.Duration+this.state.UpperFixedPctOffset+
    this.state.LowerFixedPctOffset+this.state.UpperLeewayPctOffset+this.state.LowerLeewayPctOffset+
    this.state.StartBoundTaperPct+this.state.EndBoundTaperPct+this.state.ProximityThresholdToTake+
    this.state.TakerTargetProximity);
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>TWAP Plotter</h1>
      
      {/*TotalQty*/}
      <label class='control-label' col-sm-2 for='TotalQty'>TotalQty: </label>
      <input
        type='number'
        name='TotalQty'
        className='form=control'
        onChange={this.myChangeHandler}
      />

      {/*Duration (in mintues)*/}
      <label class='control-label' col-sm-2 for='Duration'>Duration (in mintues): </label>
      <input
        type='number'
        name='Duration'
        onChange={this.myChangeHandler}
      />

      {/*UpperFixedPctOffset(%)*/}
      <label class='control-label' col-sm-2 for='UpperFixedPctOffset'>UpperFixedPctOffset(%): </label>
      <input
        type='number'
        name='UpperFixedPctOffset'
        onChange={this.myChangeHandler}
        />

      {/*LowerFixedPctOffset(%)*/}
      <label class='control-label' col-sm-2 for='LowerFixedPctOffset'>LowerFixedPctOffset(%): </label>
      <input
        type='number'
        name='LowerFixedPctOffset'
        onChange={this.myChangeHandler}
        />

      {/*UpperLeewayPctOffset(%)*/}
      <label class='control-label' col-sm-2 for='UpperLeewayPctOffset'>UpperLeewayPctOffset(%): </label>
      <input
        type='number'
        name='UpperLeewayPctOffset'
        onChange={this.myChangeHandler}
        />

      {/*LowerLeewayPctOffset(%)*/}
      <label class='control-label' col-sm-2 for='LowerLeewayPctOffset'>LowerLeewayPctOffset(%): </label>
      <input
        type='number'
        name='LowerLeewayPctOffset'
        onChange={this.myChangeHandler}
        />

      {/*StartBoundTaperPct(%)*/}
      <label class='control-label' col-sm-2 for='StartBoundTaperPct'>StartBoundTaperPct(%): </label>
      <input
        type='number'
        name='StartBoundTaperPct'
        onChange={this.myChangeHandler}
        />

      {/*EndBoundTaperPct(%)*/}
      <label class='control-label' col-sm-2 for='EndBoundTaperPct'>EndBoundTaperPct(%): </label>
      <input
        type='number'
        name='EndBoundTaperPct'
        onChange={this.myChangeHandler}
        />

      {/*ProximityThresholdToTake*/}
      <label class='control-label' col-sm-2 for='ProximityThresholdToTake'>ProximityThresholdToTake: </label>
      <input
        type='number'
        name='ProximityThresholdToTake'
        onChange={this.myChangeHandler}
        />

      {/*TakerTargetProximity*/}
      <label class='control-label' col-sm-2 for='TakerTargetProximity'>TakerTargetProximity: </label>
      <input
        type='number'
        name='TakerTargetProximity'
        onChange={this.myChangeHandler}
        />

      {/*Urgency*/}
      <label class='control-label' col-sm-2 for='Urgency'>Urgency: </label>
      <input
        type='number'
        name='Urgency'
        onChange={this.myChangeHandler}
        />
      
      <input 
      type='submit'
      style={{maxWidth:'150px', backgroundColor:'white', color:'black'}}>
      </input>
      
      
      
      </form>

    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));


export default MyForm;

