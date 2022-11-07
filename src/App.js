import React, { useEffect,useState } from "react";
import Header  from "./component/Header/Header";
import Map from "./component/Map/Map"
import List from "./component/List/List"
import {CssBaseline,Grid} from '@mui/material';
import {getPlacesData} from "./api/index"

const App=()=>{
    const [places,setplaces]=useState([]);
    const [coordinates,setCoordinates]=useState({});
    const [bounds,setBounds]=useState(null);

    useEffect(()=>
    {
        navigator.geolocation.getCurrentPosition
        (({coords:{latitude,longitude}})=>{
                setCoordinates({lat:latitude,lng:longitude})
            })
    },[]);

    useEffect(()=>
    {
        console.log(coordinates)
        console.log(bounds)
        getPlacesData(coordinates)
            .then((data)=>{
                setplaces(data);
            })
    },[coordinates,bounds])



    return(
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={4} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places}/>
            </Grid>

            <Grid item xs={12} md={8}>
                <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                />
            </Grid>
            </Grid>  
        </>
    );
}

export default App;