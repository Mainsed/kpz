import React, { useEffect } from "react"
import axios from 'axios'
import { Grid, Button } from "@material-ui/core";
import ShowPlaces from "./components/showPlace/showPlaces";
import './index.css'

const App = (props) => {
    useEffect(() => {
        axios.get('http://localhost:5000/places')
            .then((res) => props.setPlaces(res.data.data))
    }, [])
    const handleDelete = (e) => {
        const answ = window.confirm("Місце буде видалене");
        if (answ)
            axios.delete(`http://localhost:5000/places?url=${e.currentTarget.name}`)
                .then((res) => props.setPlaces(res.data.data))
    }
    return (
        <div>
            {
                props.places.map((showplace) => {
                    return <Grid container justify={"center"} key={showplace.name}>
                        <Grid item xs={10} className='placeWrap'>
                            <ShowPlaces {...showplace} />
                        </Grid>
                        <Button className='deleteBtn' onClick={handleDelete} name={showplace.url}>X</Button>
                    </Grid>
                })
            }
        </div>
    );
}

export default App;
