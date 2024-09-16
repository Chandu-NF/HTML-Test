import { Box, Card, CardContent, Typography } from '@mui/joy';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { cardStyle, channelTitleStyle, publishedAtStyle, titleStyle } from './home.js';

function ExplorePage() {
    const [videos, setVideos] = useState([]);

    const apiURL = import.meta.env.VITE_API_URL_EXPLORE;
    const apiKey = import.meta.env.VITE_API_KEY;


    useEffect(() => {
        axios.get(apiURL, {
            params: {
                part: 'snippet',
                q: 'React',
                type: 'video',
                key: apiKey,
                maxResults: 24
            }
        }).then(response => {
            setVideos(response.data.items);
        })
        },[]);

    return (
        <Box
        sx={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap', 
            justifyContent: 'center',
            paddingLeft: '120px',
            marginTop: '5rem'
          }}>
            {videos.map((video) => (
                <Card key={video.id.videoId}
                 sx={cardStyle}>
                    <img  className ='pic' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <CardContent className = 'cardCont'>
                        <Typography 
                         sx={ titleStyle }
                            variant="h5">{video.snippet.title.length>50
                                ? video.snippet.title.slice(0,50) + "....."
                                :video.snippet.title}</Typography>
                        <Typography
                        sx={ channelTitleStyle  }>
                                {video.snippet.channelTitle}</Typography>
                        <Typography sx={ publishedAtStyle }>
                                {new Date(video.snippet.publishedAt).toLocaleDateString()}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}

export default ExplorePage;
