import styled from 'styled-components/native';

import {statusbarHeightMobile} from '../../utils/Common';
import {Colors} from '../../constants/Colors';
import {TextMedium, TextBold, TextSemiBold} from '../../component/Text';

export const Container = styled.View`
  background: ${Colors.bgColor};
  flex: 1;
  padding-top: ${statusbarHeightMobile + 10}px;
  justify-content: center;
  align-items: center;
`;

export const ImageUI = styled.ImageBackground`
  height: 100%;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

export const CardUI = styled.TouchableHighlight`
  width: ${({width = 0}) => width}px;
  border-radius: 20px;
  background-color: ${Colors.brandGreen};
  shadow-color: ${Colors.black};
  shadow-opacity: 0.15;
  shadow-radius: 10px;
  elevation: 5;
  flex: 1;
  margin-bottom: 200px;
  align-items: center;
  justify-content: center;
  shadow-offset: 0px 4px;
`;

export const CardContent = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-horizontal: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: 'rgba(0, 0, 0, 0.4)';
`;

export const Name = styled(TextBold)`
  color: ${Colors.white};
  font-size: 25px;
  line-height: 27px;
`;

export const BrandName = styled(TextMedium)`
  color: ${Colors.white};
  font-size: 18px;
  line-height: 20px;
`;

export const DiscountImg = styled.ImageBackground`
  height: 40px;
  width: 40px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
`;

export const DiscountPercent = styled(TextSemiBold)`
  color: ${Colors.white};
  font-size: 12px;
  line-height: 14px;
`;

export const OriginalPrice = styled(TextSemiBold)`
  color: ${Colors.white};
  font-size: 18px;
  text-decoration-line: line-through;
  line-height: 20px;
  margin-left: 10px;
`;

export const RowBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextKnowMore = styled(TextSemiBold)`
  color: ${Colors.white};
  font-size: 16px;
  line-height: 18px;
  align-self: center;
`;

export const BottomBtnBox = styled.View`
  margin-top: 20px;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
  position: absolute;
  bottom: 40px;
`;
