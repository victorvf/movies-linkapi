import api from '../services/api';

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

const handleFavoriteMovie = async (movie: MovieItem): Promise<MovieItem> => {
  if (movie.favorite) {
    const [movieUpdated, _] = await Promise.all([
      api.put<MovieItem>(`movies/${movie.id}`, {
        ...movie,
        favorite: false,
      }),
      api.delete(`/favorites/${movie.id}`),
    ]);

    return movieUpdated.data;
  }

  const [movieUpdated, _] = await Promise.all([
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
