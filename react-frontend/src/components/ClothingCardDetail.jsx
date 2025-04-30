import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import userIcon from '../assets/images/user-icon.webp';

function ClothingCardDetail () {
    const {id} = useParams();
    const [clothing, setClothing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const fetchClothingItem = async () => {
        try {
            const response = await fetch(`http://localhost:8000/clothing/${id}/`);
            if (!response.ok) {
                console.log("error")
                throw new Error("Failed to fetch clothing item");
            }
            console.log("response", response)
            const data = await response.json();
            setClothing(data);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching clothing item:", err);
            setError(err.message);
            setLoading(false);
        }
    };
    fetchClothingItem();
}, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }   

    if (error) {   
        return <div>Error: {error}</div>;
    }
    if (!clothing) {
        return <div>No clothing item found.</div>;
    }

    const imageUrl = userIcon;
    return (
        <div className="mb-3 " style={{ padding:'1rem 5rem', textAlign: 'center', border:'none'}}>
          <div style={{ display: 'flex', alignItems: 'center', height:"120vh" }}>
            <div style={{flex:1, height:"100%", boxShadow:"2px 4px 6px rgba(0, 0, 0, 0.1)"}}><img src={imageUrl} alt="" style={{ width:"100%", objectFit:"cover"}} /> </div>
            <div style={{flex:1, height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                <h3 style={{ postition:"sticky", top:"0"}}>{clothing.name}</h3>
                <p>{clothing.price_per_day}</p>
                <p>Size: {clothing.size}</p>
                <p>Color: {clothing.color}</p>
                <Link to={`/clothing/${clothing.id}`} className="btn btn-primary">Rent Now</Link>
            </div>
            </div>
        </div>
    );
}

export default ClothingCardDetail;