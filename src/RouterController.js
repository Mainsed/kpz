import {Route} from "react-router-dom";
import React from "react";
import Box from "@material-ui/core/Box";
import AppContainer from "./containers/AppContainer";
import CreatePlaceContainer from './containers/createPlaceContainer'
import ShowPlaceContainer from "./containers/showPlaceContainer";

const RouteController = props => {
    return (
            <Box>
                <Route exact path={'/'} render={(props) => <AppContainer {...props}/>}/>
                <Route exact path={'/place/create'} render={(props) => <CreatePlaceContainer {...props}/>}/>
                <Route exact path={'/:name'} render={(props) => <ShowPlaceContainer {...props}/>}/>
            </Box>
    )
}

export default RouteController;
