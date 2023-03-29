import React, { useState, useEffect } from "react";

import JoblyApi from "./api"
import SearchBar from "./SearchBar";
// import Company from "./Company"

function CompanyList() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    async function fetchData(query = undefined) {
        setIsLoading(true);
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies(query);
            console.log(companies)
            setCompanies(companies);
            setIsLoading(false);
        };
        getCompanies();
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
        <div>
            <SearchBar fetchData={fetchData} />
            {companies.map(company => (
                <p key={company.handle}>{company.name}</p>
            ))}
        </div>
    )
}

export default CompanyList;