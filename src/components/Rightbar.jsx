import React from 'react'
import {Box, ImageList, ImageListItem, Typography,Divider,ListItem,ListItemText,ListItemAvatar,List} from "@mui/material"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
const Rightbar = () => {
  return (
   
          <Box  flex={2} 
          sx={{display:{xs:'none',sm:'block'}}}>
 <Box sx={{ position: "sticky", top: 64, overflowY: "auto", maxHeight: "calc(100vh - 64px)" }}>
  <Typography variant='h6' color='gray'> 
    Friends
  </Typography>
  <AvatarGroup total={20}>
  <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
</AvatarGroup>

  <Typography variant='h6' color='gray' > 
  Latest Photos
  </Typography>
  <ImageList>
    <ImageListItem>
      <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'/>
    </ImageListItem>
        <ImageListItem>
      <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d'/>
    </ImageListItem>
        <ImageListItem>
      <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'/>
    </ImageListItem>
        <ImageListItem>
      <img src='https://images.unsplash.com/photo-1533827432537-70133748f5c8'/>
    </ImageListItem>
        <ImageListItem>
      <img src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'/>
    </ImageListItem>
  </ImageList>
  
  <Typography variant='h6' color='gray' > 
  Latest Conversations
  </Typography>
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
</Box>
          </Box>
  
  )
}

export default Rightbar
