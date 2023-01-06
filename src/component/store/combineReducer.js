import {combineReducers} from "redux";
import cityData from "./modules/CityData";
import mapData from "./modules/MapData";

export default combineReducers({
    cityData,
    mapData,
})