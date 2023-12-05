import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const Header = ({back, emptyCart}) => {

  // const {user} = useSelector((state) => state.user)
  // console.log(user)

  const router = useRoute()
  const emptyCartHandler = () => {
    console.log('hello world')
  }
  const navigation = useNavigation()



  const {loading} = useSelector((state) => state.user)
  const isAuthenticated = true




  const accountHandler = () => {
    if (!isAuthenticated) return navigation.navigate('login')
    navigation.navigate('profile')
  }
  return (
    <>
    {
      back && (
        <TouchableOpacity style={{
          flexDirection:'row',
          justifyContent:'flex-start',
          flex:1
        }} 
        onPress={() => navigation.goBack()}
        >
          <Avatar.Icon icon={'arrow-left'} style={{
            backgroundColor:'transparent',
            
          }} color={'black'} />
        </TouchableOpacity>
      )
      
    }
    <TouchableOpacity style={{
      flexDirection:'row',
      justifyContent:'flex-end',
      flex:1,
      right:80

    }} onPress={emptyCart ? emptyCartHandler: () => navigation.navigate('cart') }>
      <Avatar.Icon icon={emptyCart ? 'delete-outline' :'cart-outline'} style={{
        backgroundColor:'transparent'
      }}
      color={'black'} />
      
    </TouchableOpacity>


    <TouchableOpacity style={{flexDirection:'row',flex:1,
  alignSelf:'flex-end',}} onPress={accountHandler}>
            <Avatar.Icon icon={'account'} style={{
              backgroundColor:'transparent',
           
            }} color={'black'}/>
        </TouchableOpacity>
    </>
  )
}

export default Header