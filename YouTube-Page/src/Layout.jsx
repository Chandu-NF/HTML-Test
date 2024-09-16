import { Box, Typography } from '@mui/joy';
import React from 'react';
import { Link, Outlet } from "react-router-dom";


function Layout(){
    return (
    <>
    <Box
    sx={{
        position: 'absolute',
        top: '0px',
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'seagreen',
        border: '2px solid black',
        width: '100%',
        padding: '5px',
        gap: 10,
        fontSize: '20px'}}>
        <Typography component={Link} to="/home" level="body1" textColor="white" sx={{ cursor: 'pointer' }}>
        Home
        </Typography>
        <Typography component={Link} to="/explore" level="body1" textColor="white" sx={{ cursor: 'pointer' }}>
        Explore
        </Typography>
        <Typography component={Link} to="/search" level="body1" textColor="white" sx={{ cursor: 'pointer' }}>
        Search
        </Typography>
    </Box>

<Box >
<Outlet />
</Box>
</>
)}
export default Layout
