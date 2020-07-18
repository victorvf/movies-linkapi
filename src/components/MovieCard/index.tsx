import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { Container, ImageContent } from './styles';

interface MovieCardProps {
  image_url: string;
  title: string;
  release_year: number;
  favorite: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({
  image_url,
  title,
  release_year,
  favorite,
}) => {
  return (
    <Container>
      <ImageContent>
        <img src={image_url} alt={title} />
      </ImageContent>

      <button type="button">{favorite ? <FaHeart /> : <FaRegHeart />}</button>

      <div className="hover-content">
        <strong>{title}</strong>
        <span>{release_year}</span>
      </div>
    </Container>
  );
};

export default MovieCard;
