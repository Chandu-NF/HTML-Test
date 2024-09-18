import { Card, CardContent, Typography } from '@mui/joy';
import React from 'react';
import { cardStyle, channelTitleStyle, publishedAtStyle, titleStyle } from './home';

const CardComp = ({ vid, onClick }) => {
    const videoId = vid.id.videoId ? vid.id.videoId : vid.id

    return (
        <Card key={videoId} onClick={() => onClick(videoId)} sx={cardStyle}>
            <img className='pic' src={vid.snippet.thumbnails.medium.url} alt={vid.snippet.title} />
            <CardContent className='cardCont'>
                <Typography sx={titleStyle} variant="h5">
                    {vid.snippet.title.length > 50
                        ? vid.snippet.title.slice(0, 50) + "....."
                        : vid.snippet.title}
                </Typography>
                <Typography sx={channelTitleStyle}>
                    {vid.snippet.channelTitle}
                </Typography>
                <Typography sx={publishedAtStyle}>
                    {new Date(vid.snippet.publishedAt).toLocaleDateString()}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComp;

