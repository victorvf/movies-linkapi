import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Container } from './styles';

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <FaSearch size={20} />

      <input
        type="text"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;
