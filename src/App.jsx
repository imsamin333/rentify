import './App.css'

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import CreateListingPage from './pages/CreateListingPage';
import EditListing from './pages/EditListing';
import MyListings from './pages/MyListings';
import Navbar from './components/Navbar';
import ProtectLayout from './pages/ProtectLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getcurrentuserAuth } from './store/authThunk';
import Footer from './components/Footer';
import logo from "./assets/logo.png"


function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getcurrentuserAuth())
  },[])

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='fixed w-full flex justify-between items-center shadow-lg p-1.5 bg-blue-400  '>
        <img src={logo} alt="logo"  className='h-11 w-auto rounded-full ml-3' />
        <Navbar/>
      </div>
      

      <main className='flex-1'>

        <Routes>
          {/* public routes */}
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signup" element={<SignUpPage/>}></Route>
          <Route path="/login" element={<LogInPage/>}></Route>

          {/* protected routes */}
         
          <Route path='/create' element={
            <ProtectLayout>
              <CreateListingPage/>
            </ProtectLayout>
          }/>

          <Route path='/edit/:id' element={
            <ProtectLayout>
              <EditListing/>
            </ProtectLayout>
          }/>
          <Route path='/myListings' element={
            <ProtectLayout>
              <MyListings/>
            </ProtectLayout>
          }/>
        </Routes>

      </main>


      <Footer />
    </div>
  )
}

export default App
