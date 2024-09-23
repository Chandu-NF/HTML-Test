import { Box, Button, Input, Modal } from '@mui/joy';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import CardComp from './CardComp';
import { inputBox, inputButton, playVideoBox, searchBox, searchVideoBox } from './home';

interface VideoItem {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        description: string;
    };
}

interface YouTubeApiResponse {
    items: VideoItem[];
}

function SearchPage() {
    const [query, setQuery] = useState<string>('');
    const [videos, setVideos] = useState<VideoItem[]>([]);
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

    const apiURL: string = import.meta.env.VITE_API_URL_HOME;
    const apiKey: string = import.meta.env.VITE_API_KEY;

    const handleSearch = () => {
        axios.get<YouTubeApiResponse>(`${apiURL}/search`, {
            params: {
                part: 'snippet',
                q: query,
                type: 'video',
                key: apiKey,
                maxResults: 24
            }
        })
        .then(response => {
            setVideos(response.data.items);
        })
        .catch(error => {
            console.error('Error fetching videos:', error);
        });
    };

    const handleVideoClick = (id: string) => {
        setSelectedVideoId(id);
    };

    const handleCloseModal = () => {
        setSelectedVideoId(null);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <Box>
            <Box sx={searchBox}>
                <Input
                    label="Search Videos"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search...."
                    sx={inputBox}
                />
                <Button sx={inputButton} onClick={handleSearch} variant="contained">
                    Search
                </Button>
            </Box>

            <Box sx={searchVideoBox}>
                {videos.map((video) => (
                    <CardComp
                        key={video.id.videoId}
                        vid={video}
                        onClick={() => handleVideoClick(video.id.videoId)}
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
                    )}
                </Box>
            </Modal>
        </Box>
    );
}

export default SearchPage;
