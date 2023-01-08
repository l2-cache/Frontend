import React, {useEffect, useState} from "react";
import {Map, MapMarker, MarkerClusterer, useMap} from "react-kakao-maps-sdk";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {changeValue} from "./store/modules/CityData";
import {getApart} from "./store/modules/ApartData";
const KakaoMap = () => {

    const city = useSelector(state=>state.city);
    const apart = useSelector(state=>state.apart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApart({name:'노원구',x:37.65438,y:127.056389, apart:[]}));
    },[]);

    // const handlerMapInfo = async (data) => {
    //     await axios.get(process.env.REACT_APP_BACKEND)
    // }

    const ContentBox = ({data}) => {
        return(
            <div className="bg-white p-1 border-gray-500 rounded-md">
                <p>{data.apartName}</p>
                <p className="text-sm">서울특별시 {data.city} {data.dong} {data.streetAddress}</p>
            </div>
        )
    }

    const EventMarkerContainer = ({data}) => {
        const map = useMap();
        const [isVisible, setIsVisible] = useState(false);

        return (
            <MapMarker position={{lat:data.latitude, lng: data.longitude}}
                       onMouseOver={() => setIsVisible(true)}
                       onMouseOut={() => setIsVisible(false)}
            >
                {isVisible && <ContentBox data={data}/>}
            </MapMarker>
        )

    }


    return (
        <Map className="relative top-0 m-2 rounded-2xl" style={{height:"44rem", width:"40rem"}}  center={{lat:city.x, lng:city.y}}
             level={6}
        >
            <MarkerClusterer
                averageCenter={true}
                minLevel={5}
            >
                {
                    Array.isArray(apart) && apart.length === 0 ? <></> : apart.map((data) => {
                        return(<EventMarkerContainer data={data} key={data.id}/>)
                    })
                }
            </MarkerClusterer>
        </Map>
    )
}

export default KakaoMap;