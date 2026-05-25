import { createSlice } from '@reduxjs/toolkit'
import {
    createAccountAuth,
    loginAuth,
    getcurrentuserAuth,
    logoutAuth
} from "./authThunk"

const initialState = {
    status: false,
    userData:null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        // logIn: (state, action)=>{
        //     state.status= true;
        //     state.userData= action.payload;
        // },

        // logOut:(state)=>{
        //     state.status = false;
        //     state.userData = null;
        // }
    },

    extraReducers: (builder)=>{
        builder.addCase(createAccountAuth.fulfilled,(state,action)=>{
            state.status = true;
            state.userData = action.payload
        })
        
        builder.addCase(loginAuth.fulfilled,(state,action)=>{
            state.status = true;
            state.userData = action.payload
        })
        builder.addCase(logoutAuth.fulfilled,(state,action)=>{
            state.status = false;
            state.userData = null;
        })
        builder.addCase(getcurrentuserAuth.fulfilled,(state,action)=>{
            state.status = action.payload ? true : false;
            state.userData = action.payload
        })

    }

})


// export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;