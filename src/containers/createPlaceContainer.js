import CreatePlace from '../components/createPlace/createPlace'
import {connect} from 'react-redux';
import {createPlace} from '../Redux/placesReducer'

const mapStateToProps = (state) => {
    return {
    }
}

const CreatePlaceContainer = connect(mapStateToProps, {createPlace})(CreatePlace);

export default CreatePlaceContainer