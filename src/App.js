import React, { Component } from 'react';
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from "./Components/InputFields";
import LoginForm from './Components/LoginForm';
import { authenticate } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import Chart from './Components/Chart';
import { 
  Container, 
  Grid,
  Form,
  Header,
  Button,
  Segment,
} from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false,
      authenticated: false,
      email: '',
      password: '',
      message: '',
      entrySaved: false,
      renderIndex: false,
      renderChart: false
      }
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true, updateChart: true });
  }

  getChartData() {
    this.setState({ updateChart: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  handleGenderChange(value) {
		this.setState({ gender: value})
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    });
  }

  hideLoginForm() {
    this.setState({ renderLoginForm: false });
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false });
    }
  }

  render() {
    let renderLogin;
    let user;
    let performanceDataIndex;
    let performanceDataChart;

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid;
      renderLogin = (
        <p>Hi {user}</p>
      )
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex={this.state.updateIndex}
              indexUpdated={this.indexUpdated.bind(this)}
            />
            <Button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
          </>
        );
      } else {
        performanceDataIndex = (
          <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
        )
      }
      if (this.state.renderChart === true) {
        performanceDataChart = (          
        <>
          <Chart
            updateChart={this.state.updateChart}
            chartUpdated={this.chartUpdated.bind(this)}
          />
        </>
        )
      }
    } else {
      if (this.state.renderLoginForm === true) {
        renderLogin = (
          <div className="login-form">
            <LoginForm 
              loginHandler={this.onLogin.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </div>
        );
     } else {
        renderLogin = (
          <>
            <Button id="login" onClick={() => this.setState({ renderLoginForm: true })}>Login</Button>
            <p>{this.state.message}</p>
          </>
        )
      }
    }
    
    return (
      <Container>
        <Grid centered columns={1}>
          <Grid.Column>
            <Segment>
              <Form>
                <Header as="h2" id="h2" textAlign="center">
                  Cooper Challenge
                </Header>
          
                <div>
                  <InputFields
                    inputChangeHandler={this.onChange.bind(this)}
                    handleGenderChange={this.handleGenderChange.bind(this)}
                  />

                  <DisplayCooperResult
                    distance={this.state.distance}
                    gender={this.state.gender}
                    age={this.state.age}
                    authenticated={this.state.authenticated}
                    entrySaved={this.state.entrySaved}
                    entryHandler={this.entryHandler.bind(this)}
                  />
                  {performanceDataIndex}
                  {performanceDataChart}

                </div>
              </Form>
            </Segment>
            {renderLogin}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;