import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import { getData } from '../Modules/PerformanceData';

class Chart extends Component{
  constructor(props) {
    super(props);
    this.state = {
      performanceData: null
      }
    }
  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({performanceData: result.data.entries}, () => {
			this.props.graphUpdated();
		})
	}
  
  render() {
    let dataIndex;
    
    if (this.props.renderChart === true) {
      this.getPerformanceData();
    }
    if(this.state.performanceData != null) {
      const distances = []
			const labels = []
			this.state.performanceData.forEach(entry => {
			distances.push(entry.data.distance)
			labels.push(entry.data.message)
			})
			const data = {
				datasets: [{
					data: distances,
					label: "saved distances",
				}],
				labels: labels,
			}
			dataIndex = (
				<>
				  <Line ref='chart' data={data} />
				</>
				)
			}

    return (
      <div>
      {dataIndex}
      </div>
      )
    }
  }

export default Chart;