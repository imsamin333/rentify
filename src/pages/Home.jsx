
import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListingCard from '../components/ListingCard';
import MyListings from './MyListings';
import { fetchListings } from '../store/listingThunk';


function Home() {

    const dispatch = useDispatch();
    const listings = useSelector(state=>state.listings.listings );
    const user = useSelector(state=> state.auth.userData)

    useEffect(()=>{
      dispatch(fetchListings())
    },[user])
  return (
    
  <div className='p-4'>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-11'>
      {listings && listings.map(listing => (
        <ListingCard key={listing.$id} listing={listing}/>
      ))}
    </div>

    {/* <MyListings /> */}
  </div>
  )
}

export default Home