import styled from 'styled-components/native';

import {statusbarHeight} from '../../utils/Common';
import {Colors} from '../../constants/Colors';
import {TextMedium, TextRegular, TextBold} from '../../component/Text';

export const Container = styled.View`
  flex: 1;
  padding-top: ${statusbarHeight + 20}px;
  background-color: ${Colors.bgColor};
`;

export const ColumnBox = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const RoundRowBox = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  padding-horizontal: 40px;
  justify-content: space-between;
`;

export const TopBox = styled.View`
  align-items: center;
  flex: 1;
  background-color: ${Colors.bgColor};
`;

export const ImgProfile = styled.Image`
  height: 200px;
  width: 200px;
  margin-top: 20px;
  border-radius: 100px;
`;

export const TxtName = styled(TextMedium)`
  font-size: 22px;
  margin-vertical: 10px;
`;

export const TxtLabel = styled(TextMedium)`
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
  color: ${Colors.grey500};
`;

export const BtnLearnMore = styled.TouchableOpacity`
  margin-top: 15px;
  background-color: ${Colors.white};
  padding-horizontal: 30px;
  padding-vertical: 10px;
  border-radius: 20px;
  elevation: 2;
`;

export const TxtLearnMore = styled(TextMedium)`
  color: ${Colors.grey800};
  font-size: 16px;
  line-height: 18px;
`;

export const BottomBox = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 20px 20px;
  margin-horizontal: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  background-color: ${Colors.grey250};
`;

export const TxtTitle = styled(TextBold)`
  color: ${Colors.grey800};
  font-size: 20px;
  line-height: 22px;
  margin-top: 10px;
`;

export const TxtContent = styled(TextRegular)`
  color: ${Colors.grey800};
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  margin-top: 10px;
`;
