import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'


const Rooms = () => {
    return(
        <>
        <Hero hero="roomsHero">
         <Banner 
                title="luxurious rooms"
                subtitle="deluxe rooms starting at $299">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    
        </>
    )
}

export default Rooms