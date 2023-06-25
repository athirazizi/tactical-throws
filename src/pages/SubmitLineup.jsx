import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SubmitForm from '../components/SubmitForm'
import SubmitHeader from '../components/SubmitHeader'

const SubmitLineup = () => {
    return (
        <div>
            <header>
                <Navbar/>
                <SubmitHeader/>
            </header>

            <main class="d-flex justify-content-center">
                <SubmitForm/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default SubmitLineup
