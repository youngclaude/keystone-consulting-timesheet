import React, {useState, useEffect} from 'react';
import AppNavigation from './AppNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const AccountManagmentView = ()=>{
    useEffect(()=>{
        console.log("Hellp from AccountManagmentView");
        fetch('http://localhost:9000/testapi')
        .then(res => res.text())
        .then(result => console.log("the results is...", result))
        .catch(error => console.log("Error: ", error));
    },
    [])


    return (
     <div>
        <AppNavigation />
        <Row className="bg-dark" style={{padding: "50px 0px"}}>
            <Col className="text-center">
                <h1 className="text-light">Account Managment</h1>
                <p className="text-muted">Manage account details</p>
            </Col>
        </Row>
        <h1></h1>
        <ul>
            <li>Update first or last name</li>
            <li>Update your password</li>
            <li>Request pasworrd reset email</li>
            <li>Destroy or Restore Account</li>
        </ul>


<Container>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
    </Form.Row>

    <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
</Container>

        
     </div>
    )
  }

  export default AccountManagmentView;