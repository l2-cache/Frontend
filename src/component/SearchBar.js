import React from "react";
import SearchIcon from "@mui/icons-material/Search"

function SearchBar() {

    return (
        <div className="absolute w-96 h-10 top-6 inset-x-0 bg-white shadow-lg mx-auto">
            <form id="search-form" method="GET" action="/search" className="flex justify-between ">
                <input type="text" placeholder="검색어를 입력해주세요" name="searchName" className="border-0 w-full" />
                <button>
                    <SearchIcon className="mx-2"></SearchIcon>
                </button>
            </form>
        </div>
    )
}


export default SearchBar;