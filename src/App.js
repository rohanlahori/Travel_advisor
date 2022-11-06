import React, { useEffect,useState } from "react";
import Header  from "./component/Header/Header";
import Map from "./component/Map/Map"
import List from "./component/List/List"
import {CssBaseline,Grid} from '@mui/material';
import {getPlacesData} from "./api/index"

const App=()=>{

    const [places,setplaces]=useState("");

    const [coordinates,setCoordinates]=useState({lat:0 , lng: 0});
    const [bounds,setBounds]=useState(null);

    console.log("Testing the page")

    useEffect(()=>{
        console.log() 
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}}
            )=>{
                setCoordinates({lat:latitude,lng:longitude})
            })
    },[]);

    useEffect(()=>{
        console.log(coordinates,bounds)
        getPlacesData()
            .then((data)=>{
                console.log(data);
                setplaces(data);
            })
    },[coordinates,bounds])



    return(
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List/>
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