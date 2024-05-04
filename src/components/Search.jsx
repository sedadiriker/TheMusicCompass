import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import { Box, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSearchResult } from '../context/SearchContext';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Search({open,handleClose}) {
 const [searchTerm,setSearchTerm] = React.useState("")
 const { setSearchResults } = useSearchResult();

const navigate = useNavigate()

 const URL = 'http://ws.audioscrobbler.com/2.0/'
 const params = {
  params: {
    method: 'artist.search',
    artist: searchTerm,
    api_key: process.env.REACT_APP_API_KEY,
    format: 'json'
  }}

const handleSearch = async () => {
  try{
    const {data} = await axios(URL,params)
    const {artist} = data.results.artistmatches
    setSearchResults(artist)
    navigate("/searchresults")
    setSearchTerm("")
    handleClose()
    // console.log(data)
  }catch(err){
    console.log(err)
  }
 }

 React.useEffect(()=> {
  handleSearch()
 },[])
// console.log(searchTerm)
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
        <Box sx={{backgroundColor:"black",border:'1px solid #A3D2A4'}} ><DialogContent >
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
        value={searchTerm}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{backgroundColor:"black"}}>
          <Button color='error' onClick={handleClose}>Back</Button>
        </DialogActions></Box>
      </Dialog>
    </React.Fragment>
  );
}

export default Search
