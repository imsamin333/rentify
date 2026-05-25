import React from 'react'
import service from '../appwrite/config'
import { useSelector,useDispatch } from 'react-redux'
import { deleteListing } from '../store/listingThunk';
import { useNavigate } from 'react-router-dom';


function ListingCard({listing}) {

  const navigate = useNavigate();

  const user = useSelector(state=> state.auth.userData);
  const owner = user && user.$id === listing.ownerId
  const dispatch = useDispatch()

  if(!listing) return null;
  const imageFile = service.getFileView(listing.images);

  console.log("listing images:", listing.images);
  console.log("preview url:", service.getFileView(listing.images?.[0]));

  return <>

    <div className='h-[340px] w-full md:w-[320px] shadow-xl flex flex-col items-center justify-center mt-1.5 mb-2.5'>
        <div className='p-1 h-[130px] w-[200px] flex justify-center items-center rounded-md pb-1 mb-0.5 border-b-2'>
          <img src={service.getFileView(listing.images[0])} alt='no image' className='w-full h-full'/>
        </div>
        <div className='shadow-2xl w-[90%] flex justify-center items-center flex-col p-1 text-[13px]'>
          <p>{listing.title}</p>
         <p>{listing.price}</p>
         <p>{listing.location}, {listing.city}</p>
         <p>{listing.description}</p>
        <p>{listing.amenities}</p>
        <p>{listing.isAvailable ? "Available" : "Not Available"}</p>
        <h1>{listing.contactNumber}</h1>

        </div>
        
    {/* </div> */}
    <div className=' flex mt-2.5 gap-2.5'>
        {owner && <>
        <button onClick={()=>navigate(`/edit/${listing.$id}`)}
          className=" bg-blue-400 text-white rounded-md p-0.5 px-3 text-[14px] border-0 border-blue-900 hover:cursor-pointer hover:rounded-xl hover:bg-blue-600 hover:px-3.5 transition-all duration-200 "
          >Edit</button>
        <button onClick={()=>dispatch(deleteListing(listing.$id))}
          className=" bg-blue-400 text-white rounded-md p-0.5 px-3 text-[14px] border-0 border-blue-900 hover:cursor-pointer hover:rounded-xl hover:bg-blue-600 hover:px-3.5 transition-all duration-200 "
          >Delete</button></>}
    </div>
    
    </div>

  </>
}

export default ListingCard