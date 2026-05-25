import React from 'react'
import { logoutAuth } from '../store/authThunk'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
function LogOut() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    dispatch(logoutAuth());
    navigate("/")
  }
  return (
    <div>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default LogOut