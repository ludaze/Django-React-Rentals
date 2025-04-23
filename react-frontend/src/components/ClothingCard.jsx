import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ClothingCard({ clothing }) {
  const { id, name, description, imageUrl } = clothing;

  return (
    <Card className="mb-4">
        <Card.Img variant="top" src={imageUrl} alt={name} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={`/clothing/${id}`} className="btn btn-primary">View Details</Link>
        </Card.Body>
        </Card>
  )};
