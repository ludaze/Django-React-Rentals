import '../assets/css/RegisterPage.css'
import React, {useState, useEffect, useContext} from 'react'
import {Container, Row, Col, Button, Form, Card, CardHeader, CardBody } from 'react-bootstrap'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios';

function Loginpage() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password);
  };
  

  return (
    <Container>
      <Row>
        <Col md={4} xs={2}></Col>
        <Col md={4} xs={8}>
          <Card>
            <CardHeader as="h3" className="text-center bg-black text-light">
              Login
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" id="email" />
                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" id="password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Form.Text className="text-muted">
                  Don't have an account? <Link to="/register">Sign Up</Link>
                </Form.Text>
              </Form>
             
            </CardBody>
          </Card>
        </Col>
        <Col md={4} xs={2}></Col>
      </Row>
    </Container>
  )
}

export default Loginpage
