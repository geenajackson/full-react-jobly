import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";

import JoblyApi from "./api"
import SearchBar from "./SearchBar";
import Company from "./Company"

import UserContext from "./userContext";


function CompanyList() {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const user = useContext(UserContext)

    async function fetchData(query = undefined) {
        setIsLoading(true);
        async function getCompanies() {
            let companies = await JoblyApi.getCompanies(query);
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

    if (!user) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <SearchBar fetchData={fetchData} />
            {companies.map(company => (
                <Company
                    key={company.handle}
                    handle={company.handle}
                    name={company.name}
                    description={company.description}
                    numEmployees={company.numEmployees}
                    logoUrl={company.logoUrl}
                ></Company>
            ))}

        </div>
    )
}

export default CompanyList;