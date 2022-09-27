
const PriceBar = () =>{
    return (
        <div className="border bg-white mb-1">
            <div className="select-button" className="m-4 flex justify-start">
                <a href="#" className="py-2 px-4 mr-1 border bg-sky-500 text-white">매매</a>
                <a href="#" className="py-2 px-4 mr-1 border text-sky-500">전월세</a>
                <select className="border border-gray-300 py-2 pr-8 pl-4 text-sky-500 ml-auto">
                    <option selected className="">32평</option>
                    <option className="py-2 px-4">32평 - 복층</option>
                </select>
            </div>
            <p className="ml-4 text-sky-500">평균 거래 가격</p>
            <p className="ml-4 font-bold text-2xl mb-2 text-sky-500">4억 7000만</p>
        </div>
    );
}

export default PriceBar;