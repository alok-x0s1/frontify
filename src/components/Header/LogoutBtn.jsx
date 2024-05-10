import React from 'react'
import authService from "../../appwrite/config"
import { logout } from "../../features/authSlice"
import { useDispatch } from 'react-redux'

const LogoutBtn = () => {
    const dispatch = useDispatch()
    function handleLogut() {
        authService.logout()
            .then(
                () => dispatch(logout())
            )
    }

  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >LogoutBtn</button>
  )
}

export default LogoutBtn