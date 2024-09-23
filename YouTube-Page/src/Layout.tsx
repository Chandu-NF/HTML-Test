import { Box, Stack, Typography } from '@mui/joy';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import DropDownMenu from './Dropdown.tsx';
import { layoutBox } from './home';


const Layout: React.FC = () => {
    return (
        <>
            <Box sx={layoutBox}>
                <Stack 
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex',
                            fontSize: '20px'
                        }
                    }}
                    direction="row"
                    gap={15}
                >
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        width: '30px',
                        height: '30px',
                         }}> 
                        <img 
                            src="./youtube.png" 
                            alt="YouTube logo" 
                            style={{ width: '30', height: '50px' }}
                        />
                        <Typography 
                        // level="body1" 
                        textColor="white" 
                        sx={{ cursor: 'pointer', level: 'body1' }}>
                            YouTube
                        </Typography>
                    </Box>

                    <Typography 
                        component={Link} 
                        to="/home" 
                        // level="body1" 
                        textColor="white" 
                        sx={{ 
                            cursor: 'pointer',  
                            level: 'body1',
                             }}
                    >
                        Home
                    </Typography>

                    <Typography 
                        component={Link} 
                        to="/explore" 
                        // level="body1" 
                        textColor="white" 
                        sx={{ cursor: 'pointer',  level: 'body1' }}
                    >
                        Explore
                    </Typography>

                    <Typography 
                        component={Link} 
                        to="/search" 
                        // level="body1" 
                        textColor="white" 
                        sx={{ cursor: 'pointer',  level: 'body1'}}
                    >
                        Search
                    </Typography>
                </Stack>

                <Stack sx={{ display: { xs: 'flex', sm: 'none' } }}>
                    <DropDownMenu />
                </Stack>
            </Box>

            <Box>
                <Outlet />
            </Box>
        </>
    );
};

export default Layout;
