import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { colors, defaultStyle, formHeading } from "../src/styles/styles";
import { Avatar, Button } from "react-native-paper";
import Loader from "../components/Loader";
import ButtonBox from "../components/ButtonBox";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";
import { useMessageAndErrorUser } from "../utils/hooks";

const Profile = ({ navigation, route }) => {
  
  const [avatar, setAvatar] = useState();



  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image)

      // dispatch update image 


    }


  }, [route.params])   // only one 


  

  const {user} = useSelector((state) => state.user)



  const dispatch = useDispatch()
  useMessageAndErrorUser(navigation, dispatch, "login")
  const logoutHandler = () => {

    dispatch(logout())

  }
  const loading = false
  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Sign Out":
        logoutHandler();
        break;

      default:
      case "Orders":
        navigation.navigate("orders");
        break;
    }
  };




  return (

    <>

      <View style={defaultStyle}>
        {/* Heading */}
        <View style={{ marginTop: 20 }}>
          <Text style={formHeading}>Profile</Text>
        </View>

        {/* Loading  */}

        {
          loading ? <Loader /> :
          <>
          <View style={styles.container}>
          <Avatar.Image
            size={100}
            style={{ backgroundColor: colors.color1 }}
            source={{
              uri: avatar,
            }}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("camera", { updateProfile: true })}
          >
            <Button textColor={colors.color1}>Chanage Photo</Button>
          </TouchableOpacity>

          <Text style={styles.name}>{user?.name}</Text>
          <Text
            style={{
              fontWeight: "300",
              color: colors.color2,
            }}
          >
            {user?.email}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              justifyContent: "space-between",
            }}
          >
            <ButtonBox handler={navigateHandler} text={'Orders'} icon={'format-list-bulleted-square'} />
            <ButtonBox handler={navigateHandler} text={'Admin'} icon={'view-dashboard'} reverse={true} />
            <ButtonBox handler={navigateHandler} text={'Profile'} icon={'pencil'} />





          </View>
          <View
            style={{
              flexDirection: "row",
              margin: 10,
              justifyContent: "space-evenly",
            }}
          >
            <ButtonBox handler={navigateHandler} text={'Password'} icon={'pencil'} />
            <ButtonBox handler={navigateHandler} text={'Sign Out'} icon={'exit-to-app'} />






          </View>


        </View>

          </>
        }





      </View>

      {/* <Footer /> */}



    </>


   
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;