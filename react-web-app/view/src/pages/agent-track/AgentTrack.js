// import React from 'react'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

// const render = (status) => {
//     return <h1>{status}</h1>;
// };

// const AgentTrack=()=>{
//     const ref = React.useRef(null);
//     const [map, setMap] = React.useState()
//     React.useEffect(() => {
//         if (ref.current && !map) {
//           setMap(new window.google.maps.Map(ref.current, {}));
//         }
//       }, [ref, map]);
//     return(
//         <>
//         <Wrapper apiKey={"AIzaSyC1s-1C2LQnTymDlkwORWdstgc36B7B_eU"} render={render}>
//             {/* <YourComponent/> */}

//         </Wrapper>
//         </>
//     )
// }

// export default AgentTrack


import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import { API } from "../../Config";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const [user_position, setUserPosition] = useState()
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 2
  };
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setUserPosition(position.coords)
    });
    API.get('agentlocation').then((res)=>{
      console.log(res.data)
    })
  }, [])
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAChn6tArJ-qTOKRZ1xhK0P9cumPrOjVfQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        yesIWantToUseGoogleMapApiInternals
      >
        {/* <Marker
                text={"My Marker"}
                lat={10.99835602}
                lng={77.01502627}
              /> */}
        <AnyReactComponent
          lat={10.99835602}
          lng={77.01502627}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}