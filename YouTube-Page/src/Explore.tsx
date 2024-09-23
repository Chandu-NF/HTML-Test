import { Box, Modal } from "@mui/joy";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComp from "./CardComp.js";
import { playVideoBox, videoBox } from "./home.js";

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

function ExplorePage() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const apiURL: string = import.meta.env.VITE_API_URL_HOME;
  const apiKey: string = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get<YouTubeApiResponse>(`${apiURL}/search`, {
        params: {
          part: "snippet",
          q: "Java",
          type: "video",
          key: apiKey,
          maxResults: 24,
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, [apiURL, apiKey]);

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
          key={video.id.videoId}
          vid={video}
          onClick={() => handleVideoClick(video.id.videoId)}
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
}

export default ExplorePage;
