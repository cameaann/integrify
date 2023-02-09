import React, { useEffect, useState } from "react";
import { useFetchCountries } from "../hooks/useFetchCountries";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Country from './country';


export default function Countries() {
    // const [country, setCountry] = useState([]);

    const countries = useFetchCountries();

    return (
            <div>
                <Table className="countryTB">
                    <TableHead>
                        <TableRow>
                            <TableCell>Flag</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Region</TableCell>
                            <TableCell align="left">Population</TableCell>
                            <TableCell align="left">Languages</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {countries.map((item, i) => (
                                <Country key={i} country={item} />
                            ))}
                    </TableBody>
                </Table>
            </div>
    );

}