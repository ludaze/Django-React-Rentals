import React from 'react'
import ClothingCard from '../components/ClothingCard'
import ClothingList from '../components/ClothingList'

function Dashboard() {
  return (
    <div>
      Dashboards
<ClothingCard clothing={{id:1, name:"Clothing 1", price_per_day:100}}/>
    <ClothingList/>
    </div>
  )
}

export default Dashboard
