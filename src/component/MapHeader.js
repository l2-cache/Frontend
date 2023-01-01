import React from "react";
import {Person, Search} from "@mui/icons-material";

const MapHeader = () => {
    return(
        <div className="h-24 bg-gray-200 rounded-t-2xl flex flex-row items-center justify-between">
            <div>
                <Search className="text-gray-500 ml-5"/>
                <input id="search-data" type="text" placeholder={"검색어를 입력해주세요"} className="pl-1 border-0 bg-gray-200 text-gray-700"/>
            </div>
            <div>
            </div>
            <div className="flex flex-row items-center justify-end">
                <button className="bg-gray-800 text-white px-2 py-1.5 rounded-lg mx-2">Who We Are?</button>
                <Person fontSize={"large"} className="mr-4 text-gray-800"/>
            </div>
        </div>
    )
}

export default MapHeader;