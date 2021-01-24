import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import {dataContext} from '../context/MainData';
import useModalControls from '../hooks/useModalControls';

import './Content.scss'

import MovieDataMock from '../movieDataMock';

import ModalWindowBody from './ModalWindowBody';


const Content = (props) => {
  const [editedMovie, setEditedMovie] = React.useState({});
  const { films } = useContext(dataContext);
  //const data = MovieDataMock;
  const { open, handleOpen, handleClose } = useModalControls({
    onModalOpen: setEditedMovie
  })

  const resetMovieValue = () => {
    setEditedMovie({})
  }

  const onMovieClick = (item) => {
    props.openDetails(item);
  }

  return (
    <Grid container className="content-wrapper">
      {films && films.map((item, index) => (
          <Box key={index} width={210} margin={10} my={5} onClick={() => onMovieClick(item)}>
            <EditIcon onClick={() => handleOpen(item)}/>
            <DeleteIcon onClick={handleOpen}/>
            <img style={{width: 302, height: 378}} alt={item.title} src={item.src}/>
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
            {ModalWindowBody(editedMovie, resetMovieValue, resetMovieValue)}
        </Modal>
    </Grid>
  );
}

Content.propTypes = {
  loading: PropTypes.bool,
};

export default Content;
