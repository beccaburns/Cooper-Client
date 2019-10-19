import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chartData:{
        distance: [],
        age: [],
        }

      }
    }
  
  render() {
    return (
      <>
      <Bar
        data={this.state.chartData}
        options={{
          maintainAspectRatio: false
        }}
      />
      </>
    )
  };
}

export default Chart;