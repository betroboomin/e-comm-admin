import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard-container">
            <div className="card dashboard-card">
                <Link className='listing' to='/product-home'>
                    create-product
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Dashboard