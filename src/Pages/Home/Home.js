import React from 'react'
import Hero from '../../Components/Section1/Hero';
import Brands from '../../Components/Section2/Brands';
import Portfolio from '../../Components/Section3/Portfolio';
import Services from '../../Components/Section4/Services';
import About from '../../Components/Section5/About';
const Home = () => {
    return (
        <div>
            <Hero />
            <Brands />
            <Portfolio />
            <Services />
            <About />
        </div>
    )
}

export default Home;

