import { Box, Card, CardContent, Modal, Typography } from '@mui/joy';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { cardStyle, channelTitleStyle, publishedAtStyle, titleStyle } from './home';

function HomePage() {
    const [videos, setVideos] = useState([]);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    const apiUrl = import.meta.env.VITE_API_URL_HOME;
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        axios.get(apiUrl, {
            params: {
                part: 'snippet,statistics',
                chart: 'mostPopular',
                regionCode: 'IN',
                key: apiKey,
                maxResults: 24
            }
        }).then(response => {
            setVideos(response.data.items);
        })
        },[]);
    
    const handleVideoClick = (videoId) => {
        setSelectedVideoId(videoId)
    };

    const handleCloseModal = () => {
        setSelectedVideoId(null)
    };


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
                <Card key={video.id} sx={cardStyle}  onClick={() => handleVideoClick(video.id.videoId)}>
                    <img className ='pic' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                    <CardContent className = 'cardCont'>
                        <Typography sx={ titleStyle} variant="h5">{video.snippet.title.length>50
                            ? video.snippet.title.slice(0,50) + "....."
                            :video.snippet.title}</Typography>
                        <Typography sx={channelTitleStyle }>
                                {video.snippet.channelTitle}</Typography>
                        <Typography sx={ publishedAtStyle }>
                                {video.statistics.viewCount} views . {new Date(video.snippet.publishedAt).toLocaleDateString()}</Typography>
                    </CardContent>
                </Card>
            )
        )}
        </Box>,

        <Modal
            open={!!selectedVideoId}
            onClose = {handleCloseModal}
        >
        <Box>
            {
                selectedVideoId && <iframe
                src={`https://www.youtube.com/embed/${selectedVideoId}`}>

                </iframe>
            }

        </Box>
        </Modal>
    );
}

export default HomePage;
