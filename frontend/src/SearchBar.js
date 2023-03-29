import React, { useState } from "react";

function SearchBar({ fetchData }) {
    const [search, setSearch] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        fetchData(search);
    };

    const handleChange = e => {
        setSearch(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search: </label>
            <input
                id="search"
                name="search"
                type="text"
                placeholder="Search"
                onChange={handleChange}>
            </input>
            <button type="submit">Search!</button>
        </form>
    )
}

export default SearchBar;