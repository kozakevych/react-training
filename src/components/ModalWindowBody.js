import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';

import './ModalWindowBody.scss';

const ModalWindowBody = (data, submitCallback, resetCallback) => {
    const {title, createdAt, movieUrl, genre, overview, runtime} = data

    const handleSubmitClick = () => {
        submitCallback();
    }

    const handleResetClick = () => {
        resetCallback();
    }

    useEffect(() => {
        // TODO: Make form editable
        console.log(data)
    }, [data])

    return (
        <div className="modal-window-wrapper">
            <Typography variant="h5" gutterBottom className="modal-window-title">
                Edit Movie
            </Typography>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Title</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={title || ''} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Release Date</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={createdAt || ''} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Movie Url</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={movieUrl || ''} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Genre</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={genre || ''} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Overview</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={overview || ''} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Runtime</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={runtime || ''} />
            </FormControl>
            <div className="button-wrapper">
                <Button className="reset-button" variant="contained" onClick={handleResetClick}>Reset</Button>
                <Button className="submit-button" variant="contained" onClick={handleSubmitClick} color="secondary">Submit</Button>
            </div>
        </div>
    )
}

export default ModalWindowBody;