import { createAsyncThunk } from "@reduxjs/toolkit";

import service from "../appwrite/config";

export const fetchListings = createAsyncThunk(
    "listings/fetchListings",
    async(_,thunkAPI)=>{
        try {
            const res = await service.listPost()
            // return  res.documents;
            return res.documents.map(doc => ({
                $id: doc.$id,
                title: doc.title,
                description: doc.description,
                price: doc.price,
                location: doc.location,
                city: doc.city,
                amenities: doc.amenities,
                images: doc.images,
                ownerId: doc.ownerId,
                contactNumber: doc.contactNumber,
                isAvailable: doc.isAvailable,
            }))

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const createListing = createAsyncThunk(
    "listings/createListings",
    async(data, thunkAPI)=>{

        let fileId = null;
        try {
            if(data.images){
                const imgFile = await service.createFile(data.images);
                fileId = imgFile.$id;
                console.log(fileId)
            }     

            const res = await service.createPost({
                ...data,images: fileId ? [fileId] : []
            })
            // return res;
            return {
                $id: res.$id,
                title: res.title,
                description: res.description,
                price: res.price,
                location: res.location,
                city: res.city,
                amenities: res.amenities,
                images: res.images,
                ownerId: res.ownerId,
                contactNumber: res.contactNumber,
                isAvailable: res.isAvailable,
            }


        } catch (error) {
            if(fileId) await service.deleteFile(fileId)
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const updateListing = createAsyncThunk(
    "listings/updateListing",
    async({documentId, data, oldImageId}, thunkAPI) =>{

        let fileId = data.images;
        try {
            if(data.images instanceof File){
                const imgFile = await service.createFile(data.images);
                fileId = imgFile.$id
            }


            const res = await service.updatePost(documentId, {...data, images: fileId ? [fileId] : [],})

            if(data.images instanceof File && oldImageId){
                await service.deleteFile(oldImageId);
            }
            // return res;
            return {
                $id: res.$id,
                title: res.title,
                description: res.description,
                price: res.price,
                location: res.location,
                city: res.city,
                amenities: res.amenities,
                images: res.images,
                ownerId: res.ownerId,
                contactNumber: res.contactNumber,
                isAvailable: res.isAvailable,
            }



        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const deleteListing = createAsyncThunk(
    "listings/deleteListing",
    async(documentId, thunkAPI)=>{
        try {
            const res = await service.deletePost(documentId);
            return documentId;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)