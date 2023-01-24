import React, {useState} from "react";
import {Person, Search} from "@mui/icons-material";

const MapHeader = (props) => {

    const handleKeyDownEnter = (e) => {
        if (e.key === 'Enter') {
            // props.handleOpen();
        }
    }

    return(
        <div className="h-28 bg-gray-200 rounded-t-2xl flex flex-row items-center justify-between p-1">
            <div>
                <Search className="text-gray-500 ml-5"/>
                <input onKeyDown={handleKeyDownEnter} id="search-data" type="text" placeholder={"검색어를 입력해주세요"} className="pl-1 border-0 bg-gray-200 text-gray-700"/>
            </div>
            <div>
            </div>
            <div className="flex flex-row items-center justify-end">
                <button className="bg-gray-800 text-white px-2 py-1.5 rounded-lg mx-2">Who We Are?</button>
            </div>
        </div>
    )
}

export default MapHeader;