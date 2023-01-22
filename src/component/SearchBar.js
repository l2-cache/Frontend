import React from "react";
import SearchIcon from "@mui/icons-material/Search"
import {Tooltip} from "@mui/material";

function SearchBar() {

    return (
        <div className="absolute w-96 h-10 top-6 inset-x-0 bg-white shadow-lg mx-auto z-10">
            <form id="search-form" method="GET" action="/search" className="flex justify-between ">
                <input type="text" placeholder="검색어를 입력해주세요" name="searchName" className="border-0 w-full" />
                <Tooltip title="검색은 구를 넣어서 입력해주세요 (ex, 노원구 롯데캐슬루나)" placement="top">
                    <SearchIcon className="mx-2"></SearchIcon>
                </Tooltip>
            </form>
        </div>
    )
}


export default SearchBar;