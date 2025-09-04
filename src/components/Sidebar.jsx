import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Home , Article,Group,Store,PeopleAlt,Person,Settings,ModeNight} from "@mui/icons-material"
import Switch from '@mui/material/Switch';
const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}> 
    <Box position="fixed">
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#pages">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#group">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Group" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#marketplace">
            <ListItemIcon>
              <Store/>
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

           <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

           <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
          <Switch/>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
    </Box>
  )
}

export default Sidebar
