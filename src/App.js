import React from "react";
import showPlaces from "./db/listOfShowPlace";
import {Grid} from "@material-ui/core";
import ShowPlaces from "./components/showPlace/showPlaces";
import './index.css'

function App() {
    return (
        <div>
            {
                showPlaces.map((showplace) => {
                    return <Grid container justify={"center"} key={showplace.name}>
                        <Grid item xs={10} className='placeWrap'>
                            <ShowPlaces {...showplace}/>
                        </Grid>
                    </Grid>
                })
            }
        </div>
    );
}

export default App;
