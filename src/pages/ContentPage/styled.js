import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import {statusbarHeight} from '../../utils/Common';
import {
  TextMedium,
  TextRegular,
  TextBold,
  TextLight,
  TextSemiBold,
  TextExtraBold,
} from '../../component/Text';
import {Colors} from '../../constants/Colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.bgColor};
`;

export const ScrollBox = styled.ScrollView`
  flex: 1;
  width: 100%;
  background-color: ${Colors.bgColor};
`;

export const ItemClick = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  border-radius: 25px;
  background-color: ${Colors.grey250};
  top: ${statusbarHeight + 20}px;
  z-index: 1;
`;

export const ItemClose = styled.Image`
  height: 20px;
  width: 20px;
`;

export const Title = styled(TextBold)`
  color: ${Colors.grey700};
  font-size: 20px;
  line-height: 22px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const SubTitle = styled(TextRegular)`
  color: ${Colors.grey1000};
  font-size: 18px;
  line-height: 20px;
  margin-top: 5px;
`;

export const TxtPrice = styled(TextExtraBold)`
  color: ${Colors.grey1000};
  font-size: 18px;
  line-height: 20px;
`;

export const TxtOriginalPrice = styled(TextRegular)`
  color: ${Colors.grey1000};
  font-size: 16px;
  line-height: 18px;
  margin-left: 10px;
  text-decoration-line: line-through;
`;

export const BottomBox = styled.View`
  padding: 15px;
  width: 100%;
`;

export const RowBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ItemIcon = styled.Image`
  height: 20px;
  width: 20px;
`;

export const ItemReturnDate = styled(TextSemiBold)`
  color: ${Colors.grey1000};
  font-size: 14px;
  line-height: 15px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ItemReturn = styled(TextLight)`
  color: ${Colors.grey700};
  font-size: 14px;
  line-height: 15px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ItemDeliver = styled(TextLight)`
  color: ${Colors.grey700};
  font-size: 16px;
  line-height: 18px;
`;

export const ItemDeliverTime = styled(TextBold)`
  color: ${Colors.brandGreen};
  margin-left: ${({ml = 0}) => ml}px;
  font-size: 18px;
  line-height: 20px;
`;

export const BtnBox = styled.View`
  position: absolute;
  right: 15px;
  z-index: 1;
  top: ${statusbarHeight + 25}px;
`;

export const ImageView = styled.Image`
  width: 100%;
  height: ${({height = 0}) => height}px;
`;

export const ImageBox = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
  height: ${({height = 0}) => height}px;
`;

export const ImageProduct = styled(FastImage)`
  width: 100%;
  height: ${({height = 0}) => height}px;
`;

export const ColumnBox = styled.View`
  margin-horizontal: ${({mh = 0}) => mh}px;
  margin-top: ${({mt = 0}) => mt}px;
  padding-top: ${({pt = 0}) => pt}px;
`;

export const ProductBox = styled.View`
  border-bottom-width: 1px;
  padding-vertical: 15px;
  border-bottom-color: ${Colors.grey700};
`;

export const ChargingStatus = styled(TextMedium)`
  color: ${Colors.white};
  text-transform: capitalize;
  font-size: 14px;
  line-height: 19px;
  margin-top: ${({mt = 0}) => mt}px;
  margin-left: ${({ml = 0}) => ml}px;
`;

export const ProductTitle = styled(TextMedium)`
  color: ${Colors.white};
  font-size: 14px;
  line-height: 19px;
  margin-top: ${({mt = 0}) => mt}px;
  margin-left: ${({ml = 0}) => ml}px;
`;

export const ProductContent = styled(TextMedium)`
  color: ${Colors.grey500};
  font-size: 14px;
  line-height: 19px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const PercentBox = styled.View`
  margin-top: 5px;
  border-radius: 20px;
  width: 100%;
  flex-direction: row;
  padding: 50px 17px 17px 17px;
  background-color: ${Colors.grey800};
`;

export const PercentTxt = styled(TextMedium)`
  color: ${Colors.white};
  font-size: 28px;
  line-height: 32px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ContentBox = styled.View`
  flex: 1;
  margin-left: ${({ml = 0}) => ml}%;
`;

export const EmptyBox = styled.View`
  height: 50px;
  width: 100%;
  background-color: ${Colors.bgColor};
`;

export const ToggleBox = styled.View`
  width: 100%;
  margin-top: 60px;
`;

export const ButtonBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  padding-horizontal: 15px;
`;

export const DateText = styled(TextMedium)`
  color: ${Colors.grey500};
  font-size: 14px;
  line-height: 19px;
`;

export const DiscountBox = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 3px;
  background-color: ${Colors.discountColor};
  margin-left: 5px;
`;

export const DiscountTxt = styled(TextSemiBold)`
  color: ${Colors.discountTxt};
  font-size: 13px;
  line-height: 14px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-top: ${({mt = 0}) => mt}px;
`;
