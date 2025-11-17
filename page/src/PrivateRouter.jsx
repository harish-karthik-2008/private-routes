import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ role, children }) {
  const loggedRole = localStorage.getItem('role')
  return loggedRole === role ? children : <Navigate to='/' replace />
}