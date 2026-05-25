import React from 'react'
import {useForm} from  "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import Input from './Input';
import { createListing } from '../store/listingThunk';

function CreateListing() {

    const {register, handleSubmit,reset} = useForm();
    const dispatch = useDispatch()
    const  user = useSelector(state=> state.auth.userData)

    const submit = (data)=>{
        dispatch(createListing(
            {...data,
                price:parseInt(data.price),
                images:data.images[0],
                amenities: data.amenities ? data.amenities.split(",").map(item=>item.trim()):[],
                ownerId: user.$id}))

                reset();
    }

    // {title, description, price, location, city, amenities, images, ownerId, contactNumber, isAvailable}

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap mt-3.5' >
        <div className='w-2/3 px-2'>
            <Input 
                label="Title"
                placeholder=" :"
                className="mb-4 border-black rounded-md ml-1"
                {...register("title", {required: true})}  />
        </div>

        <div className='w-2/3 px-2'>
            <Input 
                label="price"
                placeholder=" :"
                className="mb-4 border-black rounded-md ml-1"
                {...register("price", {required: true})}  />
        </div>

        <div className='w-2/3 px-2'>
            <Input 
                label="description"
                placeholder=" :"
                className="mb-4 border-black rounded-md ml-1"
                {...register("description")}  />
        </div>

        <div className='w-2/3 px-2'>
            <Input 
                label="location"
                placeholder=" :"
                className="mb-4 border-black rounded-md ml-1"
                {...register("location", {required: true})}  />
        </div>

        <div className='w-2/3 px-2'>
            <Input 
                label="city"
                placeholder=" :"
                className="mb-4 border-black rounded-md ml-1"
                {...register("city")}  />
        </div>

        <div className='w-2/3 px-2'>
            <Input 
                label="amenities"
                placeholder=" :"
                className="mb-4 border-black rounded-md ml-1"
                {...register("amenities")}  />
        </div>

        <div className='w-2/3 px-2'>
            <Input 
                label="image"
                placeholder=""
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                className="mb-4"
                {...register("images", {required: true})}  />
        </div>

        <div className='w-2/3 px-2'>
            <Input 
                label="ContactNumber"
                placeholder=" :"
                type="Number"
                className="mb-4 border-black rounded-md ml-1 appearance-none"
                {...register("contactNumber", {required: true})}  />
        </div>

        {/* <div className='w-2/3 px-2 flex items-center'> */}
        <div className=' w-2/3 flex items-center gap-2 px-2'>
            <Input 
                label="Available"
                placeholder=" :"
                type="checkbox"
                className="mb-4  ml-1 "
                {...register("isAvailable")}  />
        </div>

        <div className='w-full ml-1.5'>
            <button type="submit"  className=" w-auto bg-blue-400 text-white mx-auto rounded-md p-1 text-[16px] border-0 border-blue-900 hover:cursor-pointer hover:rounded-xl hover:bg-blue-600 hover:p-2 transition-all duration-200 ">
            Create Listing
            </button>
        </div>
         
      

    </form>
  )
}

export default CreateListing;
