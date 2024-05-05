import { Box } from "@mui/material"

const Loading = () => {
  return (
    <Box height={'100vh'} width={'100vw'}>
        <img style={{marginLeft:'100px', objectFit:'cover'}} height={'100%'} width={'100%'} src="images/music-anim.gif" alt="loading-gif" />
    </Box>
  )
}

export default Loading
