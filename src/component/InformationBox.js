import React from "react";
import SelectInformationBox from "./SelectInformationBox";
import ApartInfoBox from "./ApartInfoBox";

const InformationBox = () => {
    return (
        <div className="flex flex-col justify-start m-2" style={{width:"38rem"}}>
            <SelectInformationBox/>
            <ApartInfoBox/>
            <footer className="text-center mt-4 text-sm text-gray-500">
                <a href="https://github.com/l2-cache">Copyright © 2023 L2-Cache</a>
            </footer>
        </div>
    )
}

export default InformationBox;