import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import listingsReducer from "./listingSlice"

export const store= configureStore({
    reducer:{
        auth: authReducer,
        listings: listingsReducer
    },
})