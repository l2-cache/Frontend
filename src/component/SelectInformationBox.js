import React, {useEffect, useState} from "react";
import {cityDatas, hashCityData} from "./store/modules/CityDatas";
import {useSelector} from "react-redux";
import {CityDataAction, MapDataAction} from "./store/actionCreators";

const SelectInformationBox = () => {

    const city = useSelector(store=>store.cityData);

    const handleChangeCity = (e) => {
        CityDataAction.modifyCityData(JSON.parse(e.target.value));
        MapDataAction.modifyMapData({lat:JSON.parse(e.target.value).x, lng:JSON.parse(e.target.value).y});
    }

    useEffect(() => {

    },[city])

    return(
        <div className="flex flex-row items-center justify-start m-2">
            <select value={JSON.stringify(city)} defaultValue={JSON.stringify(city)} onChange={handleChangeCity} name="position" className="pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
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