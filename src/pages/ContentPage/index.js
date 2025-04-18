import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useRoute, useNavigation} from '@react-navigation/native';

import {ImageData} from '../../assets/ImageConstants';
import SizeBox from '../../component/SizeBox';
import Button from '../../component/Button';
import {Texts} from '../../constants/Strings';
import {deviceWidth} from '../../utils/Common';
import {
  Container,
  ScrollBox,
  SubTitle,
  ImageBox,
  BottomBox,
  Title,
  ImageProduct,
  ItemClick,
  RowBox,
  ItemClose,
  DiscountBox,
  DiscountTxt,
  ItemIcon,
  TxtPrice,
  ItemReturn,
  ItemReturnDate,
  ItemDeliver,
  ItemDeliverTime,
  TxtOriginalPrice,
} from './styled';

const ContentPage = () => {
  const navigation = useNavigation();
  const [size, setSize] = useState('');
  const {
    params: {name, image, brand, price, originalPrice, discountPercentage},
  } = useRoute();

  return (
    <Container>
      <ScrollBox>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor="transparent"
        />
        <ItemClick onPress={() => navigation.goBack()}>
          <ItemClose source={ImageData.ImgClose} />
        </ItemClick>
        <ImageBox height={deviceWidth}>
          <ImageProduct
            height={deviceWidth}
            source={{
              uri: image,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </ImageBox>
        <BottomBox>
          <Title>{name}</Title>
          <SubTitle>{brand}</SubTitle>
          <RowBox>
            <TxtPrice>{`₹${price}`}</TxtPrice>
            <TxtOriginalPrice>{`₹${originalPrice}`}</TxtOriginalPrice>
            <DiscountBox>
              <DiscountTxt>{`${discountPercentage}${Texts.percentOff}`}</DiscountTxt>
            </DiscountBox>
          </RowBox>
          <SizeBox
            sizeArray={['S', 'M', 'L', 'XL', 'XXL']}
            onPressItem={setSize}
            selectedItem={size}
          />
          <RowBox mt={10}>
            <ItemIcon source={ImageData.ImgReturn} />
            <ItemReturnDate ml={5}>{Texts.days}</ItemReturnDate>
            <ItemReturn ml={5}>{Texts.returnAvailable}</ItemReturn>
          </RowBox>
          <RowBox mt={10}>
            <ItemDeliver>{Texts.deliveryBy}</ItemDeliver>
            <ItemDeliverTime ml={5}>{Texts.tomorrow}</ItemDeliverTime>
          </RowBox>
        </BottomBox>
      </ScrollBox>
      <Button
        text={Texts.buy}
        select={size}
        onPress={() => navigation.goBack()}
      />
    </Container>
  );
};

export default ContentPage;
