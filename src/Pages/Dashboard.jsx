import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <Link to="/admin/dashboard">
        <div>Dashboard</div>
    </Link>
  )
}

export default Dashboard