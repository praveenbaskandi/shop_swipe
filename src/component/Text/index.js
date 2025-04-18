import styled from 'styled-components/native';

import {IS_ANDROID} from '../../utils/Common';

const StyledText = styled.Text.attrs(({testID}) => ({
  accessibilityLabel: testID,
  accessible: !!testID,
  allowFontScaling: false,
}))`
  font-family: '${IS_ANDROID ? 'Figtree-Regular' : 'Figtree'}';
`;

export const TextBlack = styled(StyledText)`
  ${IS_ANDROID ? 'font-family: Figtree-Black;' : 'font-weight: 900;'}
  font-size: 18px;
  line-height: 21px;
`;

export const TextExtraBold = styled(StyledText)`
  font-size: 18px;
  line-height: 21px;
  ${IS_ANDROID ? 'font-family: Figtree-ExtraBold;' : 'font-weight: 800;'}
`;

export const TextBold = styled(StyledText)`
  font-size: 18px;
  line-height: 21px;
  ${IS_ANDROID ? 'font-family: Figtree-Bold;' : 'font-weight: 700;'}
`;

export const TextSemiBold = styled(StyledText)`
  font-size: 18px;
  line-height: 21px;
  ${IS_ANDROID ? 'font-family: Figtree-SemiBold;' : 'font-weight: 600;'}
`;

export const TextMedium = styled(StyledText)`
  font-size: 18px;
  line-height: 21px;
  ${IS_ANDROID ? 'font-family: Figtree-Medium;' : 'font-weight: 500;'}
`;

export const TextRegular = styled(StyledText)`
  font-size: 18px;
  line-height: 21px;
  ${IS_ANDROID ? 'font-family: Figtree-Regular;' : 'font-weight: 400;'}
`;

export const TextLight = styled(StyledText)`
  font-size: 18px;
  line-height: 21px;
  ${IS_ANDROID ? 'font-family: Figtree-Light;' : 'font-weight: 300;'}
`;
