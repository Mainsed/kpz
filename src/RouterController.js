import {Route} from "react-router-dom";
import React from "react";
import Box from "@material-ui/core/Box";
import AppContainer from "./containers/AppContainer";
import ShowPlaceComponent from './components/showPlace/showPlaceComponent'
import CreatePlaceContainer from './containers/createPlaceContainer'

const RouteController = props => {
    return (
            <Box>
                <Route exact path={'/'} render={(props) => <AppContainer {...props}/>}/>
                <Route exact path={'/place/create'} render={(props) => <CreatePlaceContainer {...props}/>}/>
                <Route exact path={'/:name'} render={(props) => <ShowPlaceComponent {...props}/>}/>
            </Box>
    )
}

export default RouteController;
