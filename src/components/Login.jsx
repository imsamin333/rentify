import React from 'react'
import { useForm } from 'react-hook-form'
import { loginAuth } from '../store/authThunk'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Input from './Input'

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit} = useForm()

    const submit = async(data)=>{
        await dispatch(loginAuth(data));
        navigate("/");
    }
  return (
    <div className='ml-2.5 mt-2.5'>
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Email"
                placeholder = " :"
                className = "mb-4 border-black rounded-md ml-1"
                {...register("email", {required: true})} />
            
            <Input label="password"
                placeholder = " :"
                className = "mb-4 border-black rounded-md ml-1"
                {...register("password", {required: true})} />

            <button type='submit' 
            className=" w-auto bg-blue-400 text-white mx-auto rounded-md p-1 px-3 text-[16px] border-0 border-blue-900 hover:cursor-pointer hover:rounded-xl hover:bg-blue-600 hover:px-3.5 transition-all duration-200 "
            >Log in</button>
            
        </form>
    </div>
  )
}

export default Login