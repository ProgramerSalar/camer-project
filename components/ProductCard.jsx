import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'



const ProductCard = ({
    id,
    name,
    price,
    stock,
    imgSrc
}) => {

    const navigate = useNavigation()
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigate.navigate('productdetails', {id})}>
            <View style={{ 
                margin:10,
                padding:5,
                // backgroundColor:'green',
                borderRadius:10
            }}>
                <Image  source={{ uri: imgSrc}} style={{
                    height:moderateScale(80),
                    width:moderateScale(80)
                }}/>
                <Text numberOfLines={1} style={{
                    maxWidth:100
                }}>{name}</Text>
                <Text>${price}</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductCard