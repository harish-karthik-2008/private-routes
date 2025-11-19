import React, { useEffect, useState } from 'react'

export default function AdminPage() {
  const [text, setText] = useState('')
  useEffect(() => {
    const id = setTimeout(() => setText('THIS IS ADMIN'), 2000)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="center-page">
      <h1>{text}</h1>
    </div>
  )
}