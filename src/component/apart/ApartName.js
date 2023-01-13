import React from "react";
import {useSelector} from "react-redux";

const ApartName = () => {
    const chartInfo = useSelector(state=>state.chartInfo);
    return(
        <div className="bg-white m-3 rounded-md text-center border-gray-200 py-2 border">
            {
                chartInfo.apartName === undefined ? <h1 className="font-extrabold text-3xl text-gray-900">정보를 얻으려면 핀을 클릭해주세요</h1> : <h1 className="font-extrabold text-3xl text-gray-900">{chartInfo.apartName}</h1>
            }
            {
                chartInfo.fullAddress === undefined ? <></> : <p className="font-normal text-gray-700 text-sm">{chartInfo.fullAddress}</p>
            }
        </div>
    )
}

export default ApartName;