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

const FavoriteMovies: React.FC = () => {
  const history = useHistory();

  const [searchValue, setSearchValue] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState<MovieItem[]>([]);

  useEffect(() => {
    async function loadFavoritesMovies(): Promise<void> {
      const response = await api.get('/favorites', {
        params: {
          title_like: searchValue,
        },
      });

      setFavoriteMovies(response.data);
    }

    loadFavoritesMovies();
  }, [searchValue]);

  const handleSearchValue = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const handleNavigateToAllMovies = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

  const handleFavoriteMovie = useCallback(
    async (id: number) => {
      const movieSelected = favoriteMovies.find((movie) => movie.id === id);

      if (movieSelected) {
        Promise.all([
          api.put<MovieItem>(`movies/${movieSelected.id}`, {
            ...movieSelected,
            favorite: false,
          }),
          api.delete(`/favorites/${movieSelected.id}`),
        ]).catch((err) => {
          console.log(err);
        });

        const favoriteMoviesUpdated = favoriteMovies.filter(
          (movie) => movie.id !== id,
        );

        setFavoriteMovies(favoriteMoviesUpdated);
      }
    },
    [favoriteMovies],
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

        <button type="button" onClick={handleNavigateToAllMovies}>
          List all
        </button>
      </SearchContainer>

      {favoriteMovies.length === 0 ? (
        <MovieError>
          <div>
            <img src={LogoNoMovie} alt="No Movie Logo" />
            <strong>No movies found!</strong>
            <span>Reset your filters to find something</span>
          </div>
        </MovieError>
      ) : (
        <MovieContainer>
          {favoriteMovies.map((movie) => (
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

export default FavoriteMovies;
