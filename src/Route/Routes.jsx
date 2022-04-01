import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Grand from '../components/Collections/Grand.Collection'
import {Home} from "../components/HomePage/Home"
import GoldBar from '../components/Games/GoldBar.Games'
import SharkCards from '../components/Games/SharkCards.Games'
import RedDead from '../components/Games/Red.Games'
import Red from '../components/Collections/Red.Collection'
import Rock from '../components/Collections/Rock.Collection'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections/grand' element={<Grand/>}/>
        <Route path='/collections/red' element={<Red/>}/>
        <Route path='/collections/rock' element={<Rock/>}/>
        <Route path='/games/goldbar' element={<GoldBar/>}/>
        <Route path='/games/sharkcards' element={<SharkCards/>}/>
        <Route path='/games/reddead' element={<RedDead/>}/>
        
    </Routes>
  )
}

export default AllRoutes