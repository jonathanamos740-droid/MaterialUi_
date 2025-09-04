import React from 'react'
import Sidebar from "./components/Sidebar.jsx"
import Rightbar from "./components/Rightbar.jsx"
import Navbar from "./components/Navbar.jsx"
import Feed from "./components/Feed.jsx"
import {Box,Container,Stack} from "@mui/material"


const App = () => {
  return (
    <div>
  <Box>
<Navbar />
    <Stack direction="row" spacing={2} justifyContent="space-between"  sx={{marginTop:"50px"}}>

   
<Sidebar/>
<Feed/>
<Rightbar/>
 </Stack>
</Box>
    </div>
  )
}

export default App
