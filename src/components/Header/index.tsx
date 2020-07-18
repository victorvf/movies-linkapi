import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';

import LogoLinkApi from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  const handleNavigateToProfile = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <img src={LogoLinkApi} alt="LinkApi movies" />

      <button type="button" onClick={handleNavigateToProfile}>
        <FaUserCircle size={45} color="#A0AFA0" />
      </button>
    </Container>
  );
};

export default Header;
