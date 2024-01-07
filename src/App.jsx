import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './Login'
import { getTokenFromResponse } from './spotify'

const App = () => {
  
  const [token,setToken]=useState(null)  

  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash =""
    const _token =hash.access_token
    // console.log('I have a token=',_token)

    if (_token){
        setToken(_token)
    }
  },[])

  return (
    <div className='app'>
        {
            token ? (
             <h1>You are logged in.</h1>
            ) : (
                <Login />
            )
        }
        
    </div>
  )
}

export default App