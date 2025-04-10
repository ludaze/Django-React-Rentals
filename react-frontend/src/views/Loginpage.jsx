import '../assets/css/RegisterPage.css'
import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Form, Card, CardHeader, CardBody } from 'react-bootstrap'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios';

function Loginpage() {
  const navigate = useNavigate()

  const[formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const [message, setMessage] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const response = axios.post('http://localhost:8000/api/token/', formData)
      console.log(response.data);
      setMessage('Login successful.');
      setTimeout(() => navigate('/dashboard'),2000);
    }
    catch(error) {
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        const errorMessage = Object.values(errorData).flat().join(' ');
        setMessage(`Login failed: ${errorMessage}`);
      } else {
        setMessage('Login failed: An unknown error occurred.');
      }
    }
  }

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
                  <Form.Control type="email" placeholder="Enter email" name="email"  />
                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password"  />
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
