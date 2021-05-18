import {combineReducers, createStore} from "redux";
import placesReducer from "./placesReducer";

let reducers = combineReducers({
    places: placesReducer,
})

const store = createStore(reducers);

window.store = store;

export default store;