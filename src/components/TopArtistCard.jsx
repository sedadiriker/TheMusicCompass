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
        navigate(`${name}`)
    }
    return (
        <Card onClick={handleClick} sx={{ width:"200px",textAlign:"center"}}>
            <CardActionArea>
                <Avatar
                    src={imageUrls[name]}
                    alt={name}
                    sx={{ width: '80%', height: 160,margin:"auto" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default TopArtistCard;
