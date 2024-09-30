import { Box, Modal } from "@mui/joy";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";
import { playVideoBox, videoBox } from "./home";
import VideoProp from "./Types";

interface Video{
  items: VideoProp[];
}

function HomePage() {
  const [videos, setVideos] = useState<VideoProp[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const apiUrl: string = import.meta.env.VITE_API_URL_HOME;
  const apiKey: string = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get<Video>(`${apiUrl}/videos`, {
        params: {
          part: "snippet,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          key: apiKey,
          maxResults: 24,
        },
      })
      .then((response) => {
        setVideos(response.data.items);
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
        <CardComp key={video.id.videoId} vid={video} onClick={handleVideoClick} />
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

export default HomePage;
