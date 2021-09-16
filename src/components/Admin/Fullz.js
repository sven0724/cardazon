import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Paper, Typography, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';

import * as Actions from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import reducer from './store/reducers';
import withReducer from '../../store/withReducer';

const useStyles = makeStyles((theme) => ({
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

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'bin',
    headerName: 'Bin',
    width: 150,
    editable: true
  },
  {
    field: 'cardname',
    headerName: 'Cardholder Name',
    width: 250,
    editable: true
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true
  },
  {
    field: 'date',
    headerName: 'Exp date',
    width: 150,
    editable: true
  },
  {
    field: 'action',
    headerName: 'Buy',
    sortable: false,
    width: 160,
    renderCell: (val) => (<Button onClick={(e) => {
      window.confirm("Do you want to buy this product? Price: " + val.row.price+" BTC");
    }} variant="contained" color="primary">Actions</Button>),
  },
];

function Fullz() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [bin, setBin] = React.useState("");
  const [cardname, setCardname] = React.useState("");
  const [vendor, setVendor] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [exp_date, setExp] = React.useState("");

  const products = useSelector((state) => state.products.product.products);

  let rows = []

  products.map((p, index) => {
    rows.push({
      ...p,
      id: index+1
    })
  })

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    dispatch(Actions.addFullz({
      bin, cardname, vendor, price, exp_date
    }))
    setOpen(false);
  }

  React.useEffect(() => {
    dispatch(Actions.getFullz("Fullz"));
  }, []);

  const handleEditCellChangeCommitted = React.useCallback(
    ({ id, field, props }) => {
      let p = rows[id - 1]
      p[field] = props.value
      dispatch(Actions.updateFullz(p))
    },
    [rows],
  );

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
              <TextField required id="bin" label="Bin" fullWidth autoComplete="cc-name" value={bin} onChange={(e) => setBin(e.target.value)} style={{marginBottom: '20px'}} />
              <TextField required id="Cardname" label="Cardname" fullWidth autoComplete="cc-name" value={cardname} onChange={(e) => setCardname(e.target.value)} style={{marginBottom: '20px'}}/>
              <TextField required id="Vendor" label="Vendor" fullWidth autoComplete="cc-name" value={vendor} onChange={(e) => setVendor(e.target.value)} style={{marginBottom: '20px'}}/>
              <TextField type="number" required id="Price" label="Price" fullWidth autoComplete="cc-name" value={price} onChange={(e) => setPrice(e.target.value)} style={{marginBottom: '20px'}}/>
              <TextField type="date" required id="Exp" label="Exp" fullWidth autoComplete="cc-name" value={exp_date} onChange={(e) => setExp(e.target.value)} style={{marginBottom: '20px'}}/>
            </div>
            <Button variant="contained" style={{ display: "table", float: 'right' }} onClick={onSubmit} color="primary">
              Add
            </Button>
          </div>
        </Fade>
      </Modal>
      <Typography style={{ display: "table", float: 'left' }} variant="h3" className="">Fullz</Typography>
      <Button variant="contained" style={{ display: "table", float: 'right' }} color="primary" onClick={handleOpen}>
        Add product
      </Button>
      <Paper style={{ height: "450px", width: '100%', marginTop: '70px', marginLeft: 0 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          onEditCellChangeCommitted={handleEditCellChangeCommitted}
        />
      </Paper>
    </div>
  );
}

export default withReducer('products', reducer)(Fullz);
