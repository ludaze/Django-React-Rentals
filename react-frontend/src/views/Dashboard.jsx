import React from 'react'
import ClothingCard from '../components/ClothingCard'
import ClothingList from '../components/ClothingList'
import ClothingCardDetail from '../components/ClothingCardDetail'
function Dashboard() {
  return (
    <div>
      Dashboards
<ClothingCard clothing={{id:1, name:"Clothing 1", price_per_day:100}}/>
   <div style={{display: "flex",  justifyContent:"center", alignItems:"center" }}><ClothingList/></div> 
    {/* <ClothingCardDetail/> */}
    </div>
  )
}

export default Dashboard
