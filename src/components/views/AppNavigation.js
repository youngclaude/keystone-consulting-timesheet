import TimeTrackerPage from './timetracker';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const AppNavigation = () => (
    <Navbar bg="primary" variant="dark">
        <Link to="/"> <Navbar.Brand href="#">Keystone Apps</Navbar.Brand> </Link>           
        <Nav className="ml-auto">
            <Link to="/track-now"> <Nav.Link href="#track-now">Start Tracking</Nav.Link> </Link>  
            <Link to="/time-logs"> <Nav.Link href="#time-logs">Time Logs</Nav.Link> </Link> 
            <Link to="/account-management"> <Nav.Link href="#account-management">Account Managment</Nav.Link></Link>  
            <Link to="/user-management"> <Nav.Link href="#user-management">User Managment</Nav.Link></Link>  
        </Nav>
        <Form inline><Button variant="outline-light">Logout</Button></Form>
    </Navbar>
)

export default AppNavigation;