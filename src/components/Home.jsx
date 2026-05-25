// import React,{useEffect} from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import ListingCard from './ListingCard';
// import { fetchListings } from '../store/listingThunk';


// function Home() {

//     const dispatch = useDispatch();
//     const listings = useSelector(state=>state.listings.listings );


//     useEffect(()=>{
//       dispatch(fetchListings())
//     },[])
//   return (
//     <div>
//         {
//            listings && listings.map(listing=>(
//                 <ListingCard key={listing.$id} listing={listing}/>
//             ))
//         }
//     </div>
//   )
// }

// export default Home