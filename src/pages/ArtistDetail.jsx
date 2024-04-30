import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ArtistDetail = () => {
  const {name} = useParams()

  
  const api_key = process.env.REACT_APP_API_KEY
  const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=${name}&api_key=${api_key}&format=json`

  const getSongs = async () => {
    try{
      const res = await axios(URL)
console.log(res)

    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=> {
    getSongs()
  },[])
  return (
    <div>
      Detail
    </div>
  )
}

export default ArtistDetail
