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
        // async function fetchApartData() {
        //     let res = await axios.get('http://localhost:8080/api/find-city?city='+ JSON.parse(e.target.value).name);
        //     console.log(res.data);
        // }
        // fetchApartData();
        dispatch(changeValue(JSON.parse(e.target.value)));
        dispatch(getApart(JSON.parse(e.target.value)));
    }

    const handleChangeLeasable = (e) => {
        console.log("아니 이게 맞음?? ", e.target.value);
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
            <select name="position" className="ml-4 pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                <option>매매</option>
                <option>전월세</option>
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