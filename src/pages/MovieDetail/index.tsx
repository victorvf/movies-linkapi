import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaRegClock, FaRegCalendar, FaHeart } from 'react-icons/fa';
import { useParams, useHistory } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';
import handleFavoriteMovie from '../../utils/handleFavoriteMovie';

import MovieItemDTO from '../../dtos/movieItemDTO';

import {
  Container,
  Content,
  BackButton,
  DetailMovie,
  Time,
  Categories,
  FavoriteButton,
  AddToFavoriteButton,
} from './styles';

interface RouteParams {
  id: string;
}

interface GenresItem {
  name: string;
}

interface ActorsItem {
  name: string;
}

const MovieDetail: React.FC = () => {
  const params = useParams<RouteParams>();
  const id_movie = Number(params.id);

  const history = useHistory();

  const [movie, setMovie] = useState<MovieItemDTO>({} as MovieItemDTO);
  const [genresMovie, setGenresMovie] = useState<GenresItem[]>([]);
  const [actorsMovie, setActorsMovie] = useState<ActorsItem[]>([]);

  useEffect(() => {
    async function loadMovie(): Promise<void> {
      const response = await api.get<MovieItemDTO>(`/movies/${id_movie}`);

      setMovie(response.data);
      setGenresMovie(response.data.genres);
      setActorsMovie(response.data.actors);
    }

    loadMovie();
  }, [id_movie]);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const handleClickFavoriteMovie = useCallback(async () => {
    try {
      const movieUpdated = await handleFavoriteMovie(movie);

      setMovie(movieUpdated);
    } catch (err) {
      console.log(err);
    }
  }, [movie]);

  const favoriteButton = useMemo(() => {
    if (movie.favorite) {
      return (
        <FavoriteButton type="button" onClick={handleClickFavoriteMovie}>
          <FaHeart />
          Favorited
        </FavoriteButton>
      );
    }

    return (
      <AddToFavoriteButton type="button" onClick={handleClickFavoriteMovie}>
        <div>
          <FaHeart />
        </div>
        Add to favorites
      </AddToFavoriteButton>
    );
  }, [movie, handleClickFavoriteMovie]);

  return (
    <Container>
      <Header />

      <Content>
        <BackButton type="button" onClick={handleGoBack}>
          <FiArrowLeft size={17} color="#A3B2A3" />
          Return
        </BackButton>

        <DetailMovie>
          <div>
            <h1>{movie.title}</h1>

            <Time>
              <span>
                <FaRegCalendar size={26} color="#637463" />
                {movie.release_year}
              </span>

              <span>
                <FaRegClock size={26} color="#637463" />
                {movie.duration}
              </span>

              <button type="button">R</button>
            </Time>

            {favoriteButton}

            <p>{movie.sinopse}</p>

            <Categories>
              <div>
                <h3>Cast</h3>
                {actorsMovie.map((actor) => (
                  <span>{actor.name}</span>
                ))}
              </div>

              <div>
                <h3>Genre</h3>
                {genresMovie.map((genre) => (
                  <span>{genre.name}</span>
                ))}
              </div>

              <div>
                <h3>Director</h3>
                <span>{movie.director}</span>
              </div>
            </Categories>
          </div>

          <img src={movie.image_url} alt={movie.title} />
        </DetailMovie>
      </Content>
    </Container>
  );
};

export default MovieDetail;
