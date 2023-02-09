import { TableRow } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Country(props) {
    let { country } = props;

    console.log(country);

    var languagesUi = country.languages
        ? Object.values(country.languages)
            .map((item, i)=> <span key={i}>{item}</span>)
        : <span>no languages</span>

    return (
        <TableRow className="tb_row">
            <TableCell><img src={country.flags.png} width="70" height="50" alt={country.flags.alt}/></TableCell>
            <TableCell align="left">{country.name.official}</TableCell>
            <TableCell align="left">{country.region}</TableCell>
            <TableCell align="left">{country.population}</TableCell>
            <TableCell align="left">{languagesUi}</TableCell>
            <TableCell align="left"><div className="button">Show</div></TableCell>
        </TableRow>

    )

}