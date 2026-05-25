import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListingCard from './ListingCard'


function Mylistings() {
    const listings = useSelector(state=> state.listings.listings);
    const user = useSelector(state=> state.auth.userData);

     if(!user) return <p>Please login first</p>
     
    const myListings = listings.filter(listing=> listing.ownerId === user.$id)

    if(myListings.length < 1) return <p className='ml-3.5'>No Listings</p>;
  return (
    <div className='flex flex-wrap'>
        {myListings && myListings.map(listing=> <ListingCard listing={listing} key={listing.$id}/>)}
    </div>

  )
}

export default Mylistings