import React from 'react';
import Banner from './Banner/Banner';
import Map from './Map';
import FeaturedRooms from './FeaturedRooms/FeaturedRooms';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Map></Map>
            <FeaturedRooms></FeaturedRooms>
        </div>
    );
};

export default Home;