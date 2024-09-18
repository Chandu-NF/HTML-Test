import { Box, Button, Input, Modal } from '@mui/joy';
import axios from 'axios';
import React, { useState } from 'react';
import CardComp from './CardComp';
import { inputBox, inputButton, playVideoBox, searchBox, searchVideoBox } from './home';


function SearchPage() {
    const [query, setQuery] = useState('');
    const [videos, setVideos] = useState([]);
    const [selectedVideoId, setSelectedVideoId] = useState(null);

    const apiURL = import.meta.env.VITE_API_URL_HOME;
    const apiKey = import.meta.env.VITE_API_KEY;


    const handleSearch = () => {
        axios.get(`${apiURL}/search`, {
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

    const handleVideoClick = (id) => {
        setSelectedVideoId(id)
    };

    const handleCloseModal = () => {
        setSelectedVideoId(null)
    };

    return (
        <Box>
        <Box
        sx={searchBox}>
            <Input
                label="Search Videos"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search....'
                sx={inputBox}
            />
            <Button sx ={inputButton} onClick={handleSearch} variant="contained">Search</Button>
        </Box>,

        <Box
            sx ={searchVideoBox}>
             
            
            {videos.map((video) => (
               <CardComp
               key={video.id.videoId} 
               vid={video} 
               onClick={handleVideoClick} 
               />
            ))}
        </Box>
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


export default SearchPage;
