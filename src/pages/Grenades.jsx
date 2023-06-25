import React from 'react'
import Navbar from '../components/Navbar'
import GrenadesHeader from '../components/GrenadesHeader'
import SmokeJumbotron from '../components/SmokeJumbotron'
import FlashJumbotron from '../components/FlashJumbotron'
import MolotovJumbotron from '../components/MolotovJumbotron'
import Footer from '../components/Footer'

const Grenades = () => {
  return (
    <div>
      <header>
        <Navbar />
        <GrenadesHeader />
      </header>

      <main class="container">
        <SmokeJumbotron />
        <FlashJumbotron />
        <MolotovJumbotron />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Grenades