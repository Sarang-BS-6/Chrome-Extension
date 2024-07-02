import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { RootState } from './store';
import { setCurrentMovie, addToHistory } from './store/movieSlice';
import { getQueryFromStorage, setQueryInStorage, clearQueryInStorage } from './chromeUtils';
import './App.css';

const TMDB_API_KEY = '0c305d00fc6b90d071218ade69513272'; 

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const dispatch = useDispatch();
  const currentMovie = useSelector((state: RootState) => state.movie.currentMovie);
  const history = useSelector((state: RootState) => state.movie.history);

  useEffect(() => {
    if (typeof chrome !== 'undefined') {
      getQueryFromStorage((storedQuery) => {
        if (storedQuery) {
          fetchMovie(storedQuery);
        }
      });
    } else {
      console.warn('Chrome API is not available.');
    }
  }, []);

  const fetchMovie = (query: string) => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`)
      .then((response) => {
        if (response.data.results.length > 0) {
          const movie = response.data.results[0];
          dispatch(setCurrentMovie(movie));
          dispatch(addToHistory(movie));
          clearQueryInStorage(); // Clear the query after fetching
        } else {
          console.warn('No movies found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  };

  const handleSearch = () => {
    if (query.trim()) {
      fetchMovie(query);
      setQuery(''); // Clear the input field after search
    }
  };

  const handleHistoryItemClick = (movieId: number) => {
    const movie = history.find(item => item.id === movieId);
    if (movie) {
      dispatch(setCurrentMovie(movie));
    }
  };

  return (
    <div className="App">
      <div className="search-section">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {currentMovie && (
        <div className="movie-info">
          <h2>{currentMovie.title}</h2>
          <p className="overview">{currentMovie.overview}</p>
          <p><strong>Release Date:</strong> {currentMovie.release_date}</p>
          {currentMovie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${currentMovie.poster_path}`}
              alt={currentMovie.title}
              className="movie-poster"
            />
          )}
        </div>
      )}
      <h3>Search History</h3>
      <ul className="history-list">
        {history.map((item) => (
          <li key={item.id} onClick={() => handleHistoryItemClick(item.id)} className="history-item">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
