import {Route} from "react-router-dom";
import React from "react";
import Box from "@material-ui/core/Box";
import App from "./App";
import ShowPlaceComponent from './components/showPlace/showPlaceComponent'

const RouteController = props => {
    return (
            <Box>
                <Route exact path={'/'} render={(props) => <App {...props}/>}/>
                <Route path={'/:name'} render={(props) => <ShowPlaceComponent {...props}/>}/>
            </Box>
    )
}

export default RouteController;
