import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected ({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatues = useSelector(state => state.auth.status)

    useEffect(() => {
        //TODO: more easy

        // if(authStatues === true) {
        //     navigate("/")
        // } else if(authStatues === false) {
        //     navigate("/login")
        // }
        // let authValue = authStatues === true ? "true" : "false";

        if(authentication && authStatues !== authentication) {
            navigate('/login')
        } else if(!authentication && authStatues !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authentication, navigate, authStatues])

  return loader ? <h1>loading...</h1> : <>{children}</>
}