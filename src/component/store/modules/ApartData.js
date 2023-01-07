const MODIFY_APART_DATA = 'mapData/MODIFY_MAP_DATA';
const INIT_APART_DATA = 'mapData/MODIFY_INIT_DATA';

export const modifyMapData = (data) => ({data:data, type:MODIFY_APART_DATA});
export const initCityData = () => ({type:INIT_APART_DATA});

const initialState = {
    lat:37.65438, lng:127.056389
}

export default function mapData(state = initialState, action) {
    switch (action.type) {
        case MODIFY_APART_DATA:
            return {...action.data};
        case INIT_APART_DATA:
            return initialState;
        default:
            return state;
    }
}
