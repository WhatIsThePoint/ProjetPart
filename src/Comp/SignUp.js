import React from 'react'
import './SignIn.css'
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export const SignUp = () => {
    return (
        <>
<div className='popup'>  
<div className='popupInner'>  
<Form>
    <h1>Looks Like You are New</h1>
    <Form.Group>
      <Form.Control placeholder="First name" />
      </Form.Group>
      <Form.Group>
      <Form.Control placeholder="Last name" />
      </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <div className='buttons'>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
 
</Form>
</div>  
</div>  
        </>
    )
}
export default SignUp;