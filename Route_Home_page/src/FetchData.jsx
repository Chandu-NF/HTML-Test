import { Box, Card, CardContent, List, Typography } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import './index.css';




function FetchData() {

    const [data, setData] = useState([]); 

    const deleteList = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response =>  response.json())
            .then(jsonData => {
                setData(jsonData); 
            })
    }, []);

    return (
    <Box
        sx ={{  display: 'flex',
                justifyContent: 'center',
                marginTop: '1rem',
                padding: '0 20px',
 
      }}
      >
      <Card variant="outlined" 
        sx={{ 
            display: 'flex',
            width: 700, 
            backgroundColor:'wheat', 
            borderRadius: 12, 
            border:'2px solid black', 
            alignItems: 'center'} } >
        <CardContent>
          <Typography level="title-md" textColor="common.black" textAlign={'center'} fontSize={'20px'}>
          FETCHED DATA:
          </Typography>
          <Typography textColor="common.black">
          <List className = 'customList' sx={{ padding: '4px 0', listStyleType: 'disc' }}>
                {data.map(item => (
                    <li  key={item.id}>{item.title} 
                    <button className='delButton' onClick = {()=>deleteList(item.id)}> X </button> </li>
                ))}
            </List>
        </Typography>
        </CardContent>
    </Card>
</Box>
    );
}

export default FetchData
