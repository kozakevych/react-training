import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    return (
        <div>
          <AppBar position="static" style={{ textAlign: 'center', backgroundColor: 'grey', height: '60px'}}>
              <Typography variant="h6" style={{padding: '14px', color: 'red'}}>
                <b>netflix</b>roulette
              </Typography>
          </AppBar>
        </div>
    )
};

export default Footer;
