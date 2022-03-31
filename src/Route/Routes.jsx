import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Grand from '../components/Grand.Collection'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Grand/>}/>
    </Routes>
  )
}

export default AllRoutes