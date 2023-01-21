import React from 'react'
import { Route, Routes } from 'react-router'
import Dashboard from '../Dashboard/Dashboard'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar'
import AddTodo from '../Todo/AddTodo'
import ViewTodo from '../Todo/ViewTodo'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-todo' element={<AddTodo />} />
          <Route path='/view-todo' element={<ViewTodo />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default AllRoutes