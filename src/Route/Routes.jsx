import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Grand from '../components/Grand.Collection'
import {Home} from "../components/HomePage/Home"
import GoldBar from '../components/Games/GoldBar.Games'
import SharkCards from '../components/Games/SharkCards.Games'
import RedDead from '../components/Games/Red.Games'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections/grand' element={<Grand/>}/>
        <Route path='/games/goldbar' element={<GoldBar/>}/>
        <Route path='/games/sharkcards' element={<SharkCards/>}/>
        <Route path='/games/reddead' element={<RedDead/>}/>
        
    </Routes>
  )
}

export default AllRoutes