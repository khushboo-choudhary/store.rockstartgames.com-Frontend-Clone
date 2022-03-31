import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Grand from '../components/Grand.Collection'
import {Home} from "../components/HomePage/Home"

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections/grand' element={<Grand/>}/>
    </Routes>
  )
}

export default AllRoutes