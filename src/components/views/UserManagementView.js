import React, {useState, useEffect} from 'react';
import AppNavigation from './AppNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UserManagementView = () =>{
  
    return (
      <div>
          <AppNavigation />
          <Row className="bg-dark" style={{padding: "50px 0px"}}>
            <Col className="text-center">
              <h1 className="text-light">User Managment</h1>
              <p className="text-muted">View past timelogs</p>
            </Col>
          </Row>
        <ul>
          <li>View All Users At your company</li>
          <li>View deatiled breakeddown for each user</li>
          <li>Complete actions: update, destroy or revocer User Data</li>
        </ul>
      </div>
    )
   }

export default UserManagementView;