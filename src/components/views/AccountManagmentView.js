import React, {useState, useEffect} from 'react';
import AppNavigation from './AppNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

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


<Container>

<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Overview</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Update Account Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Reset Password</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="forth">Data and P.I.I.</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
            <h3>Update Account information</h3>
            <h4>{"<--"} </h4>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Confirm Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
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
                    Update
                </Button>
                </Form>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            <Form>
                <Form.Row>
                    {/* <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Update Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group> */}
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Request Password Reset?" />
                    </Form.Group>
                </Form.Row>
                    <Button variant="primary" type="submit">Send Reset Email</Button>
                </Form>
        </Tab.Pane>
        <Tab.Pane eventKey="forth">
            <Form>
                <h3>Destroy or Restore Account</h3>
                <Form.Row>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Requersts a download of all personal data?" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group id="formGridCheckbox1">
                        <Form.Check type="checkbox" label="Delete my account" />
                    </Form.Group>
                </Form.Row>
                    <Button variant="primary" type="submit">Submit requests</Button>
                </Form>
        </Tab.Pane>

        
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>



</Container>

        
     </div>
    )
  }

  export default AccountManagmentView;