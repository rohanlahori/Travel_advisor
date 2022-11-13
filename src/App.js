import React, { useEffect,useState } from "react";
import Header  from "./component/Header/Header";
import Map from "./component/Map/Map"
import List from "./component/List/List"
import {CssBaseline,Grid} from '@mui/material';
import {getPlacesData} from "./api/index"
import ClipLoader from "react-spinners/ClipLoader";


const App=()=>{
    const [places,setplaces]=useState([]);
    const [coordinates,setCoordinates]=useState({});
    const [bounds,setBounds]=useState({});
    const [loading,setLoading]=useState(false)
    let [color, setColor] = useState("#ffffff");


    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },8000)
    },[])
    // console.log(document.readyState());
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
        {
            loading?
            <ClipLoader
                color={"#123abc"}
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
            :
            <Grid container spacing={4} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List places={places}/>
            </Grid>

            <Grid item xs={12} md={8}>
                <Map
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                places={places}
                />
            </Grid>
            </Grid> 
        } 
        </>
    );
}

export default App;


//  Add Loader to the Website 
