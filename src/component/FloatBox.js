import React from "react";
import NameBar from "./NameBar";
import PriceBar from "./PriceBar";
import ChartBox from "./ChartBox";

const FloatBox = () => {

    return(
        <div className="absolute w-96 h-3/4 bg-grey-400 top-6 right-3 shadow-lg bg-gray-100 z-10">
            <div className="flex flex-col p-2 m-0 w-full h-full">
                <NameBar />
                <PriceBar />
                <ChartBox />
            </div>
        </div>
    );

}


export default FloatBox;