import React from 'react'
import CreateListing from "../components/CreateListing"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function CreateListingPage() {
    const {id} = useParams();
    const listings = useSelector(state=> state.listings.listings);
    const listing = listings.find(list=> list.$id === id)
  
  
  return (
    <div>
      <CreateListing  lising={listing}/>
    </div>
  )
}

export default CreateListingPage