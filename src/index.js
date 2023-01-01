import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from "./component/SearchBar";
import FloatBox from './component/FloatBox';
import Chart from "./component/Chart";
import KakaoMap from "./component/KaKaoMap";
import Container from "./component/Container";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <div className="bg-gray-400 h-screen">
            <div className="flex min-h-screen justify-center items-center">
                <Container>
                    {/*/!*<SearchBar/>*!/*/}
                    {/*/!*<FloatBox>*!/*/}
                    {/*/!*    <Chart className="absoulute"/>*!/*/}
                    {/*/!*</FloatBox>*!/*/}
                </Container>
            </div>
        </div>
);
