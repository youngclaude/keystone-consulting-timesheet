import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
// import './App.css';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import TimeTrackerPage from './components/views/timetracker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import AccountManagmentView from './components/views/AccountManagmentView';
import UserManagementView from './components/views/UserManagementView';
import TimeLogsView from './components/views/TimeLogsView';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [userData, setUserData] = useState('');
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Credentials", true);
    myHeaders.append("Access-Control-Allow-Origin", "https://fieldpulse.keystrokeconsulting.com/");
    myHeaders.append("Access-Control-Allow-Headers", "https://fieldpulse.keystrokeconsulting.com/");


    // Access-Control-Allow-Headers 
    // . Also, make sure the HTTP headers Access-Control-Allow-Origin and Access-Control-Allow-Headers 
    // are set and not with a wildcard *
    myHeaders.append("Cookie", "remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ii94WTR3M2VVWFh6dU5XZEVkOHBZM3c9PSIsInZhbHVlIjoiZ2l2eGlUdGFyRmFFNzNxWWFXS3dlOTYyN1lEaFZ3SGtGM3crQ09TZGZVdkhqWkN0aXh0SFpjVlkyNy9Pek5iWkFDNlJ6SDhQOExBKy8ySGdSTmpMQ0h3bDhTR0l6aUJLbk4zNkNTbmE1UFZpcDV3TXBsOEZrMmJGdW9HeEEvSjZ4RzRFa3RVcHZtRndnUWtjclBZZ2F2akZiZXZnVVdicjhES01MUWtidTNvPSIsIm1hYyI6ImIzOWZjMTM2NzJkMTJjZWNjZDU4ZDAxMjM0YzI2NGMzN2E0Mjc2ZTAzM2JhYzQyZDNjYWM3MmUyZjIzYTYwOGUifQ%3D%3D; expires=Mon, 13-Apr-2026 02:44:07 GMT; Max-Age=157680000; path=/; httponly; samesite=lax"); 
    myHeaders.append("Cookie", "field_pulse_session=qU6vghDbFgyY6dYMLL9IxcVS3OFeRJCfPMSc4CL2; expires=Wed, 14-Apr-2021 04:44:07 GMT; Max-Age=7200; path=/; httponly; samesite=lax");    
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };    

    fetch("https://fieldpulse.keystrokeconsulting.com/api/sessions/current", requestOptions)
      .then(response => response.text())
      .then(result => console.log("FROM Get Current User: ", result))
      .catch(error => console.log('error', error));
  }, )


  const handleLoginSumbition = (e) =>{
    e.preventDefault(); 
    console.log("Hello from: handleLoginSumbition ");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "field_pulse_session=X2rQdRagjte548WBGLgHTCGET0fMiOCvvdniOivP; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ik9OYlpXTCs1M3daNmZCMXRIbXpmTUE9PSIsInZhbHVlIjoicG83em51bGpNbkV3azNacjdhNGtoVkpaSHVTUWhGMlZLMFdTOW9lZGd0TTRSY1JRY0xmTmF5N3gzeVJzOEZ5TXZwUnNlY2lPSWRsV1ZONTBwcmt0Y2wvMEhHeExhUnp3TWt1cXp6OGl4cXdOd2FCNDZKVllmVjd4a1FpYVhxdE9DNDM0SGYvMHhMU2VTWmlKQUNQTnZRRk5GYitENEdHMkkrM3B5OGh5cmpZPSIsIm1hYyI6IjAwNWQ5OGJiZDI3OGQ5OWY3NDI2ZmRhY2I5NTJlNWI0YTNhYWUyMDIxYzllMGRiYzYwYTBjOTc3Y2MwMzMwOTQifQ%3D%3D");
    myHeaders.append("Access-Control-Allow-Origin", "https://fieldpulse.keystrokeconsulting.com/");
    myHeaders.append("Access-Control-Allow-Headers", "https://fieldpulse.keystrokeconsulting.com/");

    var raw = JSON.stringify({
      "email": e.target["0"].value,
      "password": e.target["1"].value,
      "remember_me": true
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      credentials: 'same-origin',
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://fieldpulse.keystrokeconsulting.com/api/sessions/create", requestOptions)
      .then(response => response.text())
      .then(result => {        
        let temp= {};
        temp = JSON.parse(result);
        let errorCheck = temp.hasOwnProperty("error");
        console.log("SUCCESS NOTIF",temp, {errorCheck});

        // Create optimisation where these popup values can be passed in via function call
        if(errorCheck){
          console.log(temp.error);
          store.addNotification({
            title: "Login Error!",
            message: temp.error.data.message,
            type: "danger",
            insert: "top",
            container: "bottom-left",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        } else {
          store.addNotification({
            title: "Success",
            message: temp.success.message,
            type: "success",
            insert: "top",
            container: "bottom-left",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          setUserData(temp.success.data);
          setAuthCheck(true);
        }

      })
      .catch(error => console.log('NETWORK ERROR NOTIF', error));
  }
  

  const LoginForm = () =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return(
      <div>
          
            <Row style={{height: "100vh"}}>
              <Col style={{height: "100%"}} xs={4}>
              <Container>
              <Card body>This is some text within a card body.
                <Form onSubmit={handleLoginSumbition}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={userName} onChange={ e => setUserName(e.target.value)}/>
                    <Form.Text className="text-muted">ex: admin@fieldpulse.com</Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={ e => setPassword(e.target.value)}/>
                    <Form.Text className="text-muted">ex: secret123</Form.Text>
                  </Form.Group>
                  <Button block variant="primary" type="submit">Submit</Button>                  
                </Form>
                </Card>
                </Container>
              </Col>
              <Col xs={8}>
                <img src="./assets/aaron-burden-cEukkv42O40-unsplash.jpg" width={"100%"} height="100%" alt=""/>
              </Col>
            </Row>
      </div>
    )};

  return (
    <Router>
      <ReactNotification />
        <Switch>
          <Route exact path="/"> <LoginForm/></Route>
          <Route path="/track-now"><TimeTrackerPage userData={userData}/></Route>
          <Route path="/time-logs"><TimeLogsView /></Route>
          <Route path="/user-management"> <UserManagementView /></Route>          
          <Route path="/account-management"> <AccountManagmentView /></Route>          
        </Switch>
      {/* {!authCheck ? <LoginForm/>  : <TimeTrackerPage />} */}            
    </Router>
  );
}

export default App;

// Tie the inputs here to state values 
// then in on submission use the state values to send off to the remote API








