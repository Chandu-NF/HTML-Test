
import { Box, Stack, Typography } from '@mui/joy';
import React from 'react';
import { Link, Outlet } from "react-router-dom";
import DropDownMenu from './Dropdown';
import { layoutBox, layoutImg } from './home';


function Layout(){
    return (
    <>
    <Box
    sx={layoutBox}>
        <Stack sx={{display: {
                    xs: 'none',
                    sm: 'flex'}}} 
                direction={'row'} 
                gap={10}> 
        <Box sx={{
            display:'flex',
            alignItems: 'center'}}> 
            <img 
                src='./youtube.png'
                style = {layoutImg}> 
            </img>
            <Typography level="body1" textColor="white" sx={{ cursor: 'pointer'}}>
                YouTube
            </Typography>
        </Box>
        <Typography component={Link} to="/home" level="body1" textColor="white" sx={{ cursor: 'pointer' }}>
        Home
        </Typography>
        <Typography component={Link} to="/explore" level="body1" textColor="white" sx={{ cursor: 'pointer' }}>
        Explore
        </Typography>
        <Typography component={Link} to="/search" level="body1" textColor="white" sx={{ cursor: 'pointer' }}>
        Search
        </Typography>
        </Stack>

        <Stack sx={{display: {
                    xs: 'flex',
                    sm: 'none'}}}>
                <DropDownMenu/>
        </Stack>
        
    </Box>

    <Box >
        <Outlet />
    </Box>
</>
)}
export default Layout
