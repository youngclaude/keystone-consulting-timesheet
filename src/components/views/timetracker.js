import React, { useState, useEffect, useRef } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppNavigation from './AppNavigation';
import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';

const TimeTrackerPage = (props) => {
    const [timerStopped, settimerStopped] = useState(false);
    const [ startTime, setStartTime] = useState(0);
    const [ currentTime, setCurrentTime] = useState(0);
    const [stopTime, setStopTime] = useState(0);
    const [readableTime, setReadableTime] = useState('');

    const [timeSheet, setTimeSheet] = useState([]);

    const timerStoppedRef = useRef(timerStopped);
    timerStoppedRef.current = timerStopped;

    // console.log("from TimeTrackerPage:", {props});
    // const {first_name, account_type} = props.userData.auth;
  
    let interval = null;
    const intervalRef = useRef(null);

    const nowRef = useRef(0);
    const currentTimeRef = useRef(0);

    const stopTimerRef = useRef(timerStopped);

    const startTimer = () => {
        if(!interval){
        const startTimeVal = Date.now();
        console.log("Timmer started: !");
        // settimerStopped(false);
        stopTimerRef.current = false;
        nowRef.current = startTimeVal;

        interval = setInterval( () =>{
            const now = Date.now();
            const distance = startTimeVal - now;

            const days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24))) > 1;
            const hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))));
            const minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60))/ (1000* 60)));
            const seconds = Math.abs(Math.floor((distance % (1000 * 60))/ 1000));

            let readableText = dateValueGroom(days, ' days') +": "+ dateValueGroom(hours, ' hrs') +": "+ dateValueGroom(minutes, ' mins') +": "+ dateValueGroom(seconds, ' secs');
            
            console.log("timer: ", readableText);
            //setCurrentTime(now);
            
            setReadableTime(readableText);
            currentTimeRef.current = now;
  
            checkIfStop(interval);
            // console.log("interval...", interval);                
            // clearInterval(interval);            
        }, 1000);

        // TODO: confirm that this work for unmounting
        intervalRef.current = interval;
        settimerStopped(stopTimerRef.current);
      }
    }

    
    // TODO: finish this
    const dateValueGroom = (val, period) => {
      val = val > 1 && val <60 ? val : 0;
      let message = "";
      if (period == " secs") {
        message =  val + period
      } else if (period == " mins") {
        message = val + period + " ";
      } else if (period == " hrs") {
        message = val + period + " ";
      }
      return message;
    }

    const handleAddTimeBlock = () => {     
        console.log("handleAddTimeBlock: startTime..", startTime, "currentTime...", currentTime);     
        
        const safeNowVal = nowRef["current"];
        const safeCurrentVal = currentTimeRef["current"];

        let timeSheetCopy = [];
        if(timeSheet.length <=  0){          
          const newTimeBlock = {
            started_at: Math.abs(safeNowVal),
            ended_at: Math.abs(safeCurrentVal)
          }
          timeSheetCopy[0] = newTimeBlock
        } else {
          timeSheetCopy = [...timeSheet];
          const newTimeBlock = {
            started_at: Math.abs(safeNowVal),
            ended_at: Math.abs(safeCurrentVal)
          }
          timeSheetCopy.push(newTimeBlock);
        }
              
        setTimeSheet(timeSheetCopy);
        // setStartTime(0);
        // setCurrentTime(0);
        setReadableTime('');
        settimerStopped(!timerStopped);
    };

    useEffect(()=>{
        // TODO: confirm that this works when unmounting
        return () => checkIfStop(interval, true);
    }, []);

    const checkIfStop = (givenInterval, forceStop = false) =>{
        if(timerStoppedRef.current){
            console.log("time to stop....");    
            console.log("checkIfStop: startTime..", startTime, "currentTime...", currentTime);   
            handleAddTimeBlock();
            clearInterval(givenInterval);
        }
        if (!timerStoppedRef.current && forceStop){             
            clearInterval(givenInterval);
        }
    }
  
    return (
      <div>
          { console.log("handleAddTimeBlock: startTime..", startTime, "currentTime...", currentTime) }
          <AppNavigation /> 
          <Row className="bg-dark" style={{padding: "50px 0px"}}>
            <Col className="text-center">
              <h1 className="text-light">Time Tracker</h1>
              <p className="text-muted">Track your work hourse to boost productivity </p>
            </Col>
          </Row>
          <Container >
            <Row>
              <Card body className="shadow p-3 mb-5 bg-body rounded col-12">
                <h4>Work Tracker {''}</h4><small>{''}</small>
                {/* <h4>Welcome {first_name ?? ''}</h4><small>{account_type ?? ''}<button onClick={handleLogout}>Logout</button></small> */}
                <div> <p>Time: <small>{readableTime ?? ''}</small></p> </div>
                <button className={"btn btn-lg btn-success col-6"} onClick={startTimer}>Start</button>
                <button className={"btn btn-lg btn-warning col-6"} onClick={()=> settimerStopped(true)}>Stop</button>
                <div>
                <ListGroup>
                  { timeSheet.length > 0 ? timeSheet.map((timesObj, index)=> <TimeBlock key={index} start={timesObj.started_at} end={timesObj.ended_at}/>) : null}
                </ListGroup>
                </div>
              </Card>
            </Row>
          </Container>
      </div>
    )
  }

  export default TimeTrackerPage;

  const TimeBlock = (props) =>{
    return <ListGroup.Item> <span>{Date(props.start)} </span> {" to "} <span>{Date(props.end)}</span> </ListGroup.Item>
  }