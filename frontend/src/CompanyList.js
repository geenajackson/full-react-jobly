import React, { useState, useEffect } from "react";

import JoblyApi from "./api"
import Company from "./Company"

function CompanyList() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);

    async function fetchData() {
        setIsLoading(true);
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies();
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
            {companies.map(company => (
                <Company>{company}</Company>
            ))}
        </div>
    )
}

export default CompanyList;