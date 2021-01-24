import React, {useEffect, useState, useRef} from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import * as _ from 'lodash';

import './ModalWindowBody.scss';

function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();

    // Store current value in ref
    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes

    // Return previous value (happens before update in useEffect above)
    return ref.current;
}

const ModalWindowBody = (baseData, submitCallback, resetCallback) => {
    const [data, setData] = useState(baseData);
    const {title, createdAt, movieUrl, genre, overview, runtime} = data;
    const prevData = usePrevious(baseData);

    useEffect(() => {
        if (!_.isEqual(baseData, prevData)) {
            setData(baseData);
        }
    }, [baseData])

    const handleSubmitClick = () => {
        submitCallback();
    }

    const handleResetClick = () => {
        resetCallback();
    }

    useEffect(() => {
    }, [data])

    const updateForm = (key, value) => {
        const newData = {...data, [key]: value}
        setData(newData);
    } 

    return (
        <div className="modal-window-wrapper">
            <Typography variant="h5" gutterBottom className="modal-window-title">
                Edit Movie
            </Typography>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Title</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={title || ''} onChange={e => {
                    updateForm('title', e.target.value)
                }} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Release Date</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={createdAt || ''} onChange={e => {
                    updateForm('createdAt', e.target.value)
                }} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Movie Url</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={movieUrl || ''} onChange={e => {
                    updateForm('movieUrl', e.target.value)
                }} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Genre</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={genre || ''} onChange={e => {
                    updateForm('genre', e.target.value)
                }} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Overview</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={overview || ''} onChange={e => {
                    updateForm('overview', e.target.value)
                }} />
            </FormControl>
            <FormControl fullWidth className="form-control-wrapper">
                <InputLabel htmlFor="standard-adornment-amount">Runtime</InputLabel>
                <Input color="secondary" id="standard-adornment-amount" value={runtime || ''} onChange={e => {
                    updateForm('runtime', e.target.value)
                }} />
            </FormControl>
            <div className="button-wrapper">
                <Button className="reset-button" variant="contained" onClick={handleResetClick}>Reset</Button>
                <Button className="submit-button" variant="contained" onClick={handleSubmitClick} color="secondary">Submit</Button>
            </div>
        </div>
    )
}

export default ModalWindowBody;