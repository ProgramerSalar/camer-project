you should install three package, if you use the camera:
1. https://www.npmjs.com/package/react-native-camera
2. https://www.npmjs.com/package/react-native-fs
3. https://www.npmjs.com/package/react-native-image-picker


you should follow this github link: 
https://github.com/react-native-camera/react-native-camera/blob/master/docs/installation.md#requirements

1. Add permissions to your app android/app/src/main/AndroidManifest.xml file:
   <!-- Required -->
<uses-permission android:name="android.permission.CAMERA" />

<!-- Include this only if you are planning to use the camera roll -->
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

<!-- Include this only if you are planning to use the microphone for video recording -->
<uses-permission android:name="android.permission.RECORD_AUDIO"/>


2. Insert the following lines in android/app/build.gradle:
  android {
  ...
  defaultConfig {
    ...
    missingDimensionStrategy 'react-native-camera', 'general' // <--- insert this line
  }
}

3. you download this package:
https://www.npmjs.com/package/react-native-camera-hooks
