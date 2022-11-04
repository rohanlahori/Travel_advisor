import React from "react";
import Header  from "./component/Header/Header";
import Map from "./component/Map/Map"
import List from "./component/List/List"
import {CssBaseline,Grid} from '@mui/material';


const App=()=>{
    return(
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width:'100%'}}>
            <Grid item xs={12} md={4}>
                <List/>
            </Grid>

            <Grid item xs={12} md={8}>
                <Map/>
            </Grid>
            </Grid>  
        </>
    );
}

export default App;