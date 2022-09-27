import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Map from "./component/Map";
import SearchBar from "./component/SearchBar";
import FloatBox from './component/FloatBox';
import Chart from "./component/Chart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="container">
            <Map className="relative"/>
            <SearchBar/>
            <FloatBox>
                <Chart className="absoulute"/>
            </FloatBox>
        </div>
    </React.StrictMode>
);
