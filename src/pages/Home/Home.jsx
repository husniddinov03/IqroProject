import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Services from '../../components/Services/Services'
import Job from '../../components/Job/Job'
import Digital from '../../components/Digital/Digital'
import Term from '../../components/Term/Term'

const Home = () => {
    return (
        <div style={{minWidth: "1440px"}}>
            <Header />
            <main>
                <Services />
                <Job/>
                <Digital/>
                <Term/>
            </main>
            <Footer />
        </div>
    )
}

export default Home