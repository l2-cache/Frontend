import React, {useEffect, useState} from "react";
import {Map, MapMarker, MarkerClusterer, useMap} from "react-kakao-maps-sdk";
import axios from "axios";
import {useSelector} from "react-redux";
const KakaoMap = ({city}) => {

    const [apart, setApart] = useState([]);

    const mapData = useSelector(store=>store.mapData);

    useEffect(() => {
        axios.get('http://localhost:8080/api/find-all')
            .then((res)=>{
                setApart(res.data.slice(1,2000));
            })
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
        <Map className="relative top-0 m-2 rounded-2xl" style={{height:"44rem", width:"40rem"}}  center={mapData}
             level={3}
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