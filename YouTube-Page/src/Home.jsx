import { Box, Modal } from '@mui/joy';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardComp from './CardComp';
import { playVideoBox, videoBox } from './home';

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
        
    
    const handleVideoClick = (id) => {
        setSelectedVideoId(id)
    };

    const handleCloseModal = () => {
        setSelectedVideoId(null)
    };


    return (
        <Box
        sx={videoBox}>
            {videos.map((video) => (
            <CardComp 
                key={video.id} 
                vid={video} 
                onClick={handleVideoClick} 
            />
            )
        )} 

        <Modal open={!!selectedVideoId} onClose={handleCloseModal}>
            <Box sx={playVideoBox}>
                {selectedVideoId && (
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${selectedVideoId}`}
                            allowFullScreen
                        ></iframe>
                    ) }
            </Box>
        </Modal>
    </Box>
    );
}

export default HomePage;


