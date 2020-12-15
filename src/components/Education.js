import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('2013-2017', "Санкт-Петербургский государственный университет", "Математико-механический", 
    "Математическое обеспечение и администрирование информационных систем", "Кафедра системного программирования"),
    ];
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default function() {
    const classes = useStyles();
    
    return(
            <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Период обучения</TableCell>
            <TableCell align="right">Название заведения</TableCell>
            <TableCell align="right">Факультет</TableCell>
            <TableCell align="right">Направление</TableCell>
            <TableCell align="right">Кафедра</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        )
}