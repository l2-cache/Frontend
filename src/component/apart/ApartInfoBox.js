import React from "react";
import Carousel from 'react-material-ui-carousel'
import ApartName from "./ApartName";
import Chart from "../chart/Chart";
import {useSelector} from "react-redux";

const ApartInfoBox = () => {
    const chartInfo = useSelector(state=>state.chartInfo);

    return(
        <div className="bg-gray-100 rounded-2xl flex flex-col" style={{height:"38rem"}}>
            <ApartName/>
            {
                chartInfo.tradingHistories.length === 0 ? <></> :
                    <Carousel autoPlay={false} key={"1"} animation="slide" className="mx-3 bg-white rounded-md border-gray-200 border items-center justify-center flex flex-col">
                        {
                            chartInfo.tradingHistories.map((data, index) => {
                                console.log(data);
                                return(
                                    <div>
                                        <Chart key={index} data={data} />
                                    </div>
                                )
                            })
                        }
                </Carousel>
            }
        </div>
    )
}

export default ApartInfoBox;