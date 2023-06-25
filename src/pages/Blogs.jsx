import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BlogsHeader from '../components/BlogsHeader'

const Blogs = () => {
  return (
    <div>
      <header>
        <Navbar/>
        <BlogsHeader/>
      </header>
      <main></main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Blogs