import React from "react";

const SelectInformationBox = () => {
    return(
        <div className="flex flex-row items-center justify-start m-2">
            <select name="position" className="px-3 py-1 rounded-md w-24 text-gray-700 border-gray-400">
                <option>노원구</option>
            </select>
            <select name="position" className="mx-4 px-3 py-1 rounded-md w-24 text-gray-700 border-gray-400">
                <option>광운로</option>
            </select>
        </div>
    )
}

export default SelectInformationBox;