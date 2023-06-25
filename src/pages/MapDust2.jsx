import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Dust2Header from '../components/Dust2Header'

const MapDust2 = ({ data }) => {
  return (
    <div>
      <header>
        <Navbar />
        <Dust2Header />
      </header>

      <main>
        <Card data={data} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default MapDust2