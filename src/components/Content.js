import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';

import './Content.scss'

import MovieDataMock from '../movieDataMock';

import ModalWindowBody from './ModalWindowBody';


const Content = () => {
  const data = MovieDataMock;

  const [open, setOpen] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState({});

  const handleOpen = (item) => {
    setSelectedMovie(item)
    setOpen(true);
  };  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className="content-wrapper">
      {data && data.map((item, index) => (
        <Box key={index} width={210} margin={10} my={5}>
            <EditIcon onClick={() => handleOpen(item)} />
            <DeleteIcon onClick={handleOpen} />
            <img style={{ width: 302, height: 378 }} alt={item.title} src={item.src} />
            <Box pr={2} style={{color: "lightgrey"}}>
              <Typography gutterBottom variant="body2">
                {item.title}
              </Typography>
              <Typography display="block" variant="caption">
                {item.genre}
              </Typography>
              <Typography variant="caption">
                {`• ${item.createdAt}`}
              </Typography>
            </Box>
        </Box>
      ))}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            {ModalWindowBody(selectedMovie)}
        </Modal>
    </Grid>
  );
}

Content.propTypes = {
  loading: PropTypes.bool,
};

export default Content;
