import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Button, Form, Card, CardHeader, CardBody } from 'react-bootstrap'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

function Registerpage() {
  return (
    <Container>
      <Row>
        <Col md={4} xs={4}>1</Col>
        <Col md={4} xs={4}>
          <Card>
            <CardHeader as="h3" className="text-center bg-black text-light">
              Sign Up
            </CardHeader>
            <CardBody>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Form.Text className="text-muted">
                  Already have an account? <Link to="/login">Login</Link>
                </Form.Text>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col md={4} xs={4}>1</Col>
      </Row>
    </Container>
  )
}

export default Registerpage
