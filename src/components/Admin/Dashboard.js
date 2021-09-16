import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputBase, IconButton, Icon, Paper, Avatar, Typography, Button } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';
import Select from '@material-ui/core/Select';

import * as Actions from './store/actions';
import reducer from './store/reducers';
import withReducer from '../../store/withReducer';

import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
  },
}));

function createData(date, info, type) {
  return { date, info, type };
}

// const rows = [
//   createData('14.03.2021', 'Fullz has been added', 'danger'),
//   createData('18.03.2021', 'Grinch has been locked. 3\'Grinch', 'success'),
// ];

function Dashboard() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  let date = new Date();
  let rows = [];
  const [info, setInfo] = React.useState("");
  const [type, setType] = React.useState("success");
  const [exp_date, setExp] = React.useState("");

  rows = useSelector((state) => state.news.news.info);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    dispatch(Actions.addNews({
      info, exp_date, type
    }))
    setOpen(false);
  }

  React.useEffect(() => {
    dispatch(Actions.getNews());
  }, []);

  return (
    <div className="px-6 py-8 flex-col">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="form-group">
              <TextField required id="Info" label="Info" fullWidth autoComplete="cc-name" value={info} onChange={(e) => setInfo(e.target.value)} style={{marginBottom: '20px'}} />
              <Select
                native
                value={type}
                onChange={(e) => setType(e.target.value)} 
                fullWidth
                style={{marginBottom: '20px'}}
              >
                <option value={'success'}>Success</option>
                <option value={'danger'}>Danger</option>
              </Select>
              <TextField type="date" required id="Exp" label="Exp" fullWidth autoComplete="cc-name" value={exp_date} onChange={(e) => setExp(e.target.value)} style={{marginBottom: '20px'}}/>
            </div>
            <Button variant="contained" style={{ display: "table", float: 'right' }} onClick={onSubmit} color="primary">
              Add
            </Button>
          </div>
        </Fade>
      </Modal>

      <Typography style={{ display: "table", float: 'left' }} variant="h3" className="">Latest News</Typography>

      <Button variant="contained" style={{ display: "table", float: 'right' }} color="primary" onClick={handleOpen}>
        Add product
      </Button>

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
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <span className={clsx(row.type == "danger" ? "bg-red-600" : "bg-green-600", "text-white p-1 text-xl rounded-md")}>{row.date.split('T')[0]}</span>
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

export default withReducer('news', reducer)(Dashboard);
