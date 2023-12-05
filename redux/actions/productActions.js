import axios from "axios"
import { server } from "../store" 





export const getAllProducts = (email, password) => async(dispatch) => {

    try{
        dispatch({
            type:"getAllProductsRequest"
        })

        // Axios here 
        const {data} = await axios.get(`${server}/product/all`, {
            withCredentials: true,
        })

        dispatch({
            type:"getAllProductsSuccess",
            payload:data.products
        })

    }catch(error){
        dispatch({
            type:"getAllProductsFail",
            payload:error.response.data.message
        })

    }


}