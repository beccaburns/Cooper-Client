import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import { getData } from '../Modules/PerformanceData';

class CooperGraph extends Component {
  state = {
    performanceData: null
  }
  
  componentDidMount() {   
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
      this.props.resultGraphUpdated();
    })
  }

   render() {
     let CooperGraphData;
    
     if (this.props.updateCooperChart === true) {
       this.getPerformanceData();
     };

     if (this.state.performanceData != null) {
      const distances = []
      const labels = []
      this.state.performanceData.forEach(item => {
        distances.push(item.data.distance)
        labels.push(item.data.message)
      })
      const data = {
        datasets: [
          {
            data: distances,
            label: 'Perfomance'
          }
        ], labels: labels
      }

      CooperGraphData = (      
        <Bar data={data} />
      )
    }
    return (
      <div>
        {CooperGraphData}
      </div>
    );
  }
}

export default CooperGraph;