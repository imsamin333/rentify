
import React from 'react'
import service from '../appwrite/config'
import { useSelector, useDispatch } from 'react-redux'
import { deleteListing } from '../store/listingThunk';
import { useNavigate } from 'react-router-dom';

function ListingCard({listing}) {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.userData);
  const owner = user && user.$id === listing.ownerId;
  const dispatch = useDispatch();

  if(!listing) return null;

  return (
    <div className='shadow-xl flex flex-col items-center pt-2 pb-3'>
      <div className='h-[130px] w-full px-2 border-b-2 mb-2'>
        <img src={service.getFileView(listing.images[0])} alt='no image' className='w-full h-full object-cover'/>
      </div>
      <div className='w-full flex flex-col items-center px-2 text-[13px] gap-0.5'>
        <p>{listing.title}</p>
        <p>{listing.price}</p>
        <p>{listing.location}, {listing.city}</p>
        <p>{listing.description}</p>
        <p>{listing.amenities}</p>
        <p>{listing.isAvailable ? "Available" : "Not Available"}</p>
        <p>{listing.contactNumber}</p>
      </div>
      <div className='flex mt-2 gap-2'>
        {owner && <>
          <button onClick={() => navigate(`/edit/${listing.$id}`)}
            className="bg-blue-400 text-white rounded-md p-0.5 px-3 text-[14px] border-0 hover:cursor-pointer hover:rounded-xl hover:bg-blue-600 transition-all duration-200">
            Edit
          </button>
          <button onClick={() => dispatch(deleteListing(listing.$id))}
            className="bg-blue-400 text-white rounded-md p-0.5 px-3 text-[14px] border-0 hover:cursor-pointer hover:rounded-xl hover:bg-blue-600 transition-all duration-200">
            Delete
          </button>
        </>}
      </div>
    </div>
  )
}

export default ListingCard