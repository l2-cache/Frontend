import React from "react";
import Carousel from 'react-material-ui-carousel'
import ApartName from "./ApartName";
import Chart from "../chart/Chart";
import {useSelector} from "react-redux";
import PredictChart from "../chart/PredictChart";

const ApartInfoBox = () => {
    const chartInfo = useSelector(state=>state.chartInfo);
    const leasableValue = useSelector(state=>state.leasable);

    return(
        <div className="bg-gray-100 rounded-2xl flex flex-col" style={{height:"38rem"}}>
            <ApartName/>
            {
                chartInfo.tradingHistories.length === 0 ? <></> :
                    <Carousel autoPlay={false} animation="slide" className="mx-3 bg-white rounded-md border-gray-200 border items-center justify-center flex flex-col overflow-y-scroll">

                        {
                            chartInfo.tradingHistories.length !== 0 ? chartInfo.tradingHistories.map((data, index) => {
                                if (leasableValue === data.area) {
                                    return(
                                            <Chart key={index} data={data}/>
                                    )
                                }
                            }) : <div style={{height:"29rem"}} className="text-center flex justify-center items-center text-xl">거래 내역이 없습니다 😭</div>
                        }
                        {
                            chartInfo.tradingHistories[0].priceTwoYear !== null ? chartInfo.tradingHistories.map((data, index) => {
                               if (data.priceTwoYear !== null && data.area === leasableValue) {
                                   return(
                                           <PredictChart key={index} predictMonthlyDeposit={data.predictMonthlyDeposit} predictMonthlyPrice={data.predictMonthlyPrice}
                                                         data={{data:[{x:data.data[data.data.length - 1].x,y:data.data[data.data.length - 1].y.toFixed([2])},{x:"2년 후",y:(Math.round(data.priceTwoYear / 10000.0 * 100) / 100.0).toFixed([2])}],area:"예측가격",name:"예측가격"}} />
                                   )
                               }
                            }) : <div style={{height:"29rem"}} className="text-center flex justify-center items-center text-xl">예측 데이터가 없습니다 😭</div>
                        }
                    </Carousel>
            }
        </div>
    )
}

export default ApartInfoBox;