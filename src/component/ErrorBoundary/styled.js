import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';

import {TextMedium} from '../Text';
import {Colors} from '../../constants/Colors';

export const Wrapper = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${Colors.black};
`;

export const ErrorTitle = styled(TextMedium)`
  color: ${Colors.white};
  margin-bottom: 10px;
  margin-horizontal: 20px;
`;
