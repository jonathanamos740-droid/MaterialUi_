import { AppBar, Avatar, styled, Toolbar, Typography } from '@mui/material'
import {MenuBook} from '@mui/icons-material'
import { InputBase } from '@mui/material';
import { Badge } from '@mui/material';
import { Mail,Notifications} from '@mui/icons-material';
import me from "../assets/me.jpg"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import React from 'react'
import { useState } from 'react';

const Styledtoolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})
const Search=styled('div')({
backgroundColor:"white",
padding:"0 10px",
borderRadius:"10px",
width:"40%"
})
const SearchIcon=styled('Box')({
display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"20px",

})
 const Userbox=styled('Box')({
  display:"flex",
justifyContent:"center",
alignItems:"center",
gap:"10px"
 })

const Navbar = () => {
  const [open,setopen]=useState(false)
  return (
    <div>
          
              <AppBar position="fixed">
            <Styledtoolbar><Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>JOBOOK</Typography>
          <MenuBook  sx={{display:{xs:"block",sm:"none"}}} />
          <Search> <InputBase placeholder='Search'/></Search>
          <SearchIcon>
             <Badge badgeContent={4} color="error" sx={{display:"flex", gap:"20px",}}>
              <Notifications sx={{display:{xs:"none",sm:"block"}}}/>
  <Mail />
</Badge>
<Avatar 
  src={me} 
  sx={{ 
    width: "30px", 
    height: "30px", 
    display: { xs: "none", sm: "block" } 
    
  }} 
  onClick={e=>setopen(true)}
/>
</SearchIcon>
<Userbox sx={{display:{xs:"flex",sm:"none"}}}   onClick={e=>setopen(true)}>
  <Avatar src={me} sx={{width:"30px",height:"30px"}}/>
  <Typography variant='span'>Joe</Typography>
</Userbox>
            </Styledtoolbar>
 <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
       onClose={e=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
            </AppBar>
          

    </div>
  )
}

export default Navbar
