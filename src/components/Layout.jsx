import React from 'react'
import Header from './shared/Header'
import Footer from './shared/Footer'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {
  const loction= useLocation()
  const isHome=loction.pathname.includes('/')&&location.pathname.endsWith('/')
  return (
  <>
  <Header/>
  {children}
  {isHome&&<Footer/>}
  </>
  )
}

export default Layout