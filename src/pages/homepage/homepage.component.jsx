import React from 'react';
import Hero from '../../components/utilities/hero.component';
import CityHeader from '../../components/city-header/city-header.component';
import Featured from '../../components/featured/featured.component';
import MostRecent from '../../components/most-recent/most-recent.component';
import './homepage.styles.scss';

const Homepage = props => {
    return(
        <section className='homepage'>
            <Hero />
            <CityHeader headline="Get Started!" content="Start Looking for beer in your area." display="1"/>
            <Featured />
            <MostRecent />
        </section>
    );
}

export default Homepage;