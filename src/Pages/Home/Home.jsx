import Banner from './Banner/Banner';
import Map from './Map';
import FeaturedRooms from './FeaturedRooms/FeaturedRooms';
import OurHotel from './OurHotel/OurHotel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Map></Map>
            <FeaturedRooms></FeaturedRooms>
            <OurHotel></OurHotel>
        </div>
    );
};

export default Home;