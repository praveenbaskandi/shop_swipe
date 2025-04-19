import styled from 'styled-components/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Colors} from '../../constants/Colors';

export const Wrapper = styled(SafeAreaProvider)`
  flex: 1;
  background-color: ${({transparent}) =>
    transparent ? 'transparent' : Colors.bgColor};
`;

export const LoadingView = styled.View`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
  background-color: ${Colors.white};
`;
