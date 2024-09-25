import { Typography } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";



function NavComp (){
    const links = [
        {to:"/home", label: 'Home'},
        {to:"/explore", label: 'Explore'},
        {to:"/search", label: 'Search'}
    ]
    
    return(
    <>
    {links.map((link, index) =>(
        <Typography
            key = {index}
            component={Link}
            to = {link.to}
            textColor="white"
            sx={{cursor: "pointer"}}
          >
          {link.label}
        </Typography>
        ))}
    </>
    )
}

export default NavComp