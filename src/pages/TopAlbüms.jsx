import { Avatar, Box, Container, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { data, filterImageUrls } from '../helper/data';
import { Link } from 'react-router-dom';

const TopAlbüms = () => {
    const [topAlbums, setTopAlbums] = useState([]);
    const artists = ['Taylor Swift', 'Katy Perry', 'Rihanna', 'Eminem', 'SZA']
    const imageUrls = filterImageUrls(data);

  useEffect(() => {
    const getTopAlbums = async () => {
      try {
        const albums = [];

                for (const artist of artists) {
                    const response = await axios.get('https://ws.audioscrobbler.com/2.0/', {
                        params: {
                            method: 'artist.getTopAlbums',
                            artist,
                            api_key: process.env.REACT_APP_API_KEY,
                            format: 'json',
                            limit: 1 
                        }
                    });
                    albums.push(response.data.topalbums.album[0]);
                }

                setTopAlbums(albums);
      } catch (error) {
        console.error(error);
      }
    };

    getTopAlbums();
  }, []);
  console.log(topAlbums)
  return (
    <Container sx={{backgroundColor:'black', width:"100vw", marginRight:"-.2px", minHeight:"100vh",py:10, pt:15,backgroundImage:`url("/images/loginback.jpg")`, backgroundPosition:"center",backgroundRepeat:"repeat", backgroundSize:"contain"}}>
         <Typography  fontWeight={'bold'}  variant="h4"color="white" py='2rem' mb={5} textAlign={'center'} sx={{background: "linear-gradient(180deg, #393940 30%, #202024 100%)",}} mt={2}>Top Albums</Typography>
         {topAlbums.map((album, index) => (
    <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ cursor: "pointer", ":hover": { color: "yellow" }, textDecoration: "none",borderBottom:'1px solid gray' }}
        fontSize="1.2rem"
        key={album.name} 
        color="white"
        px={5}
        py={1}
        mb={1}
        
    >
        <Box display={'flex'} gap={2} alignItems={'center'}component={Link} to={album.url} target='_blank' sx={{color:'white', textDecoration:'none'}}>
        <Typography>{`${index + 1}-`}</Typography>
        <Avatar
                        src={imageUrls[album.artist.name]}
                        alt={album.artist.name}
                        sx={{ width: 50, height: 50, margin: "auto",opacity:0.8, ":hover":{transform:'scale(1.1)', ":hover":{opacity:"1"}},transition:'.5s ease' }}
                    />
          <Box><Typography textTransform={'uppercase'} fontWeight={'bold'} color={'error'}>{`${album.name}`}</Typography>
          <Typography>{album.artist.name}</Typography></Box></Box>
        <Typography
            width={100}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <PlayArrowIcon style={{ color: "#18813A" }} />
            {album.playcount}
        </Typography>
    </Box>
))}

    </Container>

  )
}

export default TopAlbüms
