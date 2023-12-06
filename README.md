**in the page have camera things are found:**



import { View, Text, TouchableOpacity,Pressable,
  
  StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'
import { Avatar } from 'react-native-paper'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';




const CameraComponent = ({ navigation, route}) => {

  const [{cameraRef}, {takePicture}] = useCamera(null)
  const [type, setType] = useState(RNCamera.Constants.Type.back)
  const [hasPermission, setHasPermission] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null);





  const openImagePicker = async () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    const data = await launchImageLibrary(options);
    console.log(data)


    if (route.params?.newProduct)   // if newProduct condition is  right
    return navigation.navigate("newproduct", {     // then come to newproduct page
        image: data.assets[0].uri,  // with image 
    });
    if (route.params?.updateproduct)
            return navigation.navigate("productimages", {
                image: data.assets[0].uri,
            });
        if (route.params?.updateProfile)
            return navigation.navigate("profile", {
                image: data.assets[0].uri,
            });
        else
            return navigation.navigate("signup", {
                image: data.assets[0].uri,
            });





  };



  const clickPicture = async() => {

    
    const data = await takePicture()
    // console.log(data)

    if (route.params?.newProduct)
    return navigation.navigate("newproduct", {
        image: data.uri,
    });

if (route.params?.updateproduct)
    return navigation.navigate("productimages", {
        image: data.uri,
    });
if (route.params?.updateProfile)
    return navigation.navigate("profile", {
        image: data.uri,
    });
else
    return navigation.navigate("signup", {
        image: data.uri,
    });



  }



  return (
    <View style={{
      flex:1
    }}>
      <RNCamera 
      ref={cameraRef}
      type={type}
      style={{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end'
      }}
      >

        

        <View
        style={{
          flexDirection:'row',
          bottom:10,
          width:'100%',
          justifyContent:'space-evenly',
      
        }}
        >
          <TouchableOpacity onPress={() => openImagePicker()}>
          <Avatar.Icon icon={'image'}  />
          </TouchableOpacity>
          <TouchableOpacity onPress={clickPicture}>
          <Avatar.Icon icon={'camera'}  />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setType(prevType => prevType === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back)
          }} >
          <Avatar.Icon icon={'camera-flip'}  />
          </TouchableOpacity>

        </View>





        


        



        

      </RNCamera>
    
    </View>
  )
}


const MyIcon = (icon) => {

  <TouchableOpacity>
    <Avatar.Icon icon={icon}  />
  </TouchableOpacity>
}









export default CameraComponent



you should install three package, if you use the camera:
1. https://www.npmjs.com/package/react-native-camera
2. https://www.npmjs.com/package/react-native-fs
3. https://www.npmjs.com/package/react-native-image-picker


you should follow this github link: 
https://github.com/react-native-camera/react-native-camera/blob/master/docs/installation.md#requirements

1. Add permissions to your app android/app/src/main/AndroidManifest.xml file:
   
![camera-image](https://github.com/ProgramerSalar/camer-project/assets/95423130/12f48b8e-2c65-4e6a-94d7-5f04644810d9)


2. Insert the following lines in android/app/build.gradle:
  ![camera-image2](https://github.com/ProgramerSalar/camer-project/assets/95423130/8fe8949c-eb28-459e-a437-985cd7312469)


3. you download this package:
https://www.npmjs.com/package/react-native-camera-hooks
