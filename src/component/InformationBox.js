import React from "react";
import SelectInformationBox from "./SelectInformationBox";
import ApartInfoBox from "./ApartInfoBox";

const InformationBox = () => {
    return (
        <div className="flex flex-col justify-start m-2" style={{width:"38rem"}}>
            <SelectInformationBox/>
            <ApartInfoBox/>
        </div>
    )
}

export default InformationBox;