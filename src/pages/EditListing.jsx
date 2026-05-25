import React from 'react'
import UpdateListing from '../components/UpdateListing'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';


function EditListing() {

  const {id} = useParams();
  const listings = useSelector(state=> state.listings.listings);
  const listing = listings.find(list=> list.$id === id);

  if(!listing) return <p className='ml-3.5'>list not found</p>
  return (
    <div>
      <UpdateListing listing={listing}/>
    </div>
  ) 
}

export default EditListing