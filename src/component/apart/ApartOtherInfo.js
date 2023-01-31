import React from "react";

const ApartOtherInfo = (props) => {

    function numberToKorean(number){
        var inputNumber  = number < 0 ? false : number;
        var unitWords    = ['', '만', '억', '조', '경'];
        var splitUnit    = 10000;
        var splitCount   = unitWords.length;
        var resultArray  = [];
        var resultString = '';

        for (var i = 0; i < splitCount; i++){
            var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
            unitResult = Math.floor(unitResult);
            if (unitResult > 0){
                resultArray[i] = unitResult;
            }
        }

        for (var i = 0; i < resultArray.length; i++){
            if(!resultArray[i]) continue;
            resultString = String(resultArray[i]) + unitWords[i] + resultString;
        }

        return resultString;
    }

    return(
        <div className="grid grid-cols-2 gap-2 items-center my-2">
            <div className="border rounded-md h-20 p-2">
                <p className="text-xl font-bold text-gray-900">평균 {props.name} 보증금</p>
                <p className="text-gray-800"><span className="text-gray-500">매물 평균가</span> {numberToKorean(props.deposit)}만원</p>
            </div>
            <div className="border rounded-md h-20 p-2">
                <p className="text-xl font-bold text-gray-900">평균 {props.name} 가격</p>
                <p className="text-gray-800"><span className="text-gray-500">매물 평균가</span> {numberToKorean(props.price)}만원</p>
            </div>
        </div>
    )
}

export default ApartOtherInfo;