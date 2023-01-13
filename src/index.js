import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css'

import Container from "./component/Container";
import {Provider} from "react-redux";
import {store} from "./component/store/store";
import {ChakraProvider} from "@chakra-ui/react";
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <div className="bg-gray-400 h-full flex flex-col">
                <ToastContainer autoClose={1000} position="bottom-right" limit={1}/>
                <div className="flex min-h-screen justify-center items-center">
                    <Container/>
                </div>
            </div>
        </Provider>
);
