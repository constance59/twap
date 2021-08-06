import React, {Component} from 'react';
import react from 'react';
import reactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js'
import axios from 'axios';
import { plot } from 'plotly.js';

class MyForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      qty: '',
      
    }
  }
}

class App extends Component{
  render(){
    return (
      <div classname="container">
        <h1 style={{color:'black'}}> TWAP Plotter</h1>
        <form class='form-horizontal' action='/action_page.php'>
        <div className='form-group'> 
            {/*TotalQty*/}
            <label class='control-label' col-sm-2 for='TotalQty'>TotalQty: </label>
            <div class='col-sm-10'>
            <input type='email' id= 'TotalQty' className='form=control'/>
            </div>

            {/*Duration (in mintues)*/}
            <label class='control-label' col-sm-2 for='Duration'>Duration (in mintues): </label>
            <div class='col-sm-10'>
            <input type='email' id= 'Duration' className='form=control'/>
            </div>
        
            {/*UpperFixedPctOffset(%)*/}
            <label class='control-label' col-sm-2 for='UpperFixedPctOffset'>UpperFixedPctOffset(%): </label>
            <div class='col-sm-10'>
            <input type='email' id= 'UpperFixedPctOffset' className='form=control'/>
            </div>
          
            {/*LowerFixedPctOffset(%)*/}
            <label class='control-label' col-sm-2 for='LowerFixedPctOffset'>LowerFixedPctOffset(%): </label>
            <div class='col-sm-10'>
            <input type='email' id= 'LowerFixedPctOffset' className='form=control'/>
            </div>
            
            {/*UpperLeewayPctOffset(%)*/}
            <label class='control-label' col-sm-2 for='UpperLeewayPctOffset'>UpperLeewayPctOffset(%): </label>
            <div class='col-sm-10'>
            <input type='email' id= 'UpperLeewayPctOffset' className='form=control'/>
            </div>

            {/*LowerLeewayPctOffset(%)*/}
            <label class='control-label' col-sm-2 for='LowerLeewayPctOffset'>LowerLeewayPctOffset(%): </label>
            <div class='col-sm-10'>
            <input type='email' id= 'LowerLeewayPctOffset' className='form=control'/>
            </div>
           
           {/*StartBoundTaperPct(%)*/}
            <label class='control-label' col-sm-2 for='StartBoundTaperPct'>StartBoundTaperPct(%): </label>
            <div class='col-sm-10'>
            <input type='email' id= 'StartBoundTaperPct' className='form=control'/>
            </div>

           {/*EndBoundTaperPct(%)*/}
           <label class='control-label' col-sm-2 for='EndBoundTaperPct'>EndBoundTaperPct(%): </label>
            <div class='col-sm-10'>
            <input type='email' id= 'EndBoundTaperPct' className='form=control'/>
            </div>

           {/*ProximityThresholdToTake*/}
           <label class='control-label' col-sm-2 for='ProximityThresholdToTake'>ProximityThresholdToTake: </label>
            <div class='col-sm-10'>
            <input type='email' id= 'ProximityThresholdToTake' className='form=control'/>
            </div>

           {/*TakerTargetProximity*/}
           <label class='control-label' col-sm-2 for='TakerTargetProximity'>TakerTargetProximity: </label>
            <div class='col-sm-10'>
            <input type='email' id= 'TakerTargetProximity' className='form=control'/>
            </div>

           {/*Urgency*/}
           <label class='control-label' col-sm-2 for='Urgency'>Urgency: </label>
            <div class='col-sm-10'>
            <input type='email' id= 'Urgency' className='form=control'/>
            </div>
        </div>
          
    
        <div>



        </div>
        </form>

      <div class='container'>        
        <div class='col-sm-offset-2 col-sm-10'>
        <button type='button' class='btn' 
        style={{maxWidth:'150px', backgroundColor:'grey', color:'black'}}> 
        Plot </button>
        </div>
        
        {/*Plot data*/}
        <div>
          <plot>



          </plot>


        </div>



      </div>
      
      </div>
    );

  }
}
export default App;