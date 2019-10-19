import React, {Component} from 'react';
import ChartComponent, {Bar} from 'react-chartjs-2';
import { getData } from '../Modules/PerformanceData';

class Graph extends Component {
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
    })
  }

   render() {
     return (
       <div className="Graph">
        <Bar
            data={data} 
            width={50} 
            height={100}
            options={{ maintainAspectRatio: false }}
        />
       </div>
     )
   }
}









export default Graph;