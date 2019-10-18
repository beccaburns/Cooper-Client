import React from 'react';
import { 
  Container, 
  Button, 
  Grid,
} from 'semantic-ui-react';

const LoginForm = (props) => {
  return (
    <Container>
      <Grid>
        <div id="login-form" className="login-form">
          <div>
            <label >Email</label>
            <input id="email" onChange={props.inputChangeHandler}></input>
          </div>

          <div>
            <label>Password</label>
            <input id="password" onChange={props.inputChangeHandler}></input>
          </div>
          <Button onClick={(e) => props.loginHandler(e)} id="submit">Submit</Button>
        </div>
      </Grid>
    </Container>
  )
}

export default LoginForm;