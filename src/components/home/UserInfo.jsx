import React from 'react'
import './home.css'

const UserInfo = () => {
  return (
    <div className='user-container'>
      <img className='user-icon' src="https://assets.ccbp.in/frontend/react-js/profile-img.png " alt="user-icon" />
      <h3 className='user-title'>Wade Warren</h3>
      <p className='user-desc'>Software Developer at UK</p>
    </div>
  )
}

export default UserInfo
