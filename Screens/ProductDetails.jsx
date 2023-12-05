import {View, Text, Dimensions, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {products} from './Home';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';
import { colors } from '../src/styles/styles';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};


const id = '2';
const name =
  'Samsung Galaxy M34 5G (Prism Silver,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|16GB RAM with RAM+|Android 13|Without Charger';
const price = 1200;
const stock = 12;
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH
const quantity = 12

const images = [
  {
    id: 'dinfaie',
    url: 'https://m.media-amazon.com/images/I/5134aj-bXnL._SX300_SY300_QL70_FMwebp_.jpg',
  },
  {
    id: 'dinfaiedsew',
    url: 'https://m.media-amazon.com/images/I/81tusZvwFGL._SX679_.jpg',
  },
  {
    id: 'dinfaidfere',
    url: 'https://m.media-amazon.com/images/I/81CLQ44wH0L._SX679_.jpg',
  },
  {
    id: 'dinfaidfee',
    url: 'https://m.media-amazon.com/images/I/81jA2esZOuL._SX679_.jpg',
  },
  {
    id: 'dinfadreie',
    url: 'https://m.media-amazon.com/images/I/619dnSqX+VL._SX679_.jpg',
  },
];





const ProductDetails = () => {

    

    const isCarousel = useRef(null)
    const navigation = useNavigation()
    const addToCardHandler = () => {
      if(stock === 0) return Toast.show({
        type:"error",
        text1:"out of Stock",
      })
      // console.log("Adding To Card", quantity) 
      Toast.show({
        type:"success",
        text1:'Added to Cart'
      })
    }
  return (
    <View>
        <Header back={true} />

        <View style={{
            top:80
        }}>

            

            {/* Carousel  */}
      <Carousel
        layout='tinder'
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />




        </View>


        <View style={{
            top:50
        }}>
            <Text style={{
                fontWeight:'bold',
                padding:10
            }}>{name}</Text>
            <Text style={{
                fontWeight:'bold'
            }}>Price:$
            {price}</Text>
        </View>


        <View>
            <TouchableOpacity onPress={addToCardHandler} >
            <Button style={{
                backgroundColor:'blue',
                top:100,
                margin:10,
                padding:5
            }}  >Add To Cart</Button>
            </TouchableOpacity>
            
        </View>

      
    </View>
  );
};





const CarouselCardItem = ({ item, index }) => (
    <View style={style.container} key={index}>
      <Image source={{ uri: item.url }} style={style.image} />
    </View>
  );
  
  
  const style = StyleSheet.create({
    container: {
    //   backgroundColor: colors.color1,
    //   width: ITEM_WIDTH,
      paddingVertical: 40,
    //   height: 380,
      
    },
    image: {
      width: ITEM_WIDTH,
      resizeMode: "contain",
      height: 250,
    },
    quantity: {
      backgroundColor: colors.color4,
      height: 25,
      width: 25,
      textAlignVertical: "center",
      textAlign: "center",
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colors.color5,
    },
  
    btn: {
      backgroundColor: colors.color3,
      borderRadius: 100,
      padding: 5,
      marginVertical: 35,
    },
  })

export default ProductDetails;
