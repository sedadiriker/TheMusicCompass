import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data, filterImageUrls } from "../helper/data";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ArtistDetail = () => {
  const [songs, setSongs] = useState([]);
  const [showmore, setShowmore] = useState(false);
  const { name } = useParams();
  const imageUrls = filterImageUrls(data);
  const navigate = useNavigate()
  const api_key = process.env.REACT_APP_API_KEY;
  const URL = `https://ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=${name}&api_key=${api_key}&format=json`;

  const getSongs = async () => {
    try {
      const res = await axios(URL);
      setSongs(res.data.toptracks.track);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSongs();
    
  }, [name]);

  
  console.log(songs);
  return (
    <Container
      sx={{
        backgroundColor: "black",
        width: "100vw",
        marginRight: "-.2px",
        minHeight: "100vh",
        pt: "9rem",
        position:'relative',
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(180deg, #393940 30%, #202024 100%)",
          py: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          paddingLeft: "2rem",
        }}
      >
        <Avatar
          src={imageUrls[name]}
          alt={name}
          sx={{
            width: { xs: 100, md: 150 },
            height: { xs: 100, md: 150 },
            filter: "grayscale(100%)",
          }}
        />
        <Typography
          sx={{ fontSize: { xs: "2rem", md: "4rem" } }}
          color={"white"}
          fontWeight="bold"
        >
          {name}
        </Typography>
      </Box>

      <Box id="popular-songs-box" px="2rem" py="1rem">
        <Typography py="1rem" color="logoColor" variant="h4" fontWeight="bold">
          Popular Songs
        </Typography>
        {!showmore ? (
          <>
            {songs.slice(0, 5).map(({ id, name, playcount,url }, index) => (
              <Box
              component={Link}
              to={url}
              target="_blank"
                display={"flex"}
                justifyContent={"space-between"}
                sx={{ cursor: "pointer", ":hover": { color: "yellow" },textDecoration:"none" }}
                fontSize="1.2rem"
                key={id}
                color="white"
              >
                <Typography>{`${index + 1}- ${name}`}</Typography>
                <Typography
                  width={100}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <PlayArrowIcon style={{color:"#18813A"}} />
                  {playcount}
                </Typography>
              </Box>
            ))}
            <Typography
              fontSize="1.2rem"
              color="#1BD760"
              sx={{ ":hover": { opacity: "0.6" } }}
              onClick={() => setShowmore(true)}
            >
              See More
            </Typography>
          </>
        ) : (
          <>
            {songs.map(({ id, name, playcount,url }, index) => (
              <Box
              component={Link}
              to={url}
              target="_blank"
                display={"flex"}
                justifyContent={"space-between"}
                sx={{ cursor: "pointer", ":hover": { color: "yellow" }, textDecoration:"none" }}
                fontSize="1.2rem"
                key={id}
                color="white"
                
              >
                <Typography>{`${index + 1} - ${name}`}</Typography>
                <Typography
                  width={100}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <PlayArrowIcon style={{color:"#18813A"}} />
                  {playcount}
                </Typography>
              </Box>
            ))}
            <Typography
              fontSize="1.2rem"
              color="brown"
              sx={{ ":hover": { opacity: "0.6" } }}
              onClick={() => setShowmore(false)}
            >
              Show Less
            </Typography>
          </>
        )}
      </Box>

      <Button onClick={()=> navigate(-1)} sx={{position:"absolute", bottom:"10px", right:"10px"}}>Back</Button>
    </Container>
  );
};

export default ArtistDetail;
