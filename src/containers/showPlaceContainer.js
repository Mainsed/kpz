import ShowPlaceComponent from '../components/showPlace/showPlaceComponent'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        places: state.places
    }
}

const showPlaceContainer = connect(mapStateToProps, {})(ShowPlaceComponent);

export default showPlaceContainer