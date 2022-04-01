import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, empty, recom, emp) {
  return { name, empty, recom, emp};
}

const rows = [
  createData('OS', 'Windows 10 64-bit', 'OS', 'Windows 10 64-bit'),
  createData('Processor', 'Intel® Core™ i5-2500K / AMD FX-6300, 9.0, 37, 4.3','Processor', 'Intel® Core™ i7-4770K / AMD Ryzen 5 1500X'),
  createData('Memory', '8GB', 'Memory', '12GB'),
  createData('Graphics', 'GraphicsNvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB', 'Graphics', 'Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB'),
  createData('Disk', '150GB', 'Disk', '150GB'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>MINIMUM</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left">RECOMMENDED</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.empty}</TableCell>
              <TableCell align="left">{row.recom}</TableCell>
              <TableCell align="left">{row.emp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
