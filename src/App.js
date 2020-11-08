import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import OrderForm from './OrderForm'
import FeatureName from './FeatureName'
import OrderSummary from './OrderSummary'

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  render() { 
    console.log(this.props)
    return (
         <div className="App"> 
            <Header /> 
            <main> 
                <OrderForm
                    fs={this.props.features} 
                    selected={this.state.selected} 
                    //updateFeature={this.updateFeature} 
                /> 
                <OrderSummary state={this.state.selected} /> 
            </main> 
        </div> 
    ); 
  } 
}

export default App;

