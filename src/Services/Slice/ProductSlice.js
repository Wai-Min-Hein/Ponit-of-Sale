import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {
        name,
        actual_price,
        sale_price,
        total_price,
        unit,
        more_information,
        photo
    }
   
}
const ProductSlice = createSlice({
    name : "products",
    initialState,
    reducers: {
        AddProduct: (state,action)=>{
            const products = action.payload 
        }
    }

})