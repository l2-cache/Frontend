import React, {useState} from "react";
import KakaoMap from "./map/KaKaoMap";
import MapHeader from "./MapHeader";
import InformationBox from "./InformationBox";
import {Box, Modal} from "@mui/material";
import SearchInfo from "./search-list/SearchInfo";

const Container = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [searchData, setSearch] = useState("");

    return(
        <div className="bg-white flex flex-col rounded-2xl drop-shadow-2xl shadow-2xl" style={{height:"48rem", width:"80rem"}}>
            <MapHeader handleOpen={handleOpen}>
            </MapHeader>
            <div className="flex flex-row rounded-b-2xl justify-evenly">
                {
                    isSearchVisible ? <></> : <InformationBox />
                }
                <KakaoMap/>
            </div>
            {open ? <SearchInfo open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}/> : <></>}
        </div>
    )
}

export default Container;