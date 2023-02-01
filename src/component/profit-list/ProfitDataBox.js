import React from "react";
import {Modal} from "@mui/material";
import ProfitData from "./ProfitData";
import {useSelector} from "react-redux";

const ProfitDataBox = (props) => {

    const ranking = useSelector(state => state.ranking);

    return (
        <Modal open={props.open} onClose={props.handleClose} aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description">
            <div className="bg-white absolute top-1/2 left-1/2 rounded-lg drop-shadow-md"
                 style={{transform: 'translate(-50%, -50%)', scrollbarWidth: 'none', width: "800px", height: "600px"}}>
                <h1 className="text-center p-2 font-bold text-2xl">수익률 순위</h1>
                <div className="relative overflow-x-auto overflow-y-auto h-full">
                    <table
                        className="w-full border-collapse text-sm table-auto text-left text-gray-600">
                        <thead className="font-medium text-gray-900 bg-gray-50 ">
                            <tr>
                                <th className="px-6 py-3">순위</th>
                                <th className="px-6 py-3">주소</th>
                                <th className="px-6 py-3">거래 금액</th>
                                <th className="px-6 py-3">전용면적(㎡)</th>
                                <th className="px-6 py-3">수익 률</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ranking.length === 0 ? <></> : ranking.map((data, index) => {
                                return(<ProfitData ranking={data} key={index} index={index}/>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Modal>
    )
}

export default ProfitDataBox;