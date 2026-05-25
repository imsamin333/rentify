import React from 'react'
import { useForm } from 'react-hook-form'
import {createAccountAuth } from '../store/authThunk'
import { useDispatch } from 'react-redux'
import Input from './Input'
import {useNavigate} from "react-router-dom"
function Signup() {

    const {register, handleSubmit} = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const submit = async(data)=>{
        await dispatch(createAccountAuth(data))
        navigate("/")
    }

  return (
    <div className='ml-2.5 mt-2'>
        <form onSubmit={handleSubmit(submit)}>
            
            <Input label="Email"
            placeholder = " :"
            className = "mb-4 border-black rounded-md ml-1"
            {...register("email", {required: true})} />

            
            <Input label="password"
            placeholder = " :"
            className = "mb-4 border-black rounded-md ml-1"
            {...register("password", {required: true})} />

            <Input label="name"
            placeholder = " :"
            className = "mb-4 border-black rounded-md ml-1"
            {...register("name", {required: true})} />

            <button type='submit'
             className=" w-auto bg-blue-400 text-white mx-auto rounded-md p-1 px-3 text-[16px] border-0 border-blue-900 hover:cursor-pointer hover:rounded-xl hover:bg-blue-600 hover:px-3.5 transition-all duration-200 "
             >Sign up</button>

        </form>

        </div>
        
  )
}

export default Signup