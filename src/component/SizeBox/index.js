import React from 'react';

import {Texts} from '../../constants/Strings';
import {Container, Title, BoxSize, RowBox, TxtSize} from './styled';

const SizeBox = ({
  onPressItem = () => {},
  sizeArray = [],
  selectedItem = 0,
}) => {
  return (
    <Container>
      <Title>{Texts.selectSize}</Title>
      <RowBox>
        {sizeArray.map((item, index) => (
          <BoxSize
            key={index}
            onPress={() => onPressItem(item)}
            select={selectedItem === item}>
            <TxtSize select={selectedItem === item}>{item}</TxtSize>
          </BoxSize>
        ))}
      </RowBox>
    </Container>
  );
};

export default SizeBox;
