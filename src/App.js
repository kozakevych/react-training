import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

import ErrorBoundary from './ErrorBoundary';

import './App.scss'

const App = () => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
};

export default App;
