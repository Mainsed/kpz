let initialState = [];

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-PLACES':{
            return action.places
        }
        case 'CREATE-PLACE':{
            console.log(action.data)
            return [...state, action.data];
        }
        default:
            return state;
    }
}

export default placesReducer;

export const setPlaces = places => {
    return {type: 'SET-PLACES', places}
}
export const createPlace = data => {
    return {type: 'CREATE-PLACE', data}
}