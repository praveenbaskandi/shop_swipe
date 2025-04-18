import styled from 'styled-components/native';

import {Colors} from '../../constants/Colors';
import {TextMedium} from '../Text';

export const Container = styled.TouchableOpacity`
  background-color: ${({select}) =>
    select ? Colors.brandColor : Colors.brandColorDull};
  height: 45px;
  margin: 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ImageView = styled.Image`
  width: 25px;
  height: 25px;
`;

export const Title = styled(TextMedium)`
  color: ${Colors.white};
  font-size: 14px;
  line-height: 19px;
`;
