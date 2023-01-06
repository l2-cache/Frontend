const MODIFY_CITY_DATA = 'cityData/MODIFY_CITY_DATA';
const INIT_CITY_DATA = 'cityData/MODIFY_INIT_DATA';

export const modifyCityData = (data) => ({data:data, type:MODIFY_CITY_DATA});
export const initCityData = () => ({type:INIT_CITY_DATA});

const initialState = {
    name:'노원구',
    x:37.65438,
    y:127.056389
}

export default function cityData(state = initialState, action) {
    switch (action.type) {
        case MODIFY_CITY_DATA:
            return {...action.data};
        case INIT_CITY_DATA:
            return initialState;
        default:
            return state;
    }
}
