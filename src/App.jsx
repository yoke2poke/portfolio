import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certify from './components/Certify'
import Contact from './components/Contact'
export const App = () => {
  return (
    <>
   <Navbar/>
   <Home/>
   <About/>
   <Services/>
   <Experience/>
   <Projects/>
   <Certify/>
   <Contact/>
    </>
  )
}

export default App