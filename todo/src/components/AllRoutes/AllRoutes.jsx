import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../Dashboard/Dashboard'
import Home from '../Home/Home'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </div>
  )
}

export default AllRoutes