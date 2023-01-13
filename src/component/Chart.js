import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ReactApexChart from "react-apexcharts";
import {useSelector} from "react-redux";
const data = [
    {
        "name": "01-01",
        "대동아파트": 3.2,
    },
    {
        "name": "01-02",
        "대동아파트": 3.6,
    },
    {
        "name": "01-03",
        "대동아파트": 3.9,
    },
    {
        "name": "01-04",
        "대동아파트": 4.9,
    },
    {
        "name": "01-05",
        "대동아파트": 4.3,
    },
    {
        "name": "01-06",
        "대동아파트": 5.2,
    },{
        "name": "01-07",
        "대동아파트": 5.9,
    },
    {
        "name": "01-08",
        "대동아파트": 6.2,
    },
    {
        "name": "01-09",
        "대동아파트": 6.5,
    },
    {
        "name": "01-10",
        "대동아파트": 5.2,
    },
]

const series = [{
    name: '거래가격',
    // type: 'line',
    data: [
        {
            "x": "2020-01-01",
            "y": 3.2,
        },
        {
            "x": "2020-01-02",
            "y": 3.6,
        },
        {
            "x": "2020-01-03",
            "y": 3.9,
        },
        {
            "x": "2020-01-04",
            "y": 4.9,
        },
        {
            "x": "2020-01-05",
            "y": 4.3,
        },
        {
            "x": "2020-01-06",
            "y": 5.2,
        },{
            "x": "2020-01-07",
            "y": 5.9,
        },
        {
            "x": "2020-01-08",
            "y": 6.2,
        },
        {
            "x": "2020-01-09",
            "y": 6.5,
        },
        {
            "x": "2020-01-10",
            "y": 5.2,
        }]
}]


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