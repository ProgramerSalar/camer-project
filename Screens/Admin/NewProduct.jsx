import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { formHeading, defaultStyle, colors, inputOptions, inputStyling } from '../../src/styles/styles'
// import Header from '../../components/Header'
import { Avatar, Button, TextInput } from 'react-native-paper'
import Loader from '../../components/Loader'
import SelectComponent from '../../components/SelectComponent'

const NewProduct = ({ route, navigation }) => {


    

    // console.log(route.params)
    const [visible, setVisible] = useState(false);

   const [image, setImage] = useState("")
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [categories, setCategories] = useState([
        {"_id":"1", category:"laptop"},
        {"_id":"2", category:"laptop"},
        {"_id":"3", category:"laptop"},
        {"_id":"4", category:"laptop"},
        {"_id":"5", category:"laptop"},
    ]);

    const loading = false

    const [imageChanged, setImageChanged] = useState(false)
    const submitHandler = () => { 
        console.log(name,description,price,stock,categoryID)
    }




    useEffect(() => {
        if (route.params?.image) {
            setImage(route.params.image)
            setImageChanged(true)   // set image are changed 

        }


    }, [route.params])    // only one 


    return (
        <>

            <View style={{
                ...defaultStyle,
                backgroundColor: colors.color5,
            }}
            >
                {/* <Header back={true} /> */}

                {/* Heading */}
                <View style={{ marginBottom: 20, paddingTop: 90 }}>
                    <Text style={formHeading}>New Product</Text>
                </View>


                {loading ? (
                    <Loader />
                ) : (
                    <ScrollView
                        style={{
                            padding: 20,
                            elevation: 10,
                            borderRadius: 10,
                            backgroundColor: colors.color3,
                        }}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                height: 650,
                            }}
                        >

<View style={{
    width:80,
    height:80,
    alignSelf:'center',
    marginBottom:20,


}}>
    <Avatar.Image
    size={80}
    style={{
        backgroundColor:colors.color1
    }}
    source={{
        uri : image ? image : null 
    }}
    />

    <TouchableOpacity
    onPress={() => navigation.navigate('camera', {newProduct:true})}
    >

        <Avatar.Icon
        icon={'camera'}
        size={30}
        color={colors.color3}
        style={{
            backgroundColor:colors.color2,
            position:'absolute',
            bottom:0,
            right:-5
        }}
        />


    </TouchableOpacity>

</View>




                            <TextInput
                                {...inputOptions}
                                placeholder="Name"
                                value={name}
                                onChangeText={setName}
                            />
                            <TextInput
                                {...inputOptions}
                                placeholder="Description"
                                value={description}
                                onChangeText={setDescription}
                            />

                            <TextInput
                                {...inputOptions}
                                placeholder="Price"
                                keyboardType="number-pad"
                                value={price}
                                onChangeText={setPrice}
                            />
                            <TextInput
                                {...inputOptions}
                                placeholder="Stock"
                                value={stock}
                                keyboardType="number-pad"
                                onChangeText={setStock}
                            />

                            <Text
                                style={{
                                    ...inputStyling,
                                    textAlign: "center",
                                    textAlignVertical: "center",
                                    borderRadius: 3,
                                }}
                                onPress={() => setVisible(true)}
                            >
                                {category}
                            </Text>

                            <Button
                                textColor={colors.color2}
                                style={{
                                    backgroundColor: colors.color1,
                                    margin: 20,
                                    padding: 6,
                                }}
                                onPress={submitHandler}
                                loading={loading}
                                disabled={loading}
                            >
                                Create 
                            </Button>
                        </View>
                    </ScrollView>
                )}



            </View>

            <SelectComponent
            categories={categories}
            setCategoryID={setCategoryID}
            setCategory={setCategory}
            visible={visible}
            setVisible={setVisible}
            />



        </>

    )
}


export default NewProduct