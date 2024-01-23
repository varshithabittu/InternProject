import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [boundary, setBoundary] = useState([]);

  const handleMapClick = (event) => {
    const { lat, lng } = event;
    setLocation({ lat, lng });
  };

  const handleDoubleClick = (event) => {
    const { lat, lng } = event;
    setBoundary([...boundary, { lat, lng }]);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAI3JnjLpBbNslqJaEECsSjQkas8VKrpx8' }}
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={8}
        onClick={handleMapClick}
        onDblClick={handleDoubleClick}
      >
        <Marker lat={location.lat} lng={location.lng} />
        <Polygon path={boundary} />
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ lat, lng }) => (
  <div
    style={{
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'red',
    }}
  />
);

const Polygon = ({ path }) => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
    }}
  >
    <svg height="100%" width="100%">
      <polygon
        points={path.map((p) => `${p.lat},${p.lng}`).join(' ')}
        style={{ fill: 'red', opacity: 0.5 }}
      />
    </svg>
  </div>
);

export default Map;
