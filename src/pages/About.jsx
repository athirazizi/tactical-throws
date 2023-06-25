import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutJumbotron from '../components/AboutJumbotron'
import AboutHeader from '../components/AboutHeader'

const About = () => {
  return (
    <div>
      <header>
        <Navbar />
        <AboutHeader />
      </header>

      <main class="container">
        <AboutJumbotron />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About