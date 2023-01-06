import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "./component/Container";
import {Provider} from "react-redux";
import {store} from "./component/store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <div className="bg-gray-400 h-full flex flex-col">
                <div className="flex min-h-screen justify-center items-center">
                    <Container/>
                </div>
            </div>
        </Provider>
);
