import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import LogoLinkApi from '../../assets/logo.svg';

import Input from '../../components/Input';

import { Container, Content, FormContainer, ButtonsContainer } from './styles';

interface SignUpFormData {
  name: string;
  age: number;
  favorite_movie: string;
  favorite_genre: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: SignUpFormData) => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  return (
    <Container>
      <header>
        <img src={LogoLinkApi} alt="LinkApi movies" />
      </header>

      <Content>
        <p>
          It's time to create your profile and customize your experience in{' '}
          <strong>LinkApi Movies</strong>!
        </p>

        <FormContainer>
          <Form ref={formRef} onSubmit={handleSubmit} id="form_create_profile">
            <span>Name</span>
            <Input
              containerStyle={{ marginBottom: 25 }}
              name="name"
              type="text"
              placeholder="John Wick"
            />

            <span>Age</span>
            <Input
              containerStyle={{ marginBottom: 25 }}
              name="age"
              type="number"
              placeholder="24"
            />

            <span>Favorite movie</span>
            <Input
              containerStyle={{ marginBottom: 25 }}
              name="favorite_movie"
              type="text"
              placeholder="Sharknado 2"
            />

            <span>Favorite genre</span>
            <Input name="favorite_genre" type="text" placeholder="Horror" />
          </Form>

          <ButtonsContainer>
            <button type="button" className="cancel_button">
              Cancel
            </button>

            <button
              type="submit"
              className="submit_button"
              form="form_create_profile"
              value="submit"
            >
              Save profile
            </button>
          </ButtonsContainer>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default Profile;
