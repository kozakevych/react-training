import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import MainDataProvider from './context/MainData';

import ErrorBoundary from './ErrorBoundary';

import './App.scss'

const App = () => {
    const [movieDetails, setMovieDetails] = React.useState({});
    const [detailsOpen2, setDetailsOpen] = React.useState(false);
    const openMovieDetails = (item) => {
        setMovieDetails(item)
        setDetailsOpen(true)
    }
    return (
        <MainDataProvider>
            <ErrorBoundary>
                <Header detailsOpen={detailsOpen2} />
                <Content openDetails={openMovieDetails}/>
                <Footer />
            </ErrorBoundary>
        </MainDataProvider>
    )
};

export default App;
