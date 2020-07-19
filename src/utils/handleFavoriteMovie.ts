import api from '../services/api';

import MovieItemDTO from '../dtos/movieItemDTO';

const handleFavoriteMovie = async (
  movie: MovieItemDTO,
): Promise<MovieItemDTO> => {
  if (movie.favorite) {
    const [movieUpdated] = await Promise.all([
      api.put<MovieItemDTO>(`movies/${movie.id}`, {
        ...movie,
        favorite: false,
      }),
      api.delete(`/favorites/${movie.id}`),
    ]);

    return movieUpdated.data;
  }

  const [movieUpdated] = await Promise.all([
    api.put(`movies/${movie.id}`, {
      ...movie,
      favorite: true,
    }),
    api.post('/favorites', {
      ...movie,
      favorite: true,
    }),
  ]);

  return movieUpdated.data;
};

export default handleFavoriteMovie;
