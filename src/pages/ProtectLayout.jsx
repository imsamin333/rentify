import React from 'react'
import { Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

function ProtectLayout({children}) {
    const status = useSelector(state=> state.auth.status);

    if(!status) return <Navigate to="/login" />   
    return <>{children}</>;
}
export default ProtectLayout