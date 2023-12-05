import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../src/styles/styles'
import { Avatar } from 'react-native-paper'
import { iconOptions } from "../Screens/ProductDetails";


const CartItem = ({
    name,
    amount,
    qty,
    stock,
    index,
    imgSrc,
    id,
    decrementHandler,
    incrementhandler,
}) => {
    return (
        <View style={{
            flexDirection: "row",
            height: 100,
            marginVertical: 20,
            // flex:1
        }}>
            <View style={{
                width: "40%",
                backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,

            }}>

                <Image
                    source={{
                        uri: imgSrc
                    }}
                    style={
                        styles.img
                    }
                />

            </View >

            <View style={{
                width: "40%",
                paddingHorizontal: 35,
            }}>

                <Text 
                numberOfLines={1}
                style={{
                    fontSize: 17,
                }} >{name}</Text>


                <Text 
                numberOfLines={1}
                style={{
                    fontSize: 17,
                    fontWeight:"900"
                }} >${amount}</Text>

            </View>

            <View
            style={styles.qtyContainer}

            >

                <TouchableOpacity onPress={decrementHandler(id,qty,stock)}>
                    <Avatar.Icon icon={"minus"} size={20} {...iconOptions} />
                </TouchableOpacity>

                <Text style={styles.qtyText}>{qty}</Text>


                <TouchableOpacity onPress={incrementhandler(id,qty,stock)}>
                    <Avatar.Icon icon={"plus"} size={20} {...iconOptions} />
                </TouchableOpacity>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: "100%",
        resizeMode: "contain",
        top: "-20%",
        left: "10%",
    },
    qtyText: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlignVertical: "center",
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.color5,
    },
    qtyContainer: {
        alignItems: "center",
        width: "20%",
        height: 80,
        justifyContent: "space-between",
        alignSelf: "center",
    },
});

export default CartItem