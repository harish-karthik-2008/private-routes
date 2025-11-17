import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Login'
import UserPage from './User'
import AdminPage from './Admin'
import PrivateRoute from './PrivateRouter'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<PrivateRoute role="user"><UserPage /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute role="admin"><AdminPage /></PrivateRoute>} />
      </Routes>
    </Router>
  )
}