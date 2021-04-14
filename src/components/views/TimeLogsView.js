import React, {useState, useEffect} from 'react';
import AppNavigation from './AppNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TimeLogsView = () => {

    return (
        <div>
            <AppNavigation />
            <Row className="bg-dark" style={{padding: "50px 0px"}}>
                <Col className="text-center">
                    <h1 className="text-light">Time Logs</h1>
                    <p className="text-muted">View past timelogs</p>
                </Col>
            </Row>

            


        </div>
    )
  }
export default TimeLogsView;