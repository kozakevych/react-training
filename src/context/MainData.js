import React, {createContext, useState} from 'react';
import MovieDataMock from '../movieDataMock';

export const dataContext = createContext({
    searchFilm: () => {},
    films: [],
})
const Provider = dataContext.Provider

const MainDataProvider = ({ children }) => {
    const [films, setFilms] = useState(MovieDataMock);

    const searchFilm = (searchTerm) => {
        setFilms([]);
    }

    return (
        <Provider value={{ films, searchFilm }}>
            {children}
        </Provider>
    )
}

export default MainDataProvider;
