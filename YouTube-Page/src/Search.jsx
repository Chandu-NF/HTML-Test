import { Box, Button, Card, CardContent, Input, Typography } from '@mui/joy';
import axios from 'axios';
import React, { useState } from 'react';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);

    const handleSearch = () => {
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                key: 'AIzaSyCveq-kf0ww58bgAgJJ6Uqi19MPf311324',
                maxResults: 12
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
                left: '3%'
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
                sx={{
                    margin: 2, 
                    display: 'inline-grid',
                    width: '280px', 
                    justifyContent: 'center',
                    border: '1px solid black',
                    borderRadius: '10px',
                    backgroundColor: 'white'}}
                >
                    <img className ='pic' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <CardContent className = 'cardCont'>
                        <Typography 
                        sx={{ 
                            color: 'black', 
                            textAlign: 'justify', 
                            fontSize:'14px',
                            fontWeight: 'bold' }}
                        variant="h5">{video.snippet.title}</Typography>
                        <Typography
                        sx={{ 
                            color: 'black', 
                            textAlign: 'left',
                            fontSize: '12px',
                            fontWeight: 'lighter' 
                             }}>
                                {video.snippet.channelTitle}</Typography>
                        <Typography
                        sx={{ 
                            color: 'black', 
                            textAlign: 'left', 
                            justifyContent:'space-between', 
                            fontSize: '12px',
                            fontWeight: 'lighter' }}>
                                {new Date(video.snippet.publishedAt).toLocaleDateString()}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    </Box>
    );
}


export default SearchPage;
