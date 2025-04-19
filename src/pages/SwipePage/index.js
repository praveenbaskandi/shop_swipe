import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';

import {requestSaveClothToList} from '../../redux/cart/Actions';
import {deviceHeight, deviceWidth} from '../../utils/Common';
import WrapperScreen from '../../component/WrapperScreen';
import {ScreenName} from '../../constants/ScreenNames';
import RoundButton from '../../component/RoundButton';
import {ImageData} from '../../assets/ImageConstants';
import {cards} from './helper';
import {Texts} from '../../constants/Strings';
import useSelect from './selector';
import {
  Container,
  CardUI,
  Name,
  RowBox,
  CardContent,
  BrandName,
  DiscountImg,
  OriginalPrice,
  TextKnowMore,
  ImageUI,
  EmptyBox,
  EmptyText,
  DiscountPercent,
  BottomBtnBox,
} from './styled';

const SwipePage = () => {
  const dispatch = useDispatch();
  const {clothList} = useSelect();
  const navigation = useNavigation();
  const [cardIndex, setCardIndex] = useState(0);
  const [allShown, setAllShown] = useState(false);
  const swiperRef = useRef(null);

  const onSwiped = () => {
    setAllShown(cardIndex === cards.length - 1);
    setCardIndex(prev => prev + 1);
  };

  const handleSwipeLeft = () => {
    swiperRef.current.swipeLeft();
  };

  const handleSwipeRight = () => {
    swiperRef.current.swipeRight();
  };

  const handleRight = index => {
    const item = cards[index];
    clothList.push(item);
    dispatch(requestSaveClothToList(clothList));
  };

  return (
    <Container>
      <Swiper
        ref={swiperRef}
        cards={cards}
        cardIndex={cardIndex}
        renderCard={card => {
          return (
            <CardUI
              width={deviceWidth * 0.9}
              height={deviceHeight * 0.75}
              onPress={() =>
                navigation.push(ScreenName.ContentPage, {
                  name: card.name,
                  image: card.image,
                  brand: card.brand,
                  price: card.price,
                  originalPrice: card.originalPrice,
                  discountPercentage: card.discountPercentage,
                })
              }>
              <ImageUI source={{uri: card.image}}>
                <CardContent>
                  <Name>{card.name}</Name>
                  <BrandName>{card.brand}</BrandName>
                  <RowBox>
                    <DiscountImg source={ImageData.ImgDiscount}>
                      <DiscountPercent>{`${card.discountPercentage}%`}</DiscountPercent>
                    </DiscountImg>
                    <OriginalPrice>{`₹${card.originalPrice}`}</OriginalPrice>
                  </RowBox>
                  <TextKnowMore>{Texts.knowMore}</TextKnowMore>
                </CardContent>
              </ImageUI>
            </CardUI>
          );
        }}
        onSwiped={onSwiped}
        onSwipedLeft={index => console.log('Swiped Left', index)}
        onSwipedRight={index => handleRight(index)}
        stackSize={3}
        stackSeparation={15}
        backgroundColor="transparent"
        disableTopSwipe
        disableBottomSwipe
      />
      {allShown ? (
        <EmptyBox>
          <EmptyText>{Texts.thatsAllForNow}</EmptyText>
        </EmptyBox>
      ) : (
        <BottomBtnBox>
          <RoundButton
            onPress={handleSwipeLeft}
            img={ImageData.ImgReject}
            height={60}
            width={60}
          />
          <RoundButton
            onPress={handleSwipeRight}
            img={ImageData.ImgInfo}
            height={60}
            width={60}
          />
        </BottomBtnBox>
      )}
    </Container>
  );
};

export default WrapperScreen(SwipePage);
