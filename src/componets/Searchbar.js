import React from 'react'
import "./Searchbar.css"

function Searchbar() {
    return (
        <form id="searchform">
            <input type={"text"} id="search" placeholder="Search recent transactions..." />
            <button></button>
        </form>

    )
}

export default Searchbar