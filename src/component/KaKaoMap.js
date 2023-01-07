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
        // const response = axios.get('http://localhost:8080/api/find-city?city=노원구')
        //     .then(res => {
        //         console.log(res.data);
        //         setApart(res.data);
        //     })
        dispatch(getApart({name:'노원구',x:37.65438,y:127.056389, apart:[]}));
        console.log(apart);
    },[]);

    const EventMarkerContainer = (data) => {
        const map = useMap();
        const [isVisible, setIsVisible] = useState(false);

        return (
            <MapMarker position={{lat:data.latitude, lng: data.longitude}}
            >

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
                        return(<MapMarker key={data.id} position={{lat:data.longitude, lng: data.latitude}}/>)
                    })
                }
            </MarkerClusterer>
        </Map>
    )
}

export default KakaoMap;