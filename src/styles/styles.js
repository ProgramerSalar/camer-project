import { StyleSheet, Platform, StatusBar } from "react-native";


export const colors = {

    color1:"#c70049",  // red color
    color1_light:"rgba(227,25,99)",
    color1_light2: "rgba(199,0,73,0.8)",
    color2:"white",
    color3:"green", // green color
    color4:"transparent",
    color5:"#f2f2f2", // light white color
    color6:"#f7f7f7", // grey color

}


export const defaultStyle = StyleSheet.create({
    padding:35,
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex:1,
    backgroundColor:colors.color2
})


export const inputStyling = StyleSheet.create({
    height:150,
    backgroundColor:colors.color2,
    marginVertical:10,
    marginHorizontal:20
})


export const formHeading= {
    fontSize: 25,
    fontWeight: "500",
    textAlign: 'center',
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,

}

export const inputOptions = {
    styles: inputStyling,
    mode: 'outlined',
    activeOutlineColor: colors.color1

}




export const formStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.color3,
        borderRadius: 10,
        justifyContent: 'center',
        elevation: 10,
        marginTop: 10
    },
    forgot: {
        color: colors.color2,
        marginHorizontal: 20,
        marginVertical: 10,
        alignSelf: 'flex-end',
        fontWeight: '100'
    },
    btn: {
        backgroundColor: colors.color1,
        margin: 20,
        padding: 6,
    },
    or: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: '100',
        color: colors.color2
    },
    link: {
        alignSelf: 'center',
        color: colors.color2,
        fontSize: 18,
        textTransform: 'uppercase',
        marginVertical: 10,
        marginHorizontal: 20,
    }
})


export const defaultImg = "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"