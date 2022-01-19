import React from 'react'
import CandidateFilters from './candidateFilters.jsx'
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/';
import { 
  TableContainer, 
  Table, 
  TableCell, 
  TableHead, 
  TableRow, 
  TableBody, 
  Paper, 
  Grid } from '@mui/material/'
import iconImport from './img/Import.svg'
import iconText from './img/iconText.svg'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TableCandidate = () => {
  return(
    <Grid container spacing={1} direction="column" justifyContent="center" alignItems="center">
      <Grid item>
        <CandidateFilters/>
      </Grid>
      <Grid item>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
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
  )
}

export default TableCandidate