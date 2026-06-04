import { createAsyncThunk } from "@reduxjs/toolkit";

import authService from "../appwrite/auth";


export const createAccountAuth = createAsyncThunk(
    "auth/createAccountAuth",
    async({email,password,name},thunkAPI)=>{
        try {
           await authService.createAccount({email, password, name})
            const user = await authService.currentUser()
            return {
                $id: user.$id,
                name: user.name,
                email: user.email
            }
        } catch (error) {
            console.log("createAccountAuth error", error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const loginAuth = createAsyncThunk(
    "auth/loginAuth",
    async({email, password},thunkAPI)=>{
        try {
            await authService.logIn({email, password})  // ✅ just login
            const user = await authService.currentUser()  // ✅ then get user
            return {
                $id: user.$id,
                name: user.name,
                email: user.email
            }
            
        } catch (error) {
            console.log("login thunk error", error)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)


export const getcurrentuserAuth = createAsyncThunk(
    "auth/getcurrentuserAuth",
    async(_,thunkAPI)=>{
        try {
            const res = await authService.currentUser();
            // return res;
            if(!res) return null;
             return {
                $id: res.$id,
                name: res.name,
                email: res.email
            }
        } catch (error) {
            console.log("getcurrentuserAuth thunk error", error)
            return thunkAPI.rejectWithValue(error.message) 
        }
    }
)

export const logoutAuth = createAsyncThunk(
    "auth/logoutAuth",
    async(_,thunkAPI)=>{
        try {
            const res = await authService.logOut();
            return true;
            
        } catch (error) {
            console.log("logout auth error",error)
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)