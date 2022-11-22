import React, { useEffect,useState,CSSProperties} from "react";
import Header  from "./component/Header/Header";
import Map from "./component/Map/Map"
import List from "./component/List/List"
import {CssBaseline,Grid} from '@mui/material';
import {getPlacesData} from "./api/index"
import ClipLoader from "react-spinners/ClipLoader";
import CircleLoader from "react-spinners/CircleLoader";
import BeatLoader from "react-spinners/BeatLoader";
import { Update } from "@mui/icons-material";


const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
    position:"fixed",
    left:"50%",
    top:"50%"
};

const App=()=>{
    const [places,setplaces]=useState([]);
    const [coordinates,setCoordinates]=useState({});
    const [bounds,setBounds]=useState({});
    const [loading,setLoading]=useState(false)
    let [color, setColor] = useState("#000000");
    const [type,setType]=useState("hotels")
    const [rating,setRating]=useState()
    const [filteredPlaces,setFileteredPlaces]=useState([])

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
            setFileteredPlaces([])
        },8000)
    },[])

    useEffect(()=>
    {
        navigator.geolocation.getCurrentPosition
        (({coords:{latitude,longitude}})=>{
                setCoordinates({lat:latitude,lng:longitude})
            })
    },[]);

    useEffect(()=>
    {
        getPlacesData(coordinates,type)
            .then((data)=>
            {
                setplaces(data);
                setFileteredPlaces([])
            })
    },[coordinates,bounds,type,rating])

    useEffect(()=>
    {
        const filtered_places=places.filter((place)=>place.rating>rating)
        setFileteredPlaces(filtered_places)
    },[rating])
   
    return(
        <>
        {
            loading?
            <BeatLoader
                color={"#123abc"}
                size={20}
                loading={loading}
                aria-label="Loading Spinner"
                data-testid="loader"
                align="center"
                cssOverride={override}
            />
            :
            <Grid container spacing={4} style={{width:'100%'}}>
                 <Grid item xs={12} sm={6} md={4} lg={4}>
                    <List 
                    places={filteredPlaces.length? filteredPlaces :places} 
                    setType={setType}
                    loading={loading}
                    setRating={setRating}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={8} lg={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length? filteredPlaces :places}
                    />
                </Grid>

                
            </Grid> 
        } 
        </>
    );
}



export default App;


//  Add Loader to the Website 
//  add search for cities 
//  add filter options on ratings
// add loader for the page 
// add blank if there is no  website in the link    
// Search Provide for the city 


//  work on the street view of the application



// Task divison:
    // 1: onClick function doone right
    // 2  Api Data Testing 
    // 3 Search Function