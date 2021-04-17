import React, {useState, useEffect} from 'react';
import AppNavigation from './AppNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const UserManagementView = () =>{
  
    return (
      <div>
          <AppNavigation />
          <Row className="bg-dark" style={{padding: "50px 0px"}}>
            <Col className="text-center">
              <h1 className="text-light">User Managment</h1>
              <p className="text-muted">
        <ul>
          <li>View All Users At your company</li>
          <li>View deatiled breakeddown for each user</li>
          <li>Complete actions: update, destroy or revocer User Data</li>
        </ul></p>
            </Col>
          </Row>
          <i class="bi-alarm"></i>
        <Container>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
        
      </div>
    )
   }

export default UserManagementView;