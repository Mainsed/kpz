import React, {useEffect} from "react"
import axios from 'axios'
import {Grid} from "@material-ui/core";
import ShowPlaces from "./components/showPlace/showPlaces";
import './index.css'

const App = (props) => {
    useEffect(()=>{
        axios.get('http://localhost:5000/places')
        .then((res)=>props.setPlaces(res.data.data))
    }, [])
    return (
        <div>
            {
                props.places.map((showplace) => {
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
