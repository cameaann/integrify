import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { Card, IconButton, CardHeader, CardContent, CardMedia, Avatar, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Country = () => {
    const { slug } = useParams();
    const [country, setCountry] = useState(null);


    useEffect(() => {
        const fetchData = () => {
            return fetch("https://restcountries.com/v3.1/name/" + slug)
                .then((response) => response.json())
                .then((data) => {
                    setCountry(data[0]);
                })
                .catch((error) => console.log(error));
        }
        fetchData();
    }, [slug])

    if (country)
        return (
            <div className="container">

                <Card sx={{ maxWidth: 345,  margin: '40px auto'}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {(country.name.common).slice(0, 1)}
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={country.name.common}
                        subheader={country.capital}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={country.flags.svg}
                        alt={country.flags.aly}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            The country belongs to <span className="defined">{country.region}</span> region and {country.subregion} sub-region.
                            Located at the <span className="defined">{country.latlng[0]}</span>°N and <span className="defined">{country.latlng[1]}</span>°W,
                            this country has population of <span className="defined">{country.population}</span>
                            and it has gained independent, according to the CIA World Factbook.
                        </Typography>
                        <Typography paragraph>

                        </Typography>

                    </CardContent>

                </Card>
            </div>

        )
    else
        return (<div>loading</div>)

}

export default Country;