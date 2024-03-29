import React from "react";
import ReactApexChart from "react-apexcharts";
import ApartOtherInfo from "../apart/ApartOtherInfo";

const PredictChart = (props) => {
    const options = {
        chart: {
            type: 'area',
            height: 350
        },
        title: {
            text: '아파트 매매 예측',
            align: 'center',
            style: {
                fontSize: '20px',
                fontWeight: 900
            }
        },
        markers: {
            hover: {
                sizeOffset: 4
            }
        },
        colors: ['#301E67'],
        tooltip: {
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return value + "억";
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value.toFixed(2) + "억";
                }
            },
        },
    }

    return (
        <div className="mx-2" style={{height:"29rem"}}>
            <ApartOtherInfo deposit={props.predictMonthlyDeposit} price={props.predictMonthlyPrice} name="예측 월세"/>
            <ReactApexChart type="area" options={options} series={[props.data]} style={{marginTop:"10px"}}>

            </ReactApexChart>
        </div>
    )
}

export default PredictChart