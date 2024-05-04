import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import TopArtistCard from '../components/ArtistCard';

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
    <Container sx={{backgroundColor:'black', width:"100vw", marginRight:"-.2px", minHeight:"100vh"}}>
      <Typography fontFamily={'logo'} fontWeight={'bold'}  variant="h3"color="white" pt='2rem' mb={5} textAlign={'center'}>Top Artists</Typography>
      <Container sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", rowGap:"1.5rem", columnGap:"1rem"}}>{
        topArtists?.map(artist => (
          <TopArtistCard key={artist.name} {...artist}/>
        ))
      }</Container>
    </Container>
  );
};

export default Home;
