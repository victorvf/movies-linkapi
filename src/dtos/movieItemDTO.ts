interface GenresItem {
  name: string;
}

interface ActorsItem {
  name: string;
}

export default interface MovieItemDTO {
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
