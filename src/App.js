import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

import ErrorBoundary from './ErrorBoundary';

import './App.scss'

const App = () => {
    const [movieDetails, setMovieDetails] = React.useState({});
    const [detailsOpen2, setDetailsOpen] = React.useState(false);
    const openMovieDetails = (item) => {
        console.log(item)
        setMovieDetails(item)
        setDetailsOpen(true)
        console.log(detailsOpen2)
    }
    return (
        <div>
            <Header detailsOpen={detailsOpen2} />
            <Content openDetails={openMovieDetails}/>
            <Footer />
        </div>
    )
};

export default App;
