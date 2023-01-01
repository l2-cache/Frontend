import React from "react";
import KakaoMap from "./KaKaoMap";
import MapHeader from "./MapHeader";

const Container = () => {
    return(
        <div className="bg-white flex flex-col rounded-2xl drop-shadow-2xl shadow-2xl" style={{height:"40rem", width:"80rem"}}>
            <MapHeader>
            </MapHeader>
            <div className="flex flex-row rounded-b-2xl justify-end">
                <div>
                    하이
                </div>
                <KakaoMap/>
            </div>
        </div>
    )
}

export default Container;