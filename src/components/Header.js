import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Background from '../../assets/background.jpg';
import Input from '@material-ui/core/Input';

const bodyStyles = {
    background: 'white',
    height: '500px',
    width: '400px'
}

const body = (
    <div style={bodyStyles}>
    <Typography variant="h4" gutterBottom>
      Add Movie
    </Typography>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-amount" style={{color: 'black'}}>Title</InputLabel>
        <Input color="secondary" id="standard-adornment-amount" value="" />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-amount" style={{color: 'black'}}>Release Date</InputLabel>
        <Input color="secondary" id="standard-adornment-amount" value="" />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-amount" style={{color: 'black'}}>Movie Url</InputLabel>
        <Input color="secondary" id="standard-adornment-amount" value="" />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-amount" style={{color: 'black'}}>Genre</InputLabel>
        <Input color="secondary" id="standard-adornment-amount" value="" />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-amount" style={{color: 'black'}}>Overview</InputLabel>
        <Input color="secondary" id="standard-adornment-amount" value="" />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="standard-adornment-amount" style={{color: 'black'}}>Runtime</InputLabel>
        <Input color="secondary" id="standard-adornment-amount" value="" />
      </FormControl>
        <Button variant="contained">Reset</Button>
        <Button variant="contained" color="secondary">Submit</Button>
    </div>
);

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
          <AppBar position="static" style={{ backgroundImage: `url(${Background})`, height: '300px'}}>
              <div>
                <Typography variant="h5" style={{color: 'red', display: 'inline', margin: '0 0 10px 10px'}}>
                    <b>netflix</b>roulette
                </Typography>
                <Button variant="contained" style={{float: 'right', margin: '10px 10px 0 0'}} onClick={handleOpen}>
                    + Add movie
                </Button>
              </div>
              <div style={{width: '100%'}}>
                <div style={{margin: 'auto', width: '300px', paddingTop: '80px'}}>
                    <input style={{height: '30px'}} />
                    <Button variant="contained" color="secondary">
                        Search
                    </Button>
                </div>
              </div>
          </AppBar>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
        </div>
    )
};

export default Header;
