import React, { useEffect, useState } from "react";

export function useFetchCountries(){
    const [countries, setCountries] = useState([]);


    const fetchData = () => {
        return fetch("https://restcountries.com/v3.1/all?fields=name,region,population,flags,languages")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setCountries(data.map(item => item));
            } );
    }

    useEffect(() => {
        fetchData();
    }, [])

    return countries;

}