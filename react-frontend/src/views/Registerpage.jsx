import '../assets/css/RegisterPage.css'
import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Form, Card, CardHeader, CardBody } from 'react-bootstrap'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios';

function Registerpage() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    phone_number: '',
    password: '',
    confirm_password: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.password !== formData.confirm_password) {
      setMessage('Passwords do not match.')
      return;
    }
    try {
       const response = axios.post('http://localhost:8000/api/register/', formData)
        console.log(response.data);
        setMessage('Account created successfully.');
        setTimeout(() => navigate('/login'),2000);
      }
        catch(error) {
          if (error.response && error.response.data) {
            const errorData = error.response.data;
            const errorMessage = Object.values(errorData).flat().join(' ');
            setMessage(`Registration failed: ${errorMessage}`);
          } else {
            setMessage('Registration failed: An unknown error occurred.');
          }
        }
    };
  return (
    <Container>
      <Row>
        <Col md={4} xs={2}>1</Col>
        <Col md={4} xs={8}>
          <Card>
            <CardHeader as="h3" className="text-center bg-black text-light">
              Sign Up
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                  <Form.Label className='mt-3'> <span><i className='fa fa-user'></i></span> Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" name="username" value={formData.username} onChange={handleChange} />
                  <Form.Label className='mt-3'>PhoneNumber</Form.Label>
                  <Form.Control type="text" placeholder="09********" name="phone_number" value={formData.phone_number} onChange={handleChange} />
                  
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" name="confirm_password" value={FormData.confirm_password} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Form.Text className="text-muted">
                  Already have an account? <Link to="/login">Login</Link>
                </Form.Text>
              </Form>
              {message && <div className="alert alert-danger mt-3">{message}</div>}
            </CardBody>
          </Card>
        </Col>
        <Col md={4} xs={2}>1</Col>
      </Row>
    </Container>
  )
}

export default Registerpage
