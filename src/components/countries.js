import React from "react";
import { useNavigate } from 'react-router-dom';
import { useFetchCountries } from "../hooks/useFetchCountries";
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';


export function Countries() {
    const countries = useFetchCountries();
    const navigate = useNavigate();

    function getLanguages(country) {
        return country
            ? Object.values(country)
                .map((item, i) => <div key={i}>{item},</div>)
            : <span>no languages</span>
    }


    const columns = [
        {
            field: 'flag', headerName: 'Flag', width: 90, padding: 20,
            headerClassName: "table__header",
            renderCell: (params) => (
                <img src={params.row.flag.png} alt={params.row.flag.alt} width="70" height="50" />
            )
        },
        {
            field: 'name', headerName: 'Name', width: 130,
            headerClassName: "table__header",
        },
        {
            field: 'region', headerName: 'Region', width: 130,
            headerClassName: "table__header",
            valueGetter: (params) =>
                `${params.row.region || ''}`,
        },
        {
            field: 'population',
            headerClassName: "table__header",
            headerName: 'Population',
            type: 'number',
            width: 90,
            valueGetter: (params) =>
                `${params.row.population || ''}`,
        },
        {
            field: 'languages',
            headerClassName: "table__header",
            headerName: 'Languages',
            width: 200,
            renderCell: (params) => (
                getLanguages(params.row.languages)
            )
        },
        {
            field: 'showbutton',
            headerClassName: "table__header",
            width: 90,
            headerName: '',
            renderCell: (params) => (
                <strong>
                    <IconButton
                        onClick={() => navigate(`/country/${params.row.name}`)}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </strong>
            ),
        },
    ];


    return (
        <div style={{ height: 380, width: '100%' }}>
            <div className="header">
                <IconButton
                    onClick={() => navigate(`/}`)}
                >
                    <MenuIcon sx={{color: '#ffffff'}} />
                </IconButton>
            </div>
            <DataGrid sx={{
                '.MuiDataGrid-columnSeparator': { display: 'none' },
                '&.MuiDataGrid-root': { border: 'none' },
            }}
                rows={countries}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                pagination
            />
        </div>
    );
}