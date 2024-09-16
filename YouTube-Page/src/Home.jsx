import { Box, Card, CardContent, Typography } from '@mui/joy';
import axios from 'axios';
import React, { useEffect, useState } from 'react';



function HomePage() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet,statistics',
                chart: 'mostPopular',
                regionCode: 'IN',
                key: 'AIzaSyCveq-kf0ww58bgAgJJ6Uqi19MPf311324',
                maxResults: 12
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
            marginTop: '5rem',
          }}>
            {videos.map((video) => (
                <Card key={video.id} sx={{
                     margin: 2, 
                     display: 'inline-grid',
                     width: '280px', 
                     justifyContent: 'center',
                     border: '1px solid black',
                     borderRadius: '10px',
                     backgroundColor: 'white'}}>
                    <img className ='pic' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <CardContent className = 'cardCont'>
                        <Typography sx={{ 
                            color: 'black', 
                            textAlign: 'justify', 
                            fontSize:'14px',
                            fontWeight: 'bold' }} variant="h5">{video.snippet.title}</Typography>
                        <Typography sx={{ 
                            color: 'black', 
                            textAlign: 'left',
                            fontSize: '12px',
                            fontWeight: 'lighter' 
                             }}>
                                {video.snippet.channelTitle}</Typography>
                        <Typography sx={{ 
                            color: 'black', 
                            textAlign: 'left', 
                            justifyContent:'space-between', 
                            fontSize: '12px',
                            fontWeight: 'lighter' }}>
                                {video.statistics.viewCount} views . {new Date(video.snippet.publishedAt).toLocaleDateString()}</Typography>
                    </CardContent>
                </Card>
            )
        )}
        </Box>
    );
}

export default HomePage;
