import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import userIcon from '../assets/images/user-icon.webp';

function ClothingCard({ clothing }) {
  const { id, name, price_per_day } = clothing;

  const imageUrl = userIcon;
    return (
    <Card className="mb-3" style={{ width: '20rem', padding:'1rem', textAlign: 'center', border:'none' }}>
        <Card.Img variant="top" src={imageUrl} alt={name} style={{ objectFit: 'cover' }} />
        <Card.Body style={{}}>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price_per_day}</Card.Text>
            <Link to={`/clothing/${id}`} className="btn btn-primary">View Details</Link>
        </Card.Body>
        </Card>
  )};

  export default ClothingCard;