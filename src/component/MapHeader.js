import React, {useState} from "react";
import {Person, Search} from "@mui/icons-material";

const MapHeader = (props) => {

    const handleKeyDownEnter = (e) => {
        props.handleOpen();
    }

    return(
        <div className="h-28 bg-gray-200 rounded-t-2xl flex flex-row items-center justify-start p-1">
            <button className="bg-gray-800 text-white px-2 py-1.5 rounded-lg mx-2" onClick={handleKeyDownEnter}>수익률 순위 보기</button>
            <button className="bg-gray-800 text-white px-2 py-1.5 rounded-lg">Who We Are?</button>
        </div>
    )
}

export default MapHeader;