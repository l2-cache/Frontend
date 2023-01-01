import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from "./component/SearchBar";
import FloatBox from './component/FloatBox';
import Chart from "./component/Chart";
import KakaoMap from "./component/KaKaoMap";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <div className="container">
            <KakaoMap className="relative"/>
            <SearchBar/>
            <FloatBox>
                <Chart className="absoulute"/>
            </FloatBox>
        </div>
);
