import React from 'react';

import {Container, ImageView} from './styled';

const RoundButton = ({onPress, img, height = 50, width = 50, radius = 50}) => {
  return (
    <Container
      onPress={onPress}
      radius={radius}
      activeOpacity={0.7}
      height={height}
      width={width}>
      <ImageView source={img} />
    </Container>
  );
};

export default RoundButton;
