import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      chartData:props.chartData
      }
    }

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right'
  }
  
  render() {
    return (
      <>
      <Bar
        data={this.state.chartData}
        options={{
          title:{
            display:this.props.displayTitle,
            text: 'Cooper Challenge Results',
            fontSize:25
          }, 
          legend:{
            display:this.props.displayLegend,
            position:'right'
          },
          maintainAspectRatio: false

        }}
      />
      </>
    )
  };
}

export default Chart;