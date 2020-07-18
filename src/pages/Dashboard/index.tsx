import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import LogoNoMovie from '../../assets/warning-nomovie.svg';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import MovieCard from '../../components/MovieCard';

import api from '../../services/api';
import handleFavoriteMovie from '../../utils/handleFavoriteMovie';

import MovieItemDTO from '../../dtos/movieItemDTO';

import {
  Container,
  SearchContainer,
  MovieError,
  MovieContainer,
} from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState<MovieItemDTO[]>([]);

  useEffect(() => {
    async function loadMovies(): Promise<void> {
      const response = await api.get('/movies', {
        params: {
          title_like: searchValue,
        },
      });

      setMovies(response.data);
    }

    loadMovies();
  }, [searchValue]);

  const handleSearchValue = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const handleNavigateToFavoriteMovies = useCallback(() => {
    history.push('/favorite-movies');
  }, [history]);

  const handleUpdateMovies = useCallback(
    (movie: MovieItemDTO) => {
      const moviesUpdated = movies.map((movieCurrent) => {
        if (movieCurrent.id === movie.id) {
          return {
            ...movieCurrent,
            favorite: movie.favorite,
          };
        }

        return movieCurrent;
      });

      setMovies(moviesUpdated);
    },
    [movies],
  );

  const handleClickFavoriteMovie = useCallback(
    async (id: number) => {
      try {
        const movieSelected = movies.find((movie) => movie.id === id);

        if (movieSelected) {
          const movieUpdated = await handleFavoriteMovie(movieSelected);

          handleUpdateMovies(movieUpdated);
        }
      } catch (err) {
        console.log(err);
      }
    },
    [movies, handleUpdateMovies],
  );

  const handleNavigateToMovieDetail = useCallback(
    (id: number) => {
      history.push(`/movie-detail/${id}`);
    },
    [history],
  );

  return (
    <Container>
      <Header />

      <SearchContainer>
        <SearchInput
          value={searchValue}
          onChange={handleSearchValue}
          placeholder="Search movies, actors or genre"
        />

        <button type="button" onClick={handleNavigateToFavoriteMovies}>
          Favorites
        </button>
      </SearchContainer>

      {movies.length === 0 ? (
        <MovieError>
          <div>
            <img src={LogoNoMovie} alt="No Movie Logo" />
            <strong>No movies found!</strong>
            <span>Reset your filters to find something</span>
          </div>
        </MovieError>
      ) : (
        <MovieContainer>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              image_url={movie.image_url}
              title={movie.title}
              release_year={movie.release_year}
              favorite={movie.favorite}
              handleFavoriteMovie={() => handleClickFavoriteMovie(movie.id)}
              handleNavigateToMovieDetail={() =>
                handleNavigateToMovieDetail(movie.id)}
            />
          ))}
        </MovieContainer>
      )}
    </Container>
  );
};

export default Dashboard;
