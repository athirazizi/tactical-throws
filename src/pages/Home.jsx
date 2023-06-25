import React from 'react'
import Navbar from '../components/Navbar'
import Featured from '../data/featured.json'
import FeaturedCard from '../components/FeaturedCard'
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer'

const Home = () => {
  console.log(Featured)
  return (
    <div>
      <header>
        <Navbar />
        <HomeHeader />
      </header>

      <main>
        <FeaturedCard/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home