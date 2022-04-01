import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(img, vio, game, bad, pur) {
  return { img, vio, game,bad, pur};
}

const rows = [
//   createData('https://images.ctfassets.net/wn7ipiv9ue5v/6pXEGK66eOt4lOH9fdl66s/dc3d79eaa128011f1d699044810dd8c8/1024px-PEGI_18.svg.png', 'https://images.ctfassets.net/wn7ipiv9ue5v/4BziEzwbShAoRZNAljQxMX/c57e00d3549a468da5e331759577cd47/violence-black-EN.jpg', 'https://images.ctfassets.net/wn7ipiv9ue5v/4hSmitygB6z69yoPItAiNd/32f7e834ca01e048444db1a0b2a5c5a4/gambling-black-EN.jpg', 'https://images.ctfassets.net/wn7ipiv9ue5v/1G2lXAifJWVLaOs33sUTz0/f43fedb0626d76754487a92083458057/in-game_purchases__1_.jpg'),
  createData('Developer', 'Rockstar Games'),
  createData('Publisher', 'Rockstar Games'),
  createData('Links', 'Facebook', 'Twitter', 'Instagram', 'YouTube','Twitch'),
];

export default function BasicTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>"https://images.ctfassets.net/wn7ipiv9ue5v/6pXEGK66eOt4lOH9fdl66s/dc3d79eaa128011f1d699044810dd8c8/1024px-PEGI_18.svg.png"</TableCell> */}
            <TableCell align="left"></TableCell>
            <TableCell align="left">RECOMMENDED</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.img}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.img}
              </TableCell>
              <TableCell align="left">{row.vio}</TableCell>
              <TableCell align="left">{row.game}</TableCell>
              <TableCell align="left">{row.bad}</TableCell>
              <TableCell align="left">{row.pur}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
