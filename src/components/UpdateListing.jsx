import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';
import Input from './Input';
import { updateListing } from '../store/listingThunk'
import { useNavigate } from 'react-router-dom';
import service from '../appwrite/config';



function UpdateListing({listing}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const {register, handleSubmit} = useForm({
        defaultValues:{
            title: listing?.title || "",
            description: listing?.description || "",
            price: listing?.price || "",
            location: listing?.location || "",
            city: listing?.city || "",
            amenities: listing?.amenities || "",
            contactNumber: listing?.contactNumber || "",
            isAvailable: listing?.isAvailable || false
        }
    })

    const submit = (data)=>{
        dispatch(updateListing({
            documentId : listing.$id,
            oldImageId  : listing.images[0],
            data : {
                ...data,
                // images: data.images[0],
                images: data.images[0] instanceof File ?
                data.images[0] : listing.images[0],
                price:parseInt(data.price),
                amenities: data.amenities ? data.amenities.split(",").map(item=>item.trim()):[],
                
            }
        }))
        navigate("/myListings")
    }
  return (
      <form onSubmit={handleSubmit(submit)} className='flex flex-wrap' >
        <div>
             {listing.images[0] && (
                <div className='mt-2 mb-2.5 ml-3'>
                    <p>Current image:</p>
                    <img 
                        src={service.getFileView(listing.images[0])} 
                        alt="current" 
                        className="h-32 w-32 object-cover rounded-md mb-2"
                    />
                </div>
            )} 
        </div>
       
        <div className='ml-3'>
            <div className='w-2/3 px-2  mt-2'>
                <Input 
                    label="Title"
                    placeholder=""
                    className="mb-4"
                    {...register("title", {required: true})}  />
            </div>
    
            <div className='w-2/3 px-2'>
                <Input 
                    label="price"
                    placeholder=""
                    className="mb-4"
                    {...register("price", {required: true})}  />
            </div>
    
            <div className='w-2/3 px-2'>
                <Input 
                    label="description"
                    placeholder="description"
                    className="mb-4"
                    {...register("description")}  />
            </div>
    
            <div className='w-2/3 px-2'>
                <Input 
                    label="location"
                    placeholder="location"
                    className="mb-4"
                    {...register("location", {required: true})}  />
            </div>
    
            <div className='w-2/3 px-2'>
                <Input 
                    label="city"
                    placeholder="city"
                    className="mb-4"
                    {...register("city")}  />
            </div>
    
            <div className='w-2/3 px-2'>
                <Input 
                    label="amenities"
                    placeholder="amenities"
                    className="mb-4"
                    {...register("amenities")}  />
            </div>
    
            <div className='w-2/3 px-2'>
                <Input 
                    label="image"
                    placeholder="upload image"
                    type="file"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    className="mb-4"
                    {...register("images")}  />
            </div>
    
            <div className='w-2/3 px-2'>
                <Input 
                    label="ContactNumber"
                    placeholder="ContactNumber"
                    type="Number"
                    className="mb-4"
                    {...register("contactNumber", {required: true})}  />
            </div>
    
            <div className='w-2/3 px-2'>
                <Input 
                    label="Available"
                    placeholder="Available"
                    type="checkbox"
                    className="mb-4"
                    {...register("isAvailable")}  />
            </div>

            <div className='w-full ml-1.5'>
                <button type="submit"  
                    className=" w-auto  bg-blue-400 text-white mx-auto rounded-md p-1 text-[16px] border-0 border-blue-900 hover:cursor-pointer hover:rounded-xl hover:bg-blue-600 hover:p-2 transition-all duration-200 ">
                    Update Listing
                </button>
            </div>

         </div> 

    
        </form>
  )
}

export default UpdateListing