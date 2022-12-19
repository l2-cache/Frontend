import React from "react";

const SearchList = ({data, searchData}) =>{
    return (
        <div className="bg-white w-96 h-32 mt-2 overflow-y-scroll">
            {data.filter((res) =>{
                if(searchData !== ""){
                    if(res.apartName.includes(searchData)){
                        return res;
                    }
                }
            }).map((val) =>{
                return(
                    <div className="px-2 py-2">
                        <span className="font-medium">{val.apartName}</span>
                        <span className="pl-1 text-sm text-gray-400">{val.address}</span>
                    </div>
                )
            })
            }
        </div>
    );
}

export default SearchList;