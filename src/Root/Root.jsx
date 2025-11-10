import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const Root = () => {
  return (
    <div className='max-w-11/12 mx-auto'>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Root