import React from 'react'
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LogIn.css'
export const LogIn = () => {
  return (
    <>
    <div className='popup'>  
<div className='popupInner'>  
<Form>
    <h1>Welcome Back Dear User!</h1>
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
export default LogIn;