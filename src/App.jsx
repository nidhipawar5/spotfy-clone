import React, { useEffect, useState } from 'react'
import './App.css'
import Login from './Login'
import { getTokenFromResponse } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import { useDataLayerValue } from './DataLayer'

//creating a contructor from installed package spotify-web-api-js
const spotify = new SpotifyWebApi();

const App = () => {
    
    //using dispatch to shoot at data layer
    const [{ user, token },dispatch] = useDataLayerValue()

    useEffect(() => {
        const hash = getTokenFromResponse()
        window.location.hash = ""
        const _token = hash.access_token
        // console.log('I have a token=',_token)

        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token
            })
            //passing token to spotify api to connect spotify to react
            spotify.setAccessToken(_token)
            //getMe is function that is part of spotify api, using this to check if everything is working and checking user details
            spotify.getMe().then(user => {
                //console.log("person", user)
                dispatch({
                    type: 'SET_USER',
                    user: user
                })
            });

            spotify.getUserPlaylists().then((playlists) => 
              dispatch({
                type:'SET_PLAYLISTS',
                playlists: playlists
              })
            );
        }
    }, [])
    
    //console.log("person",user)
    //console.log("here is token==",token)

    return (
        <div className='app'>
            {
                token ? (
                    <Player />
                ) : (
                    <Login />
                )
            }

        </div>
    )
}

export default App