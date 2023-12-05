import { colors, defaultStyle, formHeading } from '../../src/styles/styles'
import Header from '../../components/Header'
import { orders } from '../Order'
import OrderItem from '../../components/OrderItem'
import { View, Text, ScrollView } from 'react-native'


const AdminOrders = () => {

    const processOrderLoading = false

    const loading = false

    const updateHandler = () => {}


    return (
        <View style={{
            ...defaultStyle,
            backgroundColor: colors.color5,
        }}>


            {/* <Header back={true} /> */}

            {/* Heading */}
            <View style={{ marginBottom: 20, paddingTop: 80 }}>
                <Text style={formHeading}>All Orders</Text>
            </View>


            {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                  admin={true}
                  updateHandler={updateHandler}
                  loading={processOrderLoading}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
        </View>
    )
}

export default AdminOrders