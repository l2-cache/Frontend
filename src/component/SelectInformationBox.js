import React from "react";

const SelectInformationBox = () => {
    return(
        <div className="flex flex-row items-center justify-start m-2">
            <select name="position" className="pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                <option>노원구</option>
            </select>
            <select name="position" className="ml-4 pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                <option>광운로</option>
            </select>
            <select name="position" className="ml-4 pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                <option>매매</option>
                <option>전월세</option>
            </select>
            <select name="position" className="ml-4 pl-3 pr-8 py-1 rounded-md w-auto text-gray-700 border-gray-400">
                <option>전체</option>
                <option>77.75㎡</option>
            </select>
        </div>
    )
}

export default SelectInformationBox;