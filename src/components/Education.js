import React, {Component} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

function additionalCourses(name, org, datePeriod) {
    return { name, org, datePeriod };
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

  const courses = [
      additionalCourses('Ликбез по дискретной математике', 'Stepic.org', '2015'),
      additionalCourses('Algorythms: Design and Analysis. Part1', 'Coursera.org', '2015'),
      additionalCourses('Java. Базовый курс', 'Stepic.org', '2015'),
      additionalCourses('Разработка .Net', 'Digital Design', '2015'),
      additionalCourses('EMC Academic Associate,Information Storage and Management', 'EMC', '2015'),
      additionalCourses('MongoDB Java Developer', 'MongoDB University', '2016'),
      additionalCourses('Git', 'Stepic.org', '2017'),
      additionalCourses('Теория графов', 'Stepic.org', '2017'),
      additionalCourses('Hadoop', 'Stepic.org', '2018'),
      additionalCourses('Jenkins', 'LinkedIn Learning', '2019'),
      additionalCourses('Kafka Essential', 'LinkedIn Learning', '2019'),
      additionalCourses('Python Essential', 'LinkedIn Learning', '2019'),
      additionalCourses('Kubernetes', 'LinkedIn Learning', '2020')
  ]

export default function() {
    const classes = useStyles();
    
    return(
        <div>
            <Typography variant='h3'>
                Образование:
            </Typography>
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

            <Typography variant='h3'>
                Дополнительное образование:
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Период обучения</TableCell>
                            <TableCell align="right">Название заведения</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key='2014-2015'>
                            <TableCell component="th" scope="row">2014-2015</TableCell>
                            <TableCell align="right">Лаборатория языковых инструментов JetBrains</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Typography variant='h3'>
                Дополнительные курсы:
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell align="right">Название организации</TableCell>
                            <TableCell align="right">Дата окончания</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {courses.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.org}</TableCell>
                                <TableCell align="right">{row.datePeriod}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}