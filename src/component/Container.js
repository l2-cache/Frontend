import React, {useState} from "react";
import KakaoMap from "./map/KaKaoMap";
import MapHeader from "./MapHeader";
import InformationBox from "./InformationBox";

const Container = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);

    return(
        <div className="bg-white flex flex-col rounded-2xl drop-shadow-2xl shadow-2xl" style={{height:"48rem", width:"80rem"}}>
            <MapHeader>
            </MapHeader>
            <div className="flex flex-row rounded-b-2xl justify-evenly">
                {
                    isSearchVisible ? <></> : <InformationBox />
                }
                <KakaoMap/>
            </div>
        </div>
    )
}

export default Container;