import Banner from './Banner/Banner';
import Map from './Map';
import FeaturedRooms from './FeaturedRooms/FeaturedRooms';
import OurHotel from './OurHotel/OurHotel';
import Service from './Service/Service';
import ReviewTestimonial from './ReviewTestimonial/ReviewTestimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Map></Map> */}
            <OurHotel></OurHotel>
            <FeaturedRooms></FeaturedRooms>
            <Service></Service>
            <ReviewTestimonial></ReviewTestimonial>
        </div>
    );
};

export default Home;