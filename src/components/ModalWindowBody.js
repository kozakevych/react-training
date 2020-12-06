import React from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

import './ModalWindowBody.scss';

const ModalWindowBody = (data) => {
    const {title, releaseDate, movieUrl, genre, overview, runtime} = data
    return (
        <div className="modal-window-wrapper">
            <Typography variant="h4" gutterBottom>
            Edit Movie
            </Typography>
            <FormControl fullWidth>
                <InputLabel htmlFor="standard-adornment-amount" style={{color: 'black'}}>Title</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={title || ''} />
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
    )
}

export default ModalWindowBody;