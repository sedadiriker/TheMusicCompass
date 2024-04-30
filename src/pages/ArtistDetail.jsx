import { Avatar, Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data, filterImageUrls } from "../helper/data";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ArtistDetail = () => {
  const [songs, setSongs] = useState([]);
  const [showmore, setShowmore] = useState(false);
  const { name } = useParams();
  const imageUrls = filterImageUrls(data);

  const api_key = process.env.REACT_APP_API_KEY;
  const URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getTopTracks&artist=${name}&api_key=${api_key}&format=json`;

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
        pt: "3rem",
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

      <Box px="2rem" py="1rem">
        <Typography py="1rem" color="logoColor" variant="h4" fontWeight="bold">
          popular songs
        </Typography>
        {!showmore ? (
          <>
            {songs.slice(0, 5).map(({ id, name, playcount }, index) => (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                sx={{ cursor: "pointer", ":hover": { color: "yellow" } }}
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
                  <PlayArrowIcon />
                  {playcount}
                </Typography>
              </Box>
            ))}
            <Typography
              fontSize="1.5rem"
              color="#1BD760"
              sx={{ ":hover": { opacity: "0.6" } }}
              onClick={() => setShowmore(true)}
            >
              See More
            </Typography>
          </>
        ) : (
          <>
            {songs.map(({ id, name, playcount }, index) => (
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                sx={{ cursor: "pointer", ":hover": { color: "yellow" } }}
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
                  <PlayArrowIcon />
                  {playcount}
                </Typography>
              </Box>
            ))}
            <Typography
              fontSize="1.5rem"
              color="brown"
              sx={{ ":hover": { opacity: "0.6" } }}
              onClick={() => setShowmore(false)}
            >
              Show Less
            </Typography>
          </>
        )}
      </Box>
    </Container>
  );
};

export default ArtistDetail;
