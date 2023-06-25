import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import InfernoHeader from '../components/InfernoHeader'

const MapInferno = ({ data }) => {
  return (
    <div>
      <header>
        <Navbar />
        <InfernoHeader />
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

export default MapInferno