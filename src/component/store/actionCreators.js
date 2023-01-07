import {bindActionCreators} from "redux";
import * as cityDataAction from "./modules/CityData";

import {store} from "./store";

const {dispatch} = store;

export const CityDataAction = bindActionCreators(cityDataAction, dispatch);
