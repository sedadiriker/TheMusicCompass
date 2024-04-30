import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Search({open,handleClose}) {
 

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogContent sx={{backgroundColor:"black"}} >
          <DialogContentText id="alert-dialog-slide-description">
          <TextField
          sx={{color:'white'}}
        id="standard-basic"
        label="Search"
        variant="standard"
        margin="normal"
        color='success'
        InputLabelProps={{style:{color:'#1BD760',fontSize:"1.5rem"}}}
        inputProps={{
          style: { color: 'white' }
        }}
        fullWidth
      />
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{backgroundColor:"black"}}>
          <Button onClick={handleClose}>Back</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Search
