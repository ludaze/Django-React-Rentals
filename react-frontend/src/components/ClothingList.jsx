import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ClothingCard from "./ClothingCard";

function ClothingList () {
    const clothing = [
        { id: 1, name: "T-shirt", price_per_day: "$5" },
        { id: 2, name: "Jeans", price_per_day: "$10" },
        { id: 3, name: "Jacket", price_per_day: "$15" },
        { id: 4, name: "Shoes", price_per_day: "$8" },
        { id: 5, name: "Hat", price_per_day: "$3" },
    ];

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {clothing.map((item) => (
                <ClothingCard key={item.id} clothing={item} />
            ))}
        </div>
    );
}

export default ClothingList;