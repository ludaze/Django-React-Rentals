import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ClothingCard from "./ClothingCard";

function ClothingList () {
    const [data,setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchClothingItems = async () => {
            try {
                const response = await fetch(`http://localhost:8000/clothing/`);
                if (!response.ok) {
                    throw new Error("Failed to fetch clothing items");
                }
                const clothingData = await response.json();
                setdata(clothingData);
                setLoading(false);
            }
            catch (err) {
                console.error("Error fetching clothing items:", err);
                setError(err.message);
                setLoading(false);
            }
        };
        fetchClothingItems();
    }, []);

    if(loading){
        return <div>Loading...</div>;
    }

    return (
        <div className="d-flex flex-wrap " style={{ paddingInline: '3rem', marginTop: '2rem' }}>
            {data.map((item) => (
                <ClothingCard key={item.id} clothing={item} />
            ))}
        </div>
    );
}

export default ClothingList;