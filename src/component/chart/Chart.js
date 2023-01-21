import React, { PureComponent } from 'react';
import ReactApexChart from "react-apexcharts";
import ApartOtherInfo from "../apart/ApartOtherInfo";

const Chart = (props) => {
    const options = {
        chart: {
            type: 'area',
            height: 350
        },
        title: {
            text: '아파트 '+ props.data.area +'㎡ 시세',
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
        colors: ['#FF2D45'],
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
        <div className="mx-2 flex flex-col" style={{height:"29rem"}}>
            <ApartOtherInfo/>
            <ReactApexChart type="area" options={options} series={[props.data]} style={{marginTop:"10px"}}>

            </ReactApexChart>
        </div>
    )
}

export default Chart;