import React from "react";
import GoogleMapReact from 'google-map-react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Typography, useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper"

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function SimpleMap({setCoordinates,setBounds,coordinates,bounds,places})
{
  return ( 
  <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAO933zejDBYyzHmP3nA84qjaNSoyV7Y98"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50,50,50,50]}
        
        onChange={(e)=>{
          console.log(e)
          setCoordinates({lat:e.center.lat, lng: e.center.lng})
          setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw})
        }}
        >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />


      </GoogleMapReact>
    </div>
  );
}




// bootstrapURLKeys={{key:'AIzaSyAO933zejDBYyzHmP3nA84qjaNSoyV7Y98'}}



// bootstrapURLKeys={{ key: "AIzaSyDfANKR-y4jL9EupUNpl8Ip3PC6XDyL1BI" }}
