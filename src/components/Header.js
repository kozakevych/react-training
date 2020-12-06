import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Background from '../../assets/background.jpg';
import ModalWindowBody from './ModalWindowBody';
import SearchIcon from '@material-ui/icons/Search';

import MovieDetails from './MovieDetails';

const Header = (props) => {
    const [open, setOpen] = React.useState(false);
    // const [movieDetailsOpen, setMovieDetailsOpen] = React.useState(props.detailsOpen);
    const handleOpen = () => {
      setOpen(true);
    };  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
      console.log('test')
      // console.log(movieDetailsOpen)
    }, [props.detailsOpen])

    return (
        <div>
          <AppBar position="static" style={{ backgroundImage: `url(${Background})`, height: '300px'}}>
              <div>
                <Typography variant="h5" style={{color: 'red', display: 'inline', margin: '0 0 10px 10px'}}>
                    <b>netflix</b>roulette
                </Typography>
                {props.detailsOpen ? <SearchIcon style={{float: 'right', margin: '10px 10px 0 0'}} /> : <Button variant="contained" style={{float: 'right', margin: '10px 10px 0 0'}} onClick={handleOpen}>
                    + Add movie
                </Button>}
              </div>
              {props.detailsOpen ? <MovieDetails /> :
              <div style={{width: '100%'}}>
                <div style={{margin: 'auto', width: '300px', paddingTop: '80px'}}>
                    <input style={{height: '30px'}} />
                    <Button variant="contained" color="secondary">
                        Search
                    </Button>
                </div>
              </div>}
          </AppBar>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {ModalWindowBody({})}
                </Modal>
        </div>
    )
};

export default Header;
