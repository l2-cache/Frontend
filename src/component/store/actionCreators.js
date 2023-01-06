import {bindActionCreators} from "redux";
import * as cityDataAction from "./modules/CityData";
import * as mapDataAction from "./modules/MapData";

import {store} from "./store";

const {dispatch} = store;

export const CityDataAction = bindActionCreators(cityDataAction, dispatch);

export const MapDataAction = bindActionCreators(mapDataAction, dispatch);