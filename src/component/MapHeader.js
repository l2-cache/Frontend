import React, {useState} from "react";
import {Person, Search} from "@mui/icons-material";
import axios from "axios";
import {useDispatch} from "react-redux";
import {changeRanking} from "./store/modules/RankingData";

const MapHeader = ({handleOpen}) => {

    const dispatch = useDispatch();

    const openModal = () => {
        handleOpen();
        axios.get(process.env.REACT_APP_BACKEND + '/profit')
            .then((res) => {
                console.log(res.data);
                dispatch(changeRanking(res.data));
            });
    }

    return(
        <div className="h-28 bg-gray-200 rounded-t-2xl flex flex-row items-center justify-start p-1">
            <button className="bg-gray-800 text-white px-2 py-1.5 rounded-lg mx-2" onClick={openModal}>예측 수익률 순위</button>
            <button className="bg-gray-800 text-white px-2 py-1.5 rounded-lg">Who We Are?</button>
        </div>
    )
}

export default MapHeader;