import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { data, filterImageUrls } from '../helper/data';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

const TopArtistCard = ({ name }) => {
    // console.log(name)
    const imageUrls = filterImageUrls(data);
    const navigate = useNavigate()

    const handleClick=()=> {
        navigate(`/${name}`)
    }
    return (
        <Card onClick={handleClick} sx={{ width:"200px",textAlign:"center"}}>
            <CardActionArea>
            {imageUrls[name] ? (
                    <Avatar
                        src={imageUrls[name]}
                        alt={name}
                        sx={{ width: '80%', height: 160, margin: "auto",opacity:0.8, ":hover":{transform:'scale(1.1)', ":hover":{opacity:"1"}},transition:'.5s ease' }}
                    />
                ) : (
                    <Avatar
                        src="images/profil.jpg"
                        alt={name}
                        sx={{ width: '80%', height: 160, margin: "auto",":hover":{transform:'scale(1.1)', ":hover":{boxShadow:'1px 2px 30px brown'}}  }}
                    />
                )}
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" color="white">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default TopArtistCard;
