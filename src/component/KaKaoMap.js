import React, {useEffect, useState} from "react";
import {Map, MapMarker, MarkerClusterer, useMap} from "react-kakao-maps-sdk";
import axios from "axios";
import {useSelector} from "react-redux";
const KakaoMap = () => {

    const [apart, setApart] = useState([]);

    const city = useSelector(state=>state.city);

    useEffect(() => {
        async function fetchApartData() {
            await axios.get('http://localhost:8080/api/find-city?city='+ city.name)
                .then((res) => {
                    console.log(res.data);
                    setApart(res.data);
                })
        }
        fetchApartData();
    },[city]);

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
                        return(<MapMarker key={data.id} position={{lat:data.latitude, lng: data.longitude}}/>)
                    })
                }
            </MarkerClusterer>
        </Map>
    )
}

export default KakaoMap;