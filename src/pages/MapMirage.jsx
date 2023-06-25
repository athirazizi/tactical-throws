import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import MirageHeader from '../components/MirageHeader'

const MapMirage = ({ data }) => {
  return (
    <div>
      <header>
        <Navbar />
        <MirageHeader />
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

export default MapMirage