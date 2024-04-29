import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import TopArtistCard from '../components/TopArtistCard';

const Home = () => {
  const [topArtists, setTopArtists] = useState([]);

  const URL = 'http://ws.audioscrobbler.com/2.0/'
  const params = {params: {
    method: 'chart.getTopArtists',
    api_key: process.env.REACT_APP_API_KEY,
    format: 'json'
  }

  }
  useEffect(() => {
    const getTopArtists = async () => {
      try {
        const response = await axios(URL, params);
        setTopArtists(response.data.artists.artist);
        // console.log(response.data.artists.artist)
      } catch (error) {
        console.error(error);
      }
    };

    getTopArtists();
  }, []);

  return (
    <Container sx={{ marginTop: "10vh", backgroundColor:'black', width:"100%" }}>
      <Typography variant="h4" color="white">Top Artists</Typography>
      <Container sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", rowGap:"1rem", columnGap:"10px"}}>{
        topArtists?.map(artist => (
          <TopArtistCard key={artist.name} {...artist}/>
        ))
      }</Container>
    </Container>
  );
};

export default Home;
