
import { Provider } from 'react-redux';
import React from 'react';
import { Text, View } from 'react-native';
import Main from './Main';
import { store } from './redux/store';


export const App = () => {
  return(
    <Provider store={store}>
    <Main />
  </Provider>
  )

 
  
}




