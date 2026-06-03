
import React from 'react'
import { useSelector } from 'react-redux'
import ListingCard from './ListingCard'

function Mylistings() {
  const listings = useSelector(state => state.listings.listings);
  const user = useSelector(state => state.auth.userData);

  if(!user) return <p>Please login first</p>

  const myListings = listings.filter(listing => listing.ownerId === user.$id)

  if(myListings.length < 1) return <p className='ml-3.5'>No Listings</p>;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {myListings.map(listing => (
        <ListingCard listing={listing} key={listing.$id}/>
      ))}
    </div>
  )
}

export default Mylistings