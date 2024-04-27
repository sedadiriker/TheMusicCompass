import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Home = () => {
const [artists,setArtists] = useState([])
const [searchTerm,setSearchTerm] = useState("artist:Sting")

const spotifyApiEndpoint = `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`;

const config = {
  headers: {
    'Authorization': 'Bearer BQBMnr09WMNb16TJ8MW9hFcLRZ3qU7khU7v20TMvIvF7pjkoi69qsNN4Vh1fwE6qNMk7K23Tw1vN4LtFnJVMmR3pOPTHTr-W8NLZxscJujMWS1de37g' 
  },
};

const getsounds = async () => {

  try{
    const res = await axios(spotifyApiEndpoint,config)
    setArtists(res.data.artists.items)
  }catch(err){
    console.log(err)
  }}
  ;

  
useEffect(()=> {
    getsounds()
},[])
console.log(artists)
  return (
    <div>
      {
        artists.map(artist => (
            <p>{artist.name}</p>
        ))
      }
    </div>
  )
}

export default Home
