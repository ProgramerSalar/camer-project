import { View, Text } from 'react-native'
import React, { Profiler, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Toast from 'react-native-toast-message'
import Home, { categories } from './Screens/Home'
import ProductDetails from './Screens/ProductDetails'
import Cart from './Screens/Cart'
import ConfirmOrder from './Screens/ConfirmOrder'
import Payment from './Screens/Payment'
import Login from './Screens/Login'
import ForgotPassword from './Screens/ForgotPassword'
import Verify from './Screens/Verify'
import SignUp from './Screens/SignUp'
import Profile from './Screens/Profile'
import UpdateProfile from './Screens/UpdateProfile'
import ChangePassword from './Screens/ChangePassword'
import Order from './Screens/Order'
import AdminPanel from './Screens/Admin/AdminPanel'
import Categories from './Screens/Admin/Categories'
import AdminOrders from './Screens/Admin/AdminOrders'
import NewProduct from './Screens/Admin/NewProduct'
import UpdateProduct from './Screens/Admin/UpdateProduct'
import ProductImages from './Screens/Admin/ProductImages'
import CameraComponent from './Screens/Admin/CameraComponent'
import { useDispatch } from 'react-redux'
import { loadUser } from './redux/actions/userActions'








const Main = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())

  }, [dispatch])


  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='productdetails' component={ProductDetails} />
          <Stack.Screen name='cart' component={Cart} />
          <Stack.Screen name='confirmorder' component={ConfirmOrder} />
          <Stack.Screen name='payment' component={Payment} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='forgotpassword' component={ForgotPassword} />
          <Stack.Screen name='verify' component={Verify} />
          <Stack.Screen name='signup' component={SignUp} />
          <Stack.Screen name='profile' component={Profile} />
          <Stack.Screen name='updateprofile' component={UpdateProfile} />
          <Stack.Screen name='changepassword' component={ChangePassword} />
          <Stack.Screen name='orders' component={Order} />


          {/* Admin  */}
          <Stack.Screen name='adminpanel' component={AdminPanel} />
          <Stack.Screen name='categories' component={Categories} />
          <Stack.Screen name='adminorders' component={AdminOrders} />
          <Stack.Screen name='newproduct' component={NewProduct} />
          <Stack.Screen name='updateproduct' component={UpdateProduct} />
          <Stack.Screen name='productimages' component={ProductImages} />
          <Stack.Screen name='camera' component={CameraComponent} />

          


          


        </Stack.Group>
      </Stack.Navigator>

      <Toast position='bottom' topOffset={50} />
    </NavigationContainer>
    
  )
}

export default Main