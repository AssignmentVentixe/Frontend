import React from 'react'
import Nav from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const BaseLayout = () => {
  return (
    <div className='base-wrapper'>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default BaseLayout
