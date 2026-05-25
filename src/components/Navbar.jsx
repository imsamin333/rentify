import React,{useState} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAuth } from '../store/authThunk';




function Navbar() {

    const status = useSelector(state=> state.auth.status)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);


    const handleLogOut = async()=>{
        await dispatch(logoutAuth())
        navigate("/")
    }

    const navStyles = ({isActive})=>{
        return{
           color: isActive ? "blue" : "black",
            fontWeight: isActive ? "bold" : "normal",
            // fontSize: "300px"
        }
    }
    const linkClass = "cursor-pointer  hover:bg-blue-300 hover:text-white hover:p-1.5 hover:rounded-md transition-all duration-200"
  return (
        <nav className='relative'>
       
            <div className=' hidden md:flex justify-center text-[16px] gap-4 mr-3'>
                 <NavLink to="/" style={navStyles} className={linkClass}>Home</NavLink>

            {
                status && <>
                     <NavLink to="/create" style={navStyles} className={linkClass}>Create Listing</NavLink>
                     <NavLink to="/myListings" style={navStyles} className={linkClass}>My Listings</NavLink>
                      <button onClick={handleLogOut} className={linkClass}>log out</button>
                </>
            }
            {
                !status && <>
                    <NavLink to="/login" style={navStyles} className={linkClass}>Log in</NavLink>
                    <NavLink to="/signup" style={navStyles} className={linkClass}>sign up</NavLink>

                </>
            }
            </div>


            {/* mobile CSS hamburger */}
            
             <button onClick={()=>setIsOpen(!isOpen)}
                className='mr-3 border-2 p-1.5 rounded-sm border-black md:hidden'>
                {isOpen ? "X" : "---"}
             </button>

             
            <div className={`fixed inset-0  z-50 flex flex-col  items-start shadow-lg top-15 left-1 bg-white text-black transition-all ease-in-out duration-500 
                    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%] pointer-events-none"}`}>
                    <NavLink to="/" style={navStyles} onClick={()=>setIsOpen(false)}>Home</NavLink>

                         {
                status && <>
                     <NavLink to="/create" style={navStyles} onClick={()=>setIsOpen(false)} >Create Listing</NavLink>
                     <NavLink to="/myListings" style={navStyles} onClick={()=>setIsOpen(false)} >My Listings</NavLink>
                      <button onClick={()=>{handleLogOut(); setIsOpen(false)}} >log out</button>
                </>
            }
            {
                !status && <>
                    <NavLink to="/login" style={navStyles} onClick={()=>setIsOpen(false)}>Log in</NavLink>
                    <NavLink to="/signup" style={navStyles} onClick={()=>setIsOpen(false)}>sign up</NavLink>

                </>
            }
                </div>
             
                
           
        </nav>
    ) 
}

<button></button>

export default Navbar

