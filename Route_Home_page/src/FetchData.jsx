import { Box, Card, CardContent, List, ListItem, Typography } from '@mui/joy';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';




function FetchData() {

    const [data, setData] = useState([]); 

    const deleteList = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/${id}')
    .then(response=>{
        if(response.status == 200){
            const updatedData = data.filter(item => item.id !== id);
            setData(updatedData);
        } else {
            console.error('Failed to delete the item');
    }
    })
    }

        useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data); 
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

          <List className = 'customList' >
                {data.map(item => (
                    <ListItem sx={{ display: 'list-item'  }} key={item.id}>{item.title} 
                    <button  className='delButton' onClick = {()=>deleteList(item.id)}> X </button> </ListItem>
                ))}
            </List>
        </Typography>
        </CardContent>
    </Card>
</Box>
    );
}


export default FetchData
