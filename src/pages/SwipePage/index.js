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

const cards = [
  {
    id: 1,
    name: 'floral print v-neck top',
    brand: 'shaye',
    price: 2986,
    originalPrice: 4977,
    discountPercentage: 40,
    image:
      'https://assets.ajio.com/medias/sys_master/root/20240209/UUe4/65c6542805ac7d77bb4c05c5/-473Wx593H-467057476-peach-MODEL.jpg',
  },
  {
    id: 2,
    name: 'morgan blouse',
    brand: 'kazo',
    price: 4500,
    originalPrice: 6000,
    discountPercentage: 25,
    image:
      'https://cdn.shopify.com/s/files/1/0261/2386/2082/files/KZ01319YELLOWMULTI.jpg?v=1743161024',
  },

  {
    id: 3,
    name: 'white typographic printed regular tshirt',
    brand: 'newme',
    price: 4500,
    originalPrice: 6000,
    discountPercentage: 25,
    image:
      'https://assets.newme.asia/wp-content/uploads/2025/03/041354491383b268/NM-IN-56-TSH-25-FEB-12787-WHITE_(1).webp',
  },

  {
    id: 4,
    name: "women's grey cotton regular fit blouse",
    brand: 'cotton world',
    price: 4500,
    originalPrice: 6000,
    discountPercentage: 25,
    image:
      'https://cdn.shopify.com/s/files/1/0261/2386/2082/files/KZ01319YELLOWMULTI.jpg?v=1743161024',
  },

  {
    id: 5,
    name: 'notch neck floral top',
    brand: 'us polo',
    price: 4500,
    originalPrice: 6000,
    discountPercentage: 25,
    image:
      'https://cdn.shopify.com/s/files/1/0617/2137/8986/files/1_3af581ca-5668-4c02-8237-7942cc9a9cd3.jpg?v=1713339496',
  },

  {
    id: 6,
    name: 'spread collar chambray denim shirt',
    brand: 'us polo',
    price: 4500,
    originalPrice: 6000,
    discountPercentage: 25,
    image:
      'https://cdn.shopify.com/s/files/1/0617/2137/8986/files/1_f5b86591-68dd-4cae-b315-66d67d262c87.jpg?v=1713339497',
  },

  {
    id: 7,
    name: "cloudy grey women's denim jacket",
    brand: 'freakins',
    price: 4500,
    originalPrice: 6000,
    discountPercentage: 25,
    image:
      'https://cdn.shopify.com/s/files/1/0028/9806/7554/files/MadhuraJUry8167_03d9208c-eb7d-4952-98cf-25c972fcfe21.jpg?v=1732535428',
  },

  {
    id: 8,
    name: 'fiorella top ♡',
    brand: 'girls dont dress for boys',
    price: 4500,
    originalPrice: 6000,
    discountPercentage: 25,
    image:
      'https://cdn.shopify.com/s/files/1/0796/2391/3771/files/A992E251-0BFC-4426-B131-FF84B9CF4BBC.jpg?v=1729621042',
  },

  {
    id: 9,
    name: 'lapel collar drop shoulder cropped denim shirt',
    brand: 'chemistry india',
    price: 4500,
    originalPrice: 6000,
    discountPercentage: 25,
    image:
      'https://cdn.shopify.com/s/files/1/0605/1509/0592/files/CJ24AW005_2.jpg?v=1743502223',
  },
  {
    id: 10,
    name: 'black floral crop top',
    brand: 'Casuals Inc.',
    price: 3200,
    originalPrice: 3200,
    discountPercentage: 0,
    image:
      'https://cdn.shopify.com/s/files/1/0539/7633/4528/products/image_36eb65a4-83bd-4a12-8fac-7d8189f0d564.jpg?v=1621949284',
  },
];

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
              height={deviceHeight * 0.8}
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
