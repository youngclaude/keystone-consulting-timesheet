import React, {useState, useEffect} from 'react';
import AppNavigation from './AppNavigation';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';

const TimeLogsView = () => {
    const timeLogs = {"time_logs": [
        {
          "id": 134,
          "user_id": 4,
          "started_at": "2021-01-09T09:51:43.000000Z",
          "ended_at": "2021-01-09T16:29:43.000000Z",
          "created_at": "2021-02-09T16:01:43.000000Z",
          "updated_at": "2021-02-09T16:01:43.000000Z",
          "deleted_at": null,
          "is_archived": false,
          "duration": "6 hrs 38 mins"
        },
        {
          "id": 135,
          "user_id": 4,
          "started_at": "2021-01-10T07:52:43.000000Z",
          "ended_at": "2021-01-10T13:24:43.000000Z",
          "created_at": "2021-02-09T16:01:43.000000Z",
          "updated_at": "2021-02-09T16:01:43.000000Z",
          "deleted_at": null,
          "is_archived": false,
          "duration": "5 hrs 32 mins"
        },
        {
          "id": 136,
          "user_id": 4,
          "started_at": "2021-01-12T07:36:43.000000Z",
          "ended_at": "2021-01-12T11:08:43.000000Z",
          "created_at": "2021-02-09T16:01:43.000000Z",
          "updated_at": "2021-02-09T16:01:43.000000Z",
          "deleted_at": null,
          "is_archived": false,
          "duration": "3 hrs 32 mins"
        },
        {
          "id": 137,
          "user_id": 4,
          "started_at": "2021-01-14T09:01:43.000000Z",
          "ended_at": "2021-01-14T18:54:43.000000Z",
          "created_at": "2021-02-09T16:01:43.000000Z",
          "updated_at": "2021-02-09T16:01:43.000000Z",
          "deleted_at": null,
          "is_archived": false,
          "duration": "9 hrs 53 mins"
        },
        {
          "id": 138,
          "user_id": 4,
          "started_at": "2021-01-15T04:02:43.000000Z",
          "ended_at": "2021-01-15T08:03:43.000000Z",
          "created_at": "2021-02-09T16:01:43.000000Z",
          "updated_at": "2021-02-09T16:01:43.000000Z",
          "deleted_at": null,
          "is_archived": false,
          "duration": "4 hrs 1 min"
        },
        {
          "id": 139,
          "user_id": 4,
          "started_at": "2021-01-17T04:12:43.000000Z",
          "ended_at": "2021-01-17T11:33:43.000000Z",
          "created_at": "2021-02-09T16:01:43.000000Z",
          "updated_at": "2021-02-09T16:01:43.000000Z",
          "deleted_at": null,
          "is_archived": false,
          "duration": "7 hrs 21 mins"
        },
        {
          "id": 140,
          "user_id": 4,
          "started_at": "2021-01-18T06:23:43.000000Z",
          "ended_at": "2021-01-18T12:28:43.000000Z",
          "created_at": "2021-02-09T16:01:43.000000Z",
          "updated_at": "2021-02-09T16:01:43.000000Z",
          "deleted_at": null,
          "is_archived": false,
          "duration": "6 hrs 5 mins"
        }
    ]
};
    return (
        <div>
            <AppNavigation />
            <Row className="bg-dark" style={{padding: "50px 0px"}}>
                <Col className="text-center">
                    <h1 className="text-light">Time Logs</h1>
                    <p className="text-muted">View past timelogs</p>
                </Col>
            </Row>
        <Container>
            {
                timeLogs.time_logs.map((logObj)=><p>{logObj.duration}</p>)
            }
        </Container>



        </div>
    )
  }
export default TimeLogsView;