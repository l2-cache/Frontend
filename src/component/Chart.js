import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

const Chart = () => {
    return (
        <div>
            <h3 className="text-xl text-center">
                아파트 시세
            </h3>
            <LineChart width={360} height={320} data={data} >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                {/* <YAxis/> */}
                <Tooltip/>
                <Legend/>
                <Line dataKey="대동아파트" fill="#10b981" style={{fontSize: '1rem'}} />
                {/*<Bar dataKey="청마루" fill="#0c4a6e" style={{fontSize: '1rem'}} />*/}
            </LineChart>
        </div>
    )
}

export default Chart;