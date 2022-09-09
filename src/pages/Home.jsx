import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>MyPizzaria</h1>
        <p>Pizza to fit any taste.</p>
        <Link to="/menu">
          <button>Order now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home