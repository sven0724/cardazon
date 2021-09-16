import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton, Icon, Paper, Avatar, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(date, info, type) {
  return { date, info, type };
}

const rows = [
  createData('14.03.2021', 'Fullz has been added', 'danger'),
  createData('18.03.2021', 'Grinch has been locked. 3\'Grinch', 'success'),
];

function Dashboard() {

  const classes = useStyles();

  return (
    <div className="px-6 py-8 flex-col">
      <Typography variant="h3" className="">Latest News</Typography>

      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.index}>
              <TableCell component="th" scope="row">
                <span className={clsx(row.type == "danger" ? "bg-red-600" : "bg-green-600", "text-white p-1 text-xl rounded-md")}>{row.date}</span>
              </TableCell>
              <TableCell>
                <span className={clsx(row.type == "danger" ? "text-red-600" : "text-green-600", "p-1 text-xl rounded-md")}>
                  {row.info}
                  </span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Dashboard;
