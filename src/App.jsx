import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './container/header/Header'
import About from './container/about/About'
import Skills from './container/skills/Skills'
import Works from './container/works/Works'
import Footer from './container/footer/Footer'
import Navbar from './components/navbar/Navbar'
function App() {
 const darkMode = false

  return (
    < div className={`theme-${darkMode? "dark": "light"}`}>
    <Navbar />
    <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
