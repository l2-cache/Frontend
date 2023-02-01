import React from "react";

const ProfitData = (props) => {
    return(
        <tr className="bg-white border-b">
            <td className="px-6 py-4">{props.index + 1}</td>
            <td className="px-6 py-4">{props.ranking.address}</td>
            <td className="px-6 py-4">{(props.ranking.price / 10000.0).toFixed([2])}억</td>
            <td className="px-6 py-4">{props.ranking.leasableArea}</td>
            <td className="px-6 py-4">{props.ranking.profit.toFixed([2])}%</td>
        </tr>
    )
}

export default ProfitData;