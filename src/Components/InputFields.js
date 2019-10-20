import React from 'react';
import { 
  Form,
  Dropdown,
} from 'semantic-ui-react';

const InputFields = (props) => {
  const optionValues = [
    {text: "Female", value: "female"},
    {text: "Male", value: "male"}
  ]
  return (
    <>
    <Form type="large">
    <Form.Input 
      fluid id="distance" 
      placeholder="Distance" 
      onChange={props.inputChangeHandler}
    />
    <Form.Input 
      fluid id="age" 
      placeholder="age"
      onChange={props.inputChangeHandler}
    />
    </Form>
    
    <Dropdown 
      selection id="gender" 
      defaultValue={optionValues[0].value} 
      options={optionValues} 
      onChange={(e,{value}) => props.handleGenderChange(value)}
    />
    </>
  )
}

export default InputFields;