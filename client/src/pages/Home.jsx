import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/header'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen' style={{ backgroundImage: `url(${assets.bg_img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar/>
        <Header/>
    </div>
  )
}

export default Home