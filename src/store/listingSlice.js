// import { createSlice } from "@reduxjs/toolkit";

// const initialState={
//     listings:[],
//     loading: false,
//     error : null
// }

// export const listingSlice = createSlice({
//     name:"listings",
//     initialState,
//     reducers: {
//         setListings: (state,action)=>{
//             state.listings = action.payload;
//         },

//         addListing: (state,action)=>{
//             state.listings.push(action.payload);
//         },

//         deleteListing: (state,action)=>{
//             state.listings = state.listings.filter(item=> 
//                 item.$id !== action.payload
//             );
//         },

//         updateListing : (state,action)=>{
//             const index = state.listings.findIndex(item=>
//                 item.$id === action.payload.$id
//             )

//             if(index !== -1){
//                 state.listings[index] = action.payload;
//             }
//         }
//     }
// })

// export const {setListings, addListing, updateListing, deleteListing} = listingSlice.actions;
// export default listingSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import {
    fetchListings,
    updateListing,
    deleteListing,
    createListing
} from "./listingThunk"


const initialState = {
    listings:[],
    loading: false,
    error: null
}

const listingSlice = createSlice({
    name:"listings",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchListings.pending,(state,action)=>{
            state.loading = true;
        })
        builder.addCase(fetchListings.fulfilled,(state,action)=>{
            state.listings = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchListings.rejected,(state, action)=>{
            state.error = true;
            state.loading = false;
        })

        builder.addCase(createListing.fulfilled,(state, action)=>{
            state.listings.push(action.payload);
            state.loading = false;
        })

        builder.addCase(updateListing.fulfilled,(state,action)=>{
            const index = state.listings.findIndex(item=> item.$id === action.payload.$id)
            if(index !== -1){
                state.listings[index] = action.payload;
            }
        })

        builder.addCase(deleteListing.fulfilled,(state, action)=>{
            state.listings = state.listings.filter(item=>  item.$id !== action.payload )
        })
    }
})

export default listingSlice.reducer