import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const position = [23.8103, 90.4125];
  return (
     <div className='my-6'>
        <h1 className='text-4xl text-center text-accent mb-4 font-bold'>Hotel <span className='text-primary'>Location</span></h1>
        <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A hotel location in Dhaka.
        </Popup>
      </Marker>
    </MapContainer>
     </div>
  );
};

export default Map;
