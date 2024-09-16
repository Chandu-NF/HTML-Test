import { Box, Button, Card, CardContent, Input, Typography } from '@mui/joy';
import axios from 'axios';
import React, { useState } from 'react';
import { cardStyle, channelTitleStyle, publishedAtStyle, titleStyle } from './home';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);

    const apiURL = import.meta.env.VITE_API_URL_EXPLORE;
    const apiKey = import.meta.env.VITE_API_KEY;


    const handleSearch = () => {
        axios.get(apiURL, {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                key: apiKey,
                maxResults: 24
            }
        }).then(response => {
            setVideos(response.data.items);
        })
    };

    return (
        <Box>
        <Box
        sx={{
            position: 'absolute',
            display: 'flex',
            top: '5rem',
            left: '40%',
          }}
          >
            <Input
                label="Search Videos"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search....'
                sx={{
                    border: '2px solid black',
                    backgroundColor: 'whitesmoke',
                    width: '280px',
                    height: '20px',
                 }}
            />
            <Button sx ={{
                border: '1px solid black', 
                height: '4px',
                left: '3%',
                backgroundColor: 'lightseagreen',
                color: 'white'
            }} onClick={handleSearch} variant="contained">Search</Button>
            </Box>,

            <Box
            sx ={{position: 'relative',
                display: 'flex',
                flexWrap: 'wrap', 
                justifyContent: 'center',
                paddingLeft: '120px',
                marginTop: '7rem'}}>
             
            
            {videos.map((video) => (
                <Card key={video.id.videoId} 
                sx={{cardStyle}}
                >
                    <img className ='pic' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <CardContent className = 'cardCont'>
                        <Typography 
                        sx={titleStyle }
                        variant="h5">{video.snippet.title.length>50
                            ? video.snippet.title.slice(0,50) + "....."
                            :video.snippet.title}
                            </Typography>
                        <Typography
                        sx={channelTitleStyle }>
                                {video.snippet.channelTitle}</Typography>
                        <Typography
                        sx={publishedAtStyle }>
                                {new Date(video.snippet.publishedAt).toLocaleDateString()}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    </Box>
    );
}


export default SearchPage;
