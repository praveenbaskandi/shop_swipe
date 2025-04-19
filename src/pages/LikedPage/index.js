import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {requestSaveClothToList} from '../../redux/cart/Actions';
import WrapperScreen from '../../component/WrapperScreen';
import {ScreenName} from '../../constants/ScreenNames';
import {ImageData} from '../../assets/ImageConstants';
import {Texts} from '../../constants/Strings';
import useSelect from './selector';
import {
  Container,
  LikedList,
  ItemContainer,
  Title,
  ItemDiscountPrice,
  ItemOriginalPrice,
  EmptyBox,
  EmptyText,
  ItemImage,
  ItemBrandName,
  ColumnBox,
  ItemName,
  RowBox,
  ItemIcon,
  ItemReturnDate,
  ItemReturn,
  ItemDeliver,
  ItemDeliverTime,
  DiscountBox,
  DiscountTxt,
  ItemClose,
  ItemClick,
} from './styled';

const LikedPage = () => {
  const dispatch = useDispatch();
  const {clothList} = useSelect();
  const navigation = useNavigation();
  const [itemList, setItemList] = useState(clothList);

  const completeHeader = () => {
    return <Title>{Texts.liked}</Title>;
  };

  const onRemoveClick = id => {
    const newArray = itemList.filter(item => item.id !== id);
    setItemList(newArray);
    dispatch(requestSaveClothToList(newArray));
  };

  const renderItem = ({item, index}) => {
    return (
      <ItemContainer
        id={`${item.id}-${index}`}
        onPress={() =>
          navigation.push(ScreenName.ContentPage, {
            name: item.name,
            image: item.image,
            brand: item.brand,
            price: item.price,
            originalPrice: item.originalPrice,
            discountPercentage: item.discountPercentage,
          })
        }>
        <ItemImage source={{uri: item.image}} />
        <ItemClick onPress={() => onRemoveClick(item.id)}>
          <ItemClose source={ImageData.ImgClose} />
        </ItemClick>
        <ColumnBox>
          <ItemBrandName>{item.brand}</ItemBrandName>
          <ItemName>{item.name}</ItemName>
          <RowBox mt={5}>
            <ItemDiscountPrice>{`₹ ${item.price}`}</ItemDiscountPrice>
            <ItemOriginalPrice>{`₹ ${item.originalPrice}`}</ItemOriginalPrice>
            <DiscountBox>
              <DiscountTxt>{`${item.discountPercentage}${Texts.percentOff}`}</DiscountTxt>
            </DiscountBox>
          </RowBox>
          <RowBox mt={5}>
            <ItemIcon source={ImageData.ImgReturn} />
            <ItemReturnDate ml={5}>{Texts.days}</ItemReturnDate>
            <ItemReturn ml={5}>{Texts.returnAvailable}</ItemReturn>
          </RowBox>
          <RowBox mt={5}>
            <ItemDeliver>{Texts.deliveryBy}</ItemDeliver>
            <ItemDeliverTime ml={5}>{Texts.tomorrow}</ItemDeliverTime>
          </RowBox>
        </ColumnBox>
      </ItemContainer>
    );
  };

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <LikedList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={completeHeader}
        //   ListFooterComponent={completeFooter}
        ListEmptyComponent={
          <EmptyBox>
            <EmptyText>{Texts.noLikes}</EmptyText>
          </EmptyBox>
        }
      />
    </Container>
  );
};

export default WrapperScreen(LikedPage);
