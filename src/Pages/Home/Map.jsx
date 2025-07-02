import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const position = [23.8103, 90.4125];
  return (
     <div className='bg-accent py-10 lg:py-12'>
      <h1 data-aos="fade-up" className='text-2xl lg:text-4xl text-center font-semibold text-primary mb-4'>Hotel Location</h1>
      <div className='w-11/12 mx-auto z-0'>
       
        <MapContainer className='z-0' center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker  position={position}>
        <Popup>
          A hotel location in Dhaka.
        </Popup>
      </Marker>
    </MapContainer>
     </div>
     </div>
  );
};

export default Map;
