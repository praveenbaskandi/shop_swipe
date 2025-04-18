import styled from 'styled-components/native';

import {TextSemiBold} from '../component/Text';
import {Colors} from '../constants/Colors';

export const BottomText = styled(TextSemiBold)`
  color: ${({selected}) => (selected ? Colors.brandOrange : Colors.white30)};
  font-size: 12px;
  line-height: 13px;
`;

export const BottomButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 2px;
`;
