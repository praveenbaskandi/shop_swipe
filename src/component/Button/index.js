import React from 'react';

import {Container, Title} from './styled';

const Button = ({onPress, text, select}) => {
  return (
    <Container onPress={onPress} select={select}>
      <Title select={select}>{text}</Title>
    </Container>
  );
};

export default Button;
