import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import { Avatar, Button } from 'react-native-paper'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions/productActions';



export const categories = [
  {category:"Laptop", _id:"1"},
  {category:"shoes", _id:"2"},
  {category:"monitor", _id:"3"},
  {category:"mouse", _id:"4"},
  {category:"keybord", _id:"5"},
  {category:"shoes", _id:"6"},
  {category:"shoes", _id:"7"},
  {category:"shoes", _id:"8"},
  {category:"shoes", _id:"9"},
  {category:"shoes", _id:"10"},
  {category:"shoes", _id:"11"},
  {category:"shoes", _id:"12"},
  {category:"shoes", _id:"13"},
  {category:"shoes", _id:"14"},
  {category:"shoes", _id:"15"},
  {category:"shoes", _id:"16"},
  {category:"shoes", _id:"17"},
  {category:"shoes", _id:"18"},
  {category:"shoes", _id:"19"},
  {category:"shoes", _id:"20"},
  {category:"shoes", _id:"21"},
  {category:"shoes", _id:"219"},
  {category:"shoes", _id:"22"},
  {category:"shoes", _id:"23"},
  {category:"shoes", _id:"24"},
  {category:"shoes", _id:"35"},
  {category:"shoes", _id:"26"},
  {category:"shoes", _id:"27"},
  {category:"shoes", _id:"28"},
  {category:"shoes", _id:"29"},
  {category:"shoes", _id:"30"},
]



// export const products = [
//   {
//     _id:"1",
//     name:"Lenovo IdeaPad 3 Intel Core i5-1235U 12th Gen 15.6 (39.62cm) FHD IPS Anti-Glare (8GB/512GB SDD/Windows 11/Office 2021/Back",
//     price:1200,
//     category:"laptop",
//     stock:12,
//     images:[
//       {
//         url:"https://m.media-amazon.com/images/I/512QAURU1TL._SX679_.jpg"
//       },
//       {
//         url:"https://m.media-amazon.com/images/I/61NJJEoyHNL._SX679_.jpg"
//       },
//       {
//         url:"https://m.media-amazon.com/images/I/61ZDeDna6wL._SX679_.jpg"
//       },
//       {
//         url:"https://m.media-amazon.com/images/I/51tncWCdtXL._SX679_.jpg"
//       },
//       {
//         url:"https://m.media-amazon.com/images/I/51wQs0x5SzL._SX679_.jpg"
//       }
//     ]

//   }, 
//   {
//     _id:"2",
//     name:"Samsung Galaxy M34 5G (Prism Silver,8GB,128GB)|120Hz sAMOLED Display|50MP Triple No Shake Cam|6000 mAh Battery|4 Gen OS Upgrade & 5 Year Security Update|16GB RAM with RAM+|Android 13|Without Charger",
//     price:1200,
//     stock:12,
//     category:"phone",
//     images:[
//       {
//         url:"https://m.media-amazon.com/images/I/5134aj-bXnL._SX300_SY300_QL70_FMwebp_.jpg"
//       },
//       {
//         url:"https://m.media-amazon.com/images/I/81tusZvwFGL._SX679_.jpg"
//       },
//       {
//         url:"https://m.media-amazon.com/images/I/81CLQ44wH0L._SX679_.jpg"
//       },
//       {
//         url:"https://m.media-amazon.com/images/I/81jA2esZOuL._SX679_.jpg"
//       },
//       {
//         url:"https://m.media-amazon.com/images/I/619dnSqX+VL._SX679_.jpg"
//       }
//     ]

//   }, 

// ]












const Home = () => {

  const [category, setCategory] = useState("")
  const categoryHandler = (id) => {
    setCategory(id)
  }
  const [activeSearch, setActiveSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const {products} = useSelector((state) => state.product)

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getAllProducts())

  }, [dispatch])


  return (
    <>
    {
      activeSearch && (
        <SearchModal
        setActiveSearch={setActiveSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />
      )
    }
    <View style={{}}>

      <Header  />


      {/* Search   */}
      <View>
        <View style={{
          flexDirection:'row',
          justifyContent:'flex-end',
          right:160,
          top:5
        }}>
          <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
            <Avatar.Icon  icon={'magnify'} style={{
              backgroundColor:'white',
              elevation:12
            }}  />
          </TouchableOpacity>
        </View>
      </View>


      {/* categories  */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
        padding:moderateScale(20)
      }}>
      {
        categories.map((item, index) => (
          <View>
            <Button
            onPress={() => categoryHandler(item._id)}
            style={{
              backgroundColor:category === item._id ? "grey" : "white",
              padding:5,
              margin:moderateScale(5)
            }}
            >{item.category}</Button>
            </View>
        ))
      }
      </ScrollView>


      <View>
        <ScrollView horizontal>
        {
          products.map((item, index) => (
            <ProductCard
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            stock={item.stock}
            imgSrc={item.images[0]?.url}
            />
          ))
        }
        </ScrollView>
        


      </View>
      


    </View>

   
    
    </>
    
  )
}

export default Home