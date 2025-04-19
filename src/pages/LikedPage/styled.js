import styled from 'styled-components/native';

import {statusbarHeight} from '../../utils/Common';
import {Colors} from '../../constants/Colors';
import {
  TextBold,
  TextMedium,
  TextLight,
  TextSemiBold,
} from '../../component/Text';

export const Container = styled.View`
  padding-top: 10px;
  flex: 1;
  padding-top: ${statusbarHeight + 20}px;
  background-color: ${Colors.bgColor};
`;

export const Title = styled(TextBold)`
  color: ${Colors.grey1000};
  font-size: 25px;
  line-height: 27px;
  margin-horizontal: 20px;
`;

export const LikedList = styled.FlatList`
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const EmptyBox = styled.View`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled(TextMedium)`
  color: ${Colors.grey400};
  font-size: 16px;
  line-height: 20px;
`;

export const RoundRowBox = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  padding-horizontal: 40px;
  justify-content: space-between;
`;

export const TxtLabel = styled(TextMedium)`
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
  color: ${Colors.grey500};
`;

export const ItemContainer = styled.TouchableOpacity`
  height: 200px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  background-color: ${Colors.white};
`;

export const ColumnBox = styled.View`
  flex: 1;
  margin-left: 10px;
  flex-direction: column;
`;

export const RowBox = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ItemImage = styled.Image`
  height: 150px;
  width: 120px;
`;

export const ItemIcon = styled.Image`
  height: 15px;
  width: 15px;
`;

export const ItemBrandName = styled(TextBold)`
  color: ${Colors.grey1000};
  font-size: 14px;
  line-height: 15px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ItemName = styled(TextLight)`
  color: ${Colors.grey1000};
  font-size: 16px;
  line-height: 18px;
  margin-top: 5px;
`;

export const ItemDiscountPrice = styled(TextBold)`
  color: ${Colors.grey1000};
  font-size: 15px;
  line-height: 16px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ItemOriginalPrice = styled(TextLight)`
  color: ${Colors.grey700};
  font-size: 15px;
  text-decoration-line: line-through;
  line-height: 16px;
  margin-left: 5px;
`;

export const ItemReturnDate = styled(TextSemiBold)`
  color: ${Colors.grey1000};
  font-size: 13px;
  line-height: 14px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ItemReturn = styled(TextLight)`
  color: ${Colors.grey700};
  font-size: 13px;
  line-height: 14px;
  margin-left: ${({ml = 0}) => ml}px;
  margin-top: ${({mt = 0}) => mt}px;
`;

export const ItemDeliver = styled(TextLight)`
  color: ${Colors.grey700};
  font-size: 15px;
  line-height: 16px;
`;

export const ItemDeliverTime = styled(TextBold)`
  color: ${Colors.brandGreen};
  margin-left: ${({ml = 0}) => ml}px;
  font-size: 15px;
  line-height: 16px;
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

export const ItemClick = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const ItemClose = styled.Image`
  height: 15px;
  width: 15px;
`;
