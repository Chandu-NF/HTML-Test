import { Box, Modal } from '@mui/joy';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import CardComp from './CardComp';
import { playVideoBox, videoBox } from './home';

interface Video {
    id: string;
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            [key: string]: {
                url: string;
            };
        };
    };
    statistics: {
        viewCount: string;
        likeCount: string;
    };
}

const HomePage: FC = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

    const apiUrl: string = import.meta.env.VITE_API_URL_HOME;
    const apiKey: string = import.meta.env.VITE_API_KEY;
    

    useEffect(() => {
        axios.get(`${apiUrl}/videos`, {
            params: {
                part: 'snippet,statistics',
                chart: 'mostPopular',
                regionCode: 'IN',
                key: apiKey,
                maxResults: 24
            }
        }).then(response => {
            setVideos(response.data.items as Video[]);
        });
    }, [apiUrl, apiKey]);  

    const handleVideoClick = (id: string) => {
        setSelectedVideoId(id);
    };

    const handleCloseModal = () => {
        setSelectedVideoId(null);
    };

    return (
        <Box sx={videoBox}>
            {videos.map((video) => (
                <CardComp 
                    key={video.id} 
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
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default HomePage;
