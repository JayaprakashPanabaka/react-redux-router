import React from 'react'
import './home.css'
import UserInfo from './UserInfo'
import BlogList from './BlogList'

const Home = () => {
  return (
    // <div className='body-container'>
    //   <img className='image' src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png " alt="home" />
    //   <h2 className='title'>Home</h2>
    // </div>
    <div className='bg-container'>
      <UserInfo />
      <BlogList />
    </div>
  )
}

export default Home
