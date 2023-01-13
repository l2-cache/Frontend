import React, { PureComponent } from 'react';
import ReactApexChart from "react-apexcharts";

const Chart = (props) => {
    const options = {
        chart: {
            type: 'line',
            height: 350
        },
        stroke: {
            curve: 'stepline',
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
        colors: ['#82CD47'],
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
                    return value + "억";
                }
            },
        },
    }

    return (
        <div className="mx-2" style={{height:"29rem"}}>
            <ReactApexChart type="line" options={options} series={[props.data]} style={{marginTop:"10px"}}>

            </ReactApexChart>
        </div>
    )
}

export default Chart;