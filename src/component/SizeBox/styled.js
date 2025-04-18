import styled from 'styled-components/native';

import {Colors} from '../../constants/Colors';
import {TextMedium} from '../Text';

export const Container = styled.View`
  background-color: ${Colors.bgColor};
  margin-top: 10px;
`;

export const BoxSize = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${Colors.grey500};
  background-color: ${({select}) =>
    select ? Colors.grey1000 : Colors.bgColor};
`;

export const Title = styled(TextMedium)`
  color: ${Colors.grey1000};
  font-size: 14px;
  line-height: 19px;
`;

export const RowBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  justify-content: space-between;
`;

export const TxtSize = styled(TextMedium)`
  color: ${({select}) => (select ? Colors.white : Colors.grey800)};
  font-size: 14px;
  line-height: 19px;
`;
