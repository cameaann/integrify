import { useEffect, useState } from "react";

export function useFetchCountries(){
    const [countries, setCountries] = useState([]);

    const fetchData = () => {
        return fetch("https://restcountries.com/v3.1/all?fields=name,region,population,flags,languages")
            .then((response) => response.json())
            .then((data) => {
                 setCountries(data.map(((item, index) => {
                    return {id: index,
                            flag: item.flags,
                            name: item.name.common,
                            region: item.region,
                            population: item.population,
                            languages: item.languages
                        };
                  })));

            } );
    }

    useEffect(() => {
        fetchData();
    }, [])

    return countries;

}