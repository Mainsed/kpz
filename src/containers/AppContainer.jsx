import App from "../App";
import {connect} from 'react-redux';
import {setPlaces} from '../Redux/placesReducer'

const mapStateToProps = (state) => {
    return {
        places: state.places
    }
}

const AppContainer = connect(mapStateToProps, {setPlaces})(App);

export default AppContainer