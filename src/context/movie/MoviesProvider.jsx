import { useReducer } from 'react';
import MoviesContext from './MoviesContext';

const MOVIES_INITIAL_STATE = {
  movies: [],
};

const MoviesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, MOVIES_INITIAL_STATE);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
