import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCurrentMovie, addToHistory } from '../store/movieSlice';

const TestRedux: React.FC = () => {
  const dispatch = useDispatch();
  const currentMovie = useSelector((state: RootState) => state.movie.currentMovie);

  const testMovie = {
    id: 1,
    title: 'Test Movie',
    overview: 'This is a test movie.',
    release_date: '2024-01-01',
    poster_path: '/test.jpg',
  };

  const handleSetMovie = () => {
    dispatch(setCurrentMovie(testMovie));
    dispatch(addToHistory(testMovie));
  };

  return (
    <div>
      <button onClick={handleSetMovie}>Set Test Movie</button>
      {currentMovie && (
        <div>
          <h3>{currentMovie.title}</h3>
          <p>{currentMovie.overview}</p>
          <p>{currentMovie.release_date}</p>
        </div>
      )}
    </div>
  );
};

export default TestRedux;
