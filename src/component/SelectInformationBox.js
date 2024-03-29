import React, {useEffect, useState} from "react";
import {cityDatas, hashCityData} from "./store/modules/CityDatas";
import {useDispatch, useSelector} from "react-redux";
import {changeValue} from "./store/modules/CityData";
import {getApart} from "./store/modules/ApartData";
import {changeLeasable} from "./store/modules/LeasableData";

const SelectInformationBox = () => {

    const dispatch = useDispatch();
    const city = useSelector(state => state.city);
    const chartInfo = useSelector(state=>state.chartInfo);

    const handleChangeCity = (e) => {
        dispatch(changeValue(JSON.parse(e.target.value)));
        dispatch(getApart(JSON.parse(e.target.value)));
    }

    const handleChangeLeasable = (e) => {
        dispatch(changeLeasable(parseFloat(e.target.value)));
    }

    return(
        <div className="flex flex-row items-center justify-center m-2">
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
            {Array.isArray(chartInfo.netLeasableAreas) && chartInfo.netLeasableAreas.length === 0 ? <></>
                :<select name="leasable" onChange={handleChangeLeasable} className="ml-4 pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                {
                    chartInfo.netLeasableAreas.map((data, index) => {
                        return(<option key={index} value={data}>{data}㎡</option>)
                })
                }
            </select> }
        </div>
    )
}

export default SelectInformationBox;