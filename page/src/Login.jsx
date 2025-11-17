import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import Modal from './Modal'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e?.preventDefault?.()
    if (username === 'user' && password === '123') {
      localStorage.setItem('role', 'user')
      navigate('/user')
    } else if (username === 'admin' && password === '123') {
      localStorage.setItem('role', 'admin')
      navigate('/admin')
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    }
  }

  return (
    <div className="container">
      <form className="box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" className='input-box' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" className='input-box' value={password} onChange={(e) => setPassword(e.target.value)}  />
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
      {showError && <Modal message={"Invalid Username or Password"} />}
    </div>
  )
}