import React from 'react';
import {StatusBar} from 'react-native';

import WrapperScreen from '../../component/WrapperScreen';
import RoundButton from '../../component/RoundButton';
import {Texts} from '../../constants/Strings';
import {ImageData} from '../../assets/ImageConstants';
import {
  Container,
  RoundRowBox,
  BtnLearnMore,
  TxtLearnMore,
  TopBox,
  BottomBox,
  TxtName,
  ImgProfile,
  ColumnBox,
  TxtContent,
  TxtLabel,
  TxtTitle,
} from './styled';

const ProfileScreen = () => {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <TopBox>
        <ImgProfile source={ImageData.ImgMessi} />
        <TxtName>{Texts.name}</TxtName>
        <RoundRowBox>
          <ColumnBox>
            <RoundButton img={ImageData.ImgSetting} />
            <TxtLabel>{Texts.setting}</TxtLabel>
          </ColumnBox>
          <ColumnBox>
            <RoundButton
              height={80}
              width={80}
              radius={80}
              img={ImageData.ImgEdit}
            />
            <TxtLabel>{Texts.edit}</TxtLabel>
          </ColumnBox>
          <ColumnBox>
            <RoundButton img={ImageData.ImgSafe} />
            <TxtLabel>{Texts.safety}</TxtLabel>
          </ColumnBox>
        </RoundRowBox>
      </TopBox>
      <BottomBox>
        <TxtTitle>{Texts.shopPlatinum}</TxtTitle>
        <TxtContent>{Texts.levelUpEvery}</TxtContent>
        <BtnLearnMore>
          <TxtLearnMore>{Texts.learnMore}</TxtLearnMore>
        </BtnLearnMore>
      </BottomBox>
    </Container>
  );
};

export default WrapperScreen(ProfileScreen);
