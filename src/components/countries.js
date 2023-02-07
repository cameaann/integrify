
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Country from './country';


export default function Countries() {
    const [country, setCountry] = useState([]);


    const fetchData = () => {
        return fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCountry(data.map(item => item));
            } );
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
            <main>
              <h1>Country List</h1>
              <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Flag</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Region</TableCell>
                        <TableCell align="right">Population</TableCell>
                        <TableCell align="right">Languages</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>

                    </TableRow>
                </TableBody>
            </Table>
        </div>
              <ul>
                {country.map((country, i) => (
                    <li key={i}>{country.name.common}</li>
                  ))}
              </ul>
            </main>

          );

}