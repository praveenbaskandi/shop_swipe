import styled from 'styled-components/native';

import {Colors} from '../../constants/Colors';

export const Container = styled.TouchableOpacity`
  background-color: ${Colors.white};
  width: ${({width = 0}) => width}px;
  height: ${({height = 0}) => height}px;
  border-radius: ${({radius = 0}) => radius}px;
  justify-content: center;
  align-items: center;
  shadow-color: ${Colors.black};
  shadow-opacity: 0.3;
  shadow-radius: 4.65px;
  elevation: 8;
  shadow-offset: 0px 2px;
`;

export const ImageView = styled.Image`
  width: 25px;
  height: 25px;
`;
