import React from "react";

function SearchBar() {

    return (
        <div className="absolute w-96 h-10 top-6 inset-x-0 bg-white shadow-lg mx-auto">
            <form id="search-form" method="GET" action="/search" className="flex justify-between ">
                <input type="text" placeholder="검색어를 입력해주세요" name="searchName" className="border-0 w-full" />
                <button>
                    <img src="img/search.svg" className="w-9 h-9 mr-2 p-1"/>
                </button>
            </form>
        </div>
    )
}


export default SearchBar;