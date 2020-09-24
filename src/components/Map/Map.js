import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {

    return (
        <div style={{ height: '100vh', width: '100%', marginTop: '60px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCSS8NR0EQ-NKKTdGmQ_VsG3uAC2p3Z9IA" }}
                defaultZoom={13}
                defaultCenter={{
                    lat: 21.4285,
                    lng: 91.9702
                }}
                
            >
            </GoogleMapReact>
      </div>
    );
};

export default Map;