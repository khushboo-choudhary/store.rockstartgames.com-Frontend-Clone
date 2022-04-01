import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Grand from '../components/Collections/Grand.Collection'
import {Home} from "../components/HomePage/Home"
import GoldBar from '../components/Games/GoldBar.Games'
import SharkCards from '../components/Games/SharkCards.Games'
import RedDead from '../components/Games/Red.Games'
import Red from '../components/Collections/Red.Collection'
import Rock from '../components/Collections/Rock.Collection'
import AllCard from '../components/Gear/Card/Card'
import Product from '../components/Gear/Product/Product'
import ProductDetails from '../components/Collections/ProductDetails'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/grand-theft-auto-collection' element={<Grand/>}/>
        <Route path='/red-dead-redemption-collection' element={<Red/>}/>
        <Route path='/rockstar-collection' element={<Rock/>}/>
        <Route path='/collection/:id' element={<ProductDetails/>} />
        <Route path='/games/goldbar' element={<GoldBar/>}/>
        <Route path='/games/sharkcards' element={<SharkCards/>}/>
        <Route path='/games/reddead' element={<RedDead/>}/>
        <Route path='/gear' element={<AllCard/>}/>
        <Route path='/gear/:id' element={<Product/>} />
        
    </Routes>
  )
}

export default AllRoutes