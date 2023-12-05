import { View, Text, BackHandler, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import { Searchbar } from 'react-native-paper'
import { products } from '../Screens/Home'
import { getInputRangeFromIndexes } from 'react-native-snap-carousel'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native'



const SearchModal = (
  {
    setActiveSearch,
    searchQuery,
    setSearchQuery
  }
) => {

  const backPress = () => {
    setActiveSearch(false)
    return true
  }

  useEffect(() => {

    BackHandler.addEventListener('hardwareBackPress', backPress )

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backPress)
    }
  })

  const navigation = useNavigation()



  return (
    <View style={{
      height:'100%',
      width:'100%',
      backgroundColor:'white'
    }}>

      <Searchbar placeholder='Search...........' 
      style={{
        margin:moderateScale(10),
        padding:moderateScale(5),

      }}
      />
      
      <View style={{
      
      }}>
        {
          products.map((item, index) => (
            <ScrollView style={{
              backgroundColor:'green',
              margin:10,
              borderRadius:10,
              
              
              
            }}>

<TouchableOpacity onPress={() => navigation.navigate('productdetails', {
  id:item._id
})} style={{
  flexDirection:'row'
}}>
<Image 
              source={{
                uri:item.images[0]?.url
              }}
              style={{
                height:moderateScale(80),
                width:moderateScale(80),
                margin:moderateScale(10),
                padding:moderateScale(10),
                borderColor:'green',
                backgroundColor:'green',
                borderRadius:10,
              }}
              />
              <Text numberOfLines={5} style={{
                color:'white',
                margin:10,
                padding:5,
                

              }}>{item.name}</Text>
</TouchableOpacity>

              
              


            </ScrollView>
          ))
        }
      </View>


    </View>
  )
}

export default SearchModal