import React, {useState} from "react";
import SelectInformationBox from "./SelectInformationBox";
import ApartInfoBox from "./ApartInfoBox";

const InformationBox = (props) => {

    // const cityInfo = [{name:'강남구',x:37.51742,y:127.047339},{name:'강동구',x:37.53036,y:127.123758},{name:'강북구',x:37.53036,y:127.12375},{name:'강서구',x:37.53036,y:127.123758},
    //     {name:'관악구',x:37.4782,y:126.9515},{name:'광진구',x:37.5385,y:127.08230},{name:'구로구',x:37.5385,y:127.08230},{name:'금천구',x:37.53852,y:127.0823},
    //     {name:'노원구',x:37.65438,y:127.056389},{name:'도봉구',x:37.6688,y:27.04701},{name:'동대문구',x:37.57446,y:127.03978},{name:'동작구',x:37.5124444,y:126.93979},
    //     {name:'마포구',x:37.51244,y:126.93979},{name:'서대문구',x:37.5791707,y:126.93661},{name:'서초구',x:37.48378,y:127.03274},{name:'성동구',x:37.48378,y:127.032749},
    //     {name:'성북구',x:37.589421,y:127.01696},{name:'송파구',x:37.58942,y:127.016966},{name:'양천구',x:37.51718,y:126.86664},{name:'영등포',x:37.51718,y:126.8666},
    //     {name:'용산구',x:37.532479,y:126.99052},{name:'은평구',x:37.532479,y:126.990524},{name:'종로구',x:37.57356,y:126.978944},{name:'중구',x:37.581061,y:126.9518},{name:'중랑구',x:37.58106,y:126.95188}];

    return (
        <div className="flex flex-col justify-start m-2" style={{width:"38rem"}}>
            <SelectInformationBox/>
            <ApartInfoBox/>
            <footer className="text-center mt-4 text-sm text-gray-500">
                <a href="https://github.com/l2-cache">Copyright © 2023 L2-Cache, KwangWoon University</a>
            </footer>
        </div>
    )
}

export default InformationBox;