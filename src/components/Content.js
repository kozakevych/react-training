import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';

const bodyStyles = {
    background: 'white',
    height: '500px',
    width: '400px'
}

const body = (
    <div style={bodyStyles}>
    <Typography variant="h4" gutterBottom>
      Edit Movie
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

const data = [
  {
    src:
      'https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r193x272x4 1x, https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r386x544x4 2x',
    title: 'Friends',
    genre: 'Comedy',
    createdAt: '1994-2004',
  },
  {
    src:
      'https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r193x272x4 1x, https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r386x544x4 2x',
    title: 'Friends',
    genre: 'Comedy',
    createdAt: '1994-2004',
  },
  {
    src:
      'https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r193x272x4 1x, https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r386x544x4 2x',
    title: 'Friends',
    genre: 'Comedy',
    createdAt: '1994-2004',
  },
  {
    src:
      'https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r193x272x4 1x, https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r386x544x4 2x',
    title: 'Friends',
    genre: 'Comedy',
    createdAt: '1994-2004',
  },
  {
    src:
      'https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r193x272x4 1x, https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r386x544x4 2x',
    title: 'Friends',
    genre: 'Comedy',
    createdAt: '1994-2004',
  },
  {
    src:
      'https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r193x272x4 1x, https://s3.vcdn.biz/static/f/2345547171/image.jpg/pt/r386x544x4 2x',
    title: 'Friends',
    genre: 'Comedy',
    createdAt: '1994-2004',
  },
];

const Content = ({loading}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container style={{background: '#272727', color: 'lightgrey'}}>
      {data.map((item, index) => (
        <Box key={index} width={210} margin={10} my={5}>
            <EditIcon onClick={handleOpen} />
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
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    </Grid>
  );
}

Content.propTypes = {
  loading: PropTypes.bool,
};

export default Content;
