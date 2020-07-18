import React, { useMemo, useCallback } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { Container, ImageContent } from './styles';

interface MovieCardProps {
  image_url: string;
  title: string;
  release_year: number;
  favorite: boolean;
  handleFavoriteMovie(): Promise<void>;
  handleNavigateToMovieDetail(): void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  image_url,
  title,
  release_year,
  favorite,
  handleFavoriteMovie,
  handleNavigateToMovieDetail,
}) => {
  const handleClickFavoriteMovie = useCallback(async () => {
    handleFavoriteMovie();
  }, [handleFavoriteMovie]);

  const handleClickNavigateToMovieDetail = useCallback(() => {
    handleNavigateToMovieDetail();
  }, [handleNavigateToMovieDetail]);

  const favoriteIcon = useMemo(() => {
    if (favorite) {
      return <FaHeart />;
    }
    return <FaRegHeart />;
  }, [favorite]);

  return (
    <Container>
      <ImageContent>
        <img src={image_url} alt={title} />
      </ImageContent>

      {favorite && <FaHeart />}

      <div className="hover-content">
        <button type="button" onClick={handleClickFavoriteMovie}>
          {favoriteIcon}
        </button>
        <div>
          <button type="button" onClick={handleClickNavigateToMovieDetail}>
            {title}
          </button>
          <span>{release_year}</span>
        </div>
      </div>
    </Container>
  );
};

export default MovieCard;
