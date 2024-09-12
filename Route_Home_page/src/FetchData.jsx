import { Box, Card, CardContent, List, Typography } from '@mui/joy';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';




function FetchData() {

    const [data, setData] = useState([]); 

//     const deleteList = (id) => {
//         fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
//          method: 'DELETE'
//     })
//     .then(response=>{
//         if(response.ok){
//             const updatedData = data.filter(item => item.id !== id);
//             setData(updatedData);
//         } else {
//             console.error('Failed to delete the item');
//     }
//  })
// }


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response =>  response.json())
    //         .then(jsonData => {
    //             setData(jsonData); 
    //         })
    // }, []);

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
