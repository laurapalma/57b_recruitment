import React from 'react'
import CandidateFilters from './candidateFilters.jsx.js'
import { TableContainer, Table, TableCell, TableHead, TableRow, TableBody, Paper, Grid, withStyles, makeStyles } from '@mui/material/'
import iconImport from './img/Import.png'
import iconText from './img/iconText.png'
// {rows.map((row) => ( dentro de <TableBody>))}

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: '#F4F6F9',
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const TableCandidate = () => {
    const classes = useStyles();
    
    return(
        <>
        <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <CandidateFilters/>
            </Grid>
            <Grid item>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Date</StyledTableCell>
                                <StyledTableCell align='left'>Job</StyledTableCell>
                                <StyledTableCell align='left'>Name</StyledTableCell>
                                <StyledTableCell align='left'>Email</StyledTableCell>
                                <StyledTableCell align='left'>Phone</StyledTableCell>
                                <StyledTableCell align='left'>Linkedin</StyledTableCell>
                                <StyledTableCell align='left'>English</StyledTableCell>
                                <StyledTableCell align='left'>Resume</StyledTableCell>
                                <StyledTableCell align='left'>Status</StyledTableCell>

                            </TableRow>
                        </TableHead>
                            <TableBody>
                                <StyledTableRow >
                                <StyledTableCell component='th' scope='row'>2022/01/16</StyledTableCell>
                                <StyledTableCell align='center'>Senior Fronted Developer</StyledTableCell>
                                <StyledTableCell align='center'>Peter</StyledTableCell>
                                <StyledTableCell align='center'>Peter@google.com</StyledTableCell>
                                <StyledTableCell align='center'>+1 9163043626</StyledTableCell>
                                <StyledTableCell align='center'>Linkedin name1</StyledTableCell>
                                <StyledTableCell align='center'>Basic</StyledTableCell>
                                <StyledTableCell align='center'><img src={iconImport} alt="iconImport"/></StyledTableCell>
                                <StyledTableCell align='center'>Desplegable</StyledTableCell>
                                <StyledTableCell align='center'><img src={iconText} alt="iconText"/></StyledTableCell>

                                </StyledTableRow>
                            </TableBody>
                    </Table>
            </TableContainer>
            </Grid>
        </Grid>
        
    </>
    )
}

export default TableCandidate