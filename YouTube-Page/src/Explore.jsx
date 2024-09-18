import { Box, Modal } from '@mui/joy';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardComp from './CardComp.jsx';
import { playVideoBox, videoBox } from './home.js';

function ExplorePage() {
    const [videos, setVideos] = useState([]);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    const apiURL = import.meta.env.VITE_API_URL_HOME;
    const apiKey = import.meta.env.VITE_API_KEY;


    useEffect(() => {
        axios.get(`${apiURL}/search`, {
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
                key={video.id.videoId} 
                vid={video} 
                onClick={handleVideoClick} 
                />
            ))}

            <Modal open={!!selectedVideoId} onClose={handleCloseModal}>
            <Box sx={playVideoBox}>
                {selectedVideoId && (
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${selectedVideoId}`}
                            allowFullScreen
                        />
                    ) }
            </Box>
        </Modal>
        </Box>
    );
}

export default ExplorePage;
