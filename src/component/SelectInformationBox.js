import React, {useEffect, useState} from "react";
import {cityDatas, hashCityData} from "./store/modules/CityDatas";
import {useDispatch, useSelector} from "react-redux";
import {changeValue} from "./store/modules/CityData";
import {getApart} from "./store/modules/ApartData";

const SelectInformationBox = () => {

    const dispatch = useDispatch();
    const city = useSelector(state => state.city);

    const handleChangeCity = (e) => {
        // async function fetchApartData() {
        //     let res = await axios.get('http://localhost:8080/api/find-city?city='+ JSON.parse(e.target.value).name);
        //     console.log(res.data);
        // }
        // fetchApartData();
        dispatch(changeValue(JSON.parse(e.target.value)));
        dispatch(getApart(JSON.parse(e.target.value)));
    }

    return(
        <div className="flex flex-row items-center justify-start m-2">
            <select value={JSON.stringify(city)} onChange={handleChangeCity} name="position" className="pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                {
                    cityDatas.map((data,index) => {
                        if (data.name === '노원구') {
                            return (
                                <option key={index} value={JSON.stringify(data)}>{data.name}</option>
                            )
                        } else {
                            return <option value={JSON.stringify(data)} key={index}>{data.name}</option>
                        }
                    })
                }
            </select>
            <select name="position" className="ml-4 pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                <option>광운로</option>
            </select>
            <select name="position" className="ml-4 pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                <option>매매</option>
                <option>전월세</option>
            </select>
            <select name="position" className="ml-4 pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                <option>전체</option>
                <option>77.75㎡</option>
            </select>
        </div>
    )
}

export default SelectInformationBox;