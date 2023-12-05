import {createReducer} from "@reduxjs/toolkit"







export const productReducer = createReducer({
    products : [],
    product:{},



}, (builder) => {


    // Request
    builder
    .addCase("getAllProductsRequest", (state) => {
        state.loading = true
        
    })
    .addCase("getAdminProductsRequest", (state) => {
        state.loading = true
        
    })
    .addCase("getProductDelailsRequest", (state) => {
        state.loading = true
        
    })
    


    //success
    builder
    .addCase("getAllProductsSuccess", (state, action) => {
        state.loading = false
        state.products = action.payload
        

    })
    .addCase("getAdminProductsSuccess", (state, action) => {
        state.loading = false
        state.products = action.payload.products
        state.inStock = action.payload.inStock
        state.outOfStock = action.payload.outOfStock
    })
    .addCase("getProductDelailsSuccess", (state, action) => {
        state.loading = false
        state.products = action.payload.products
        state.inStock = action.payload.inStock
        state.outOfStock = action.payload.outOfStock
    })
    





    // Fail
    builder
    .addCase("getAllProductsFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("getAdminProductsFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    .addCase("getProductDelailsFail", (state, action) => {
        state.loading = false
        state.error = action.payload
    })
    





    builder.addCase("clearError", (state) => {
        state.error = null
        
    })
    builder.addCase("clearMessage", (state) => {
        state.message = null
        
    })







})