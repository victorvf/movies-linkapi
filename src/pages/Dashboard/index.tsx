import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import LogoNoMovie from '../../assets/warning-nomovie.svg';

import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import MovieCard from '../../components/MovieCard';

import api from '../../services/api';

import {
  Container,
  SearchContainer,
  MovieError,
  MovieContainer,
} from './styles';

interface GenresItem {
  name: string;
}

interface ActorsItem {
  name: string;
}

interface MovieItem {
  id: number;
  title: string;
  release_year: number;
  rating: string;
  duration: string;
  director: string;
  favorite: boolean;
  genres: GenresItem[];
  actors: ActorsItem[];
  sinopse: string;
  image_url: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState<MovieItem[]>([]);

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
    (movie: MovieItem) => {
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

  const handleFavoriteMovie = useCallback(
    async (id: number) => {
      const movieSelected = movies.find((movie) => movie.id === id);

      if (movieSelected) {
        if (movieSelected.favorite) {
          const [movieUpdated, _] = await Promise.all([
            api.put<MovieItem>(`movies/${movieSelected.id}`, {
              ...movieSelected,
              favorite: false,
            }),
            api.delete(`/favorites/${movieSelected.id}`),
          ]);

          handleUpdateMovies(movieUpdated.data);
        } else {
          const [movieUpdated, _] = await Promise.all([
            api.put(`movies/${movieSelected.id}`, {
              ...movieSelected,
              favorite: true,
            }),
            api.post('/favorites', {
              ...movieSelected,
              favorite: true,
            }),
          ]);

          handleUpdateMovies(movieUpdated.data);
        }
      }
    },
    [movies, handleUpdateMovies],
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
              handleFavoriteMovie={() => handleFavoriteMovie(movie.id)}
            />
          ))}
        </MovieContainer>
      )}
    </Container>
  );
};

export default Dashboard;
