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
                    <Carousel autoPlay={false} key={"1"} animation="slide" className="mx-3 bg-white rounded-md border-gray-200 border items-center justify-center flex flex-col overflow-y-scroll">
                        {
                            chartInfo.tradingHistories.map((data, index) => {
                                if (leasableValue === data.area) {
                                    return(
                                        <div>
                                            <Chart key={index} data={data} />
                                        </div>
                                    )
                                }
                            })
                        }
                        {
                            chartInfo.tradingHistories.map((data, index) => {
                               if (data.priceHalfYear !== null && data.area === leasableValue) {
                                   return(
                                       <div>
                                           <PredictChart key={index} data={{data:[{x:"6개월후",y:data.priceHalfYear.toFixed([2])},{x:"1년 후",y:data.priceOneYear.toFixed([2])},{x:"2년 후",y:data.priceTwoYear.toFixed([2])}],area:"예측가격"}} />
                                       </div>
                                   )
                               }
                            })
                        }
                    </Carousel>
                //     <Carousel autoPlay={false} key={"1"} animation="slide" className="mx-3 bg-white rounded-md border-gray-200 border items-center justify-center flex flex-col overflow-y-scroll">
                //         {
                //             chartInfo.tradingHistories.map((data, index) => {
                //                 return(
                //                         <div>
                //                             <div>
                //                                 <Chart key={index} data={data} />
                //                             </div>
                //                             <div>
                //                                 <Chart key={data.area} data={[{x:"6개월후",y:data.priceHalfYear},{x:"1년 후",y:data.priceOneYear},{x:"2년 후",y:data.priceTwoYear}]} />
                //                             </div>
                //                         </div>
                //                 )
                //             })
                //             // chartInfo.tradingHistories.map((data, index) => {
                //             //     if (data.area === leasableValue) {
                //             //         return(
                //             //             <div>
                //             //                 <Chart key={index} data={data} />
                //             //             </div>
                //             //         )
                //             //     }
                //             // })
                //         }
                // </Carousel>
            }
        </div>
    )
}

export default ApartInfoBox;