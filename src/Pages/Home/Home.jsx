import Banner from './Banner/Banner';
import Map from './Map';
import FeaturedRooms from './FeaturedRooms/FeaturedRooms';
import OurHotel from './OurHotel/OurHotel';
// import Service from './Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Map></Map> */}
            <FeaturedRooms></FeaturedRooms>
            <OurHotel></OurHotel>
            {/* <Service></Service> */}
        </div>
    );
};

export default Home;