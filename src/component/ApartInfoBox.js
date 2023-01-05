import React from "react";
import Carousel from 'react-material-ui-carousel'
import ApartName from "./ApartName";
import Chart from "./Chart";

const Arrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className}
             onClick={onClick}
             style={{...style, left:"2px", right:"2px"}}
        />
    )
}

const ApartInfoBox = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow/>,
        prevArrow: <Arrow/>
    }

    return(
        <div className="bg-gray-100 rounded-2xl flex flex-col" style={{height:"38rem"}}>
            <ApartName/>
            <Carousel animation="slide" className="mx-3 bg-white rounded-md border-gray-200 border items-center justify-center flex flex-col">
                <div>
                    <Chart name={"매매"}/>
                </div>
                <div>
                    <Chart name={"전월세"}/>
                </div>
            </Carousel>
        </div>
    )
}

export default ApartInfoBox;